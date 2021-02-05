$('#formulario').submit(function (event){

    $(":submit", this).attr("disabled", "disabled");
    
    event.preventDefault();
    
    var emailAddress = $("#emailCompleto").val()

    if(isValidEmailAddress(emailAddress)){
        $("#contato_box").addClass("loading");

        const serviceID = 'service_64z16nd';
        const templateID = 'template_041ddy9';
        const userID = 'user_uih8OAJu549ircDeNcE7v';

        emailjs.sendForm(serviceID, templateID, '#formulario' ,userID).then(function(response) {

            $('body').toast({
                class: 'success',
                position: 'bottom center',
                showIcon: 'check',
                message: 'Email enviado com sucesso!'
            });

            $('#formulario')[0].reset();
            $("#enviar").removeAttr("disabled");
            $("#contato_box").removeClass("loading");
            
        }, function(error) {

            $('body').toast({
                class: 'error',
                position: 'bottom center',
                showIcon: 'times',
                message: 'Erro no envio! Tente novamente...'
            });

            $("#enviar").removeAttr("disabled");
            $("#contato_box").removeClass("loading");
            
        })
    }

    else{

        $('body').toast({
            class: 'warning',
            position: 'bottom center',
            showIcon: 'exclamation',
            message: 'Email inválido!'
        });

        $("#enviar").removeAttr("disabled");
        $("#contato_box").removeClass("loading");
    }

    

})

function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
}