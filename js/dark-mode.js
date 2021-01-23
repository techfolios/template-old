// TODO Add system override option. Not sure how.
let body = $("body")
let darkModeIcon = $("#darkmode > i");
let darkModeToggle = $('#darkmode');
let darkmodeEnabled = false;

let isLocalStorageEnabled = detectLocalStorage()

let localDarkModeEnabled = isLocalStorageEnabled ? localStorage.getItem("darkMode") : null;

if (localDarkModeEnabled === 'true') {
    // if user set darkMode as the preferred mode on the website, use it
    // Overwrites prefers-color-scheme
    toggleDarkMode();
} else if (localDarkModeEnabled === 'false') {
    // if user set lightMode as the preferred mode on the website, use it
    // Overwrites prefers-color-scheme
    toggleLightMode();
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // if user hasn't set a preferred mode on the website, but have a dark color scheme as default
    // use darkMode
    toggleDarkMode();
} else {
    // If user hasn't set a preferred mode or don't have a dark color scheme set as default
    // use lightMode
    toggleLightMode();
}


function toggleDarkMode () {
    // add fomantic ui's inverted class to all ui elements if they dont have dontInvert as a class
    
    body.find('.ui').addClass(function(){
        return $(this).hasClass('dontInvert') ? "" : "inverted";
    });

    // add custom inverted class to body
    body.addClass('inverted');

    $('.ui.black.bottom.attached.button.inverted').removeClass().addClass('ui green bottom attached button inverted');
    $("code").css({color: "white"});

    $('.icon-color').addClass('inverted');

    // change scrollbar background to match
    $("html").attr("style","--scrollbackground:var(--darkBG)");

    // simple toggle icon change
    darkModeIcon.removeClass('moon');
    darkModeIcon.addClass('sun');
    
    $('#darkmode span').text(" Modo Claro ")
    
    isLocalStorageEnabled ? localStorage.setItem("darkMode", true) : false;
    darkmodeEnabled = true;
    return;
}

function toggleLightMode() {
    // remove fomantic ui's inverted class from all ui elements if they dont have dontInvert as a class
    $('.ui.green.bottom.attached.button.inverted').removeClass().addClass('ui black bottom attached button')

    body.find('.ui').removeClass(function(){
        return $(this).hasClass('dontInvert') ? "" : "inverted";
    });
    // remove custom inverted class to body
    body.removeClass('inverted');
    $('.icon-color').removeClass('inverted');
    // change scrollbar background to match

    $("html").attr("style","--scrollbackground:var(lightBG)");



    // simple toggle icon change
    darkModeIcon.removeClass('sun')
    darkModeIcon.addClass('moon');

    $('#darkmode span').text(" Modo Escuro ")
    $("code").css({color: "black"});

    isLocalStorageEnabled ? localStorage.setItem("darkMode", false) : false;
    darkmodeEnabled = false;
    return;
}

darkModeToggle.click(function () {
    if (darkmodeEnabled) {
        toggleLightMode();
    } else {
        toggleDarkMode();
    }
    darkModeToggle.blur()
});


// LocalStorage is quite iffy.
// If this is check is not done, the website might be blocked due to an exception
// due to the browser not having permission to access it.
// The return value is used throughout the entire code as a failsafe.
// Refer to: https://dev.to/merri/code-golf-shortest-localstorage-step-by-step-1bh3
// and: https://github.com/Modernizr/Modernizr/blob/master/feature-detects/storage/localstorage.js
// for more information
function detectLocalStorage() {
    try {
        localStorage.setItem('detectLocalStorage', '_');
        localStorage.removeItem('detectLocalStorage');
        return true;
    } catch (error) {
        return false;
    }
}

// display body after theme is set to avoid theme flickering
// this is very hacky, but as this is a static website this shouldn't cause major problems
body.removeClass('avoid-flicker');