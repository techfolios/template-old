// Table 1 (Attacks/Death per day & Total)

var tableData1 = [
    ['Aug. 19', 'Aug. 20', 'Aug. 21', 'Aug. 22', 'Aug. 23', 'Aug. 24', 'Aug. 25', 'Aug. 26', 'Aug. 27', 'Aug. 28', 'Aug. 29', 'Aug. 30', 'Aug. 31', 'Sept. 1', 'Sept. 2', 'Sept. 3', 'Sept. 4', 'Sept. 5', 'Sept. 6', 'Sept. 7', 'Sept. 8', 'Sept. 9', 'Sept. 10', 'Sept. 11', 'Sept. 12', 'Sept. 13', 'Sept. 14', 'Sept. 15', 'Sept. 16', 'Sept. 17', 'Sept. 18', 'Sept. 19', 'Sept. 20', 'Sept. 21', 'Sept. 22', 'Sept. 23', 'Sept. 24', 'Sept. 25', 'Sept. 26', 'Sept. 27', 'Sept. 28', 'Sept. 29'],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 8, 56, 143, 116, 54, 46, 36, 20, 28, 12, 11, 5, 5, 1, 3, 0, 1, 4, 2, 3, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 2, 0, 0, 2, 0, 0, 1, 0, 1, 2, 3, 70, 127, 76, 71, 45, 37, 32, 30, 24, 18, 15, 6, 13, 6, 8, 6, 5, 2, 3, 0, 0, 2, 3, 0, 0, 2, 0, 2, 1],
    [1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 17, 73, 216, 332, 386, 432, 468, 488, 524, 536, 547, 552, 557, 558, 561, 561, 562, 566, 568, 571, 571, 571, 573, 574, 575, 576, 577, 578, 579, 579, 579],
    [1, 1, 3, 3, 3, 5, 5, 5, 6, 6, 7, 9, 12, 82, 209, 285, 356, 401, 438, 470, 500, 524, 542, 557, 563, 576, 582, 590, 596, 601, 603, 606, 606, 606, 608, 611, 611, 611, 613, 613, 615, 616]]

var table1 = [{
    type: 'table',
    header: {
        values: [["<b>Date (1854)</b>"],
        ["<b>ATTACKS (DAILY)</b>"],
        ["<b>DEATHS (DAILY)</b>"],
        ["<b>ATTACKS (TOTAL)</b>"],
        ["<b>DEATHS (TOTAL)</b>"]],
        align: ["left", "center"],
        line: { width: 1, color: 'black' },
        fill: { color: '#F93838' },
        font: { family: "Arial", size: 12, color: "white" }
    },
    cells: {
        values: tableData1,
        align: ["left", "center"],
        line: { color: "#506784", width: 1 },
        fill: { color: ['#FDCDCD', 'white'] },
        font: { family: "Arial", size: 11, color: ["black"] }
    }
}]

Plotly.newPlot('tableDiv1', table1);

// Line Graph (Attacks/Deaths)

var xData = ['Aug. 19', 'Aug. 20', 'Aug. 21', 'Aug. 22', 'Aug. 23', 'Aug. 24', 'Aug. 25', 'Aug. 26', 'Aug. 27', 'Aug. 28', 'Aug. 29', 'Aug. 30', 'Aug. 31', 'Sept. 1', 'Sept. 2', 'Sept. 3', 'Sept. 4', 'Sept. 5', 'Sept. 6', 'Sept. 7', 'Sept. 8', 'Sept. 9', 'Sept. 10', 'Sept. 11', 'Sept. 12', 'Sept. 13', 'Sept. 14', 'Sept. 15', 'Sept. 16', 'Sept. 17', 'Sept. 18', 'Sept. 19', 'Sept. 20', 'Sept. 21', 'Sept. 22', 'Sept. 23', 'Sept. 24', 'Sept. 25', 'Sept. 26', 'Sept. 27', 'Sept. 28', 'Sept. 29']

var attackDaily = {
    x: xData,
    y: [1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 8, 56, 143, 116, 54, 46, 36, 20, 28, 12, 11, 5, 5, 1, 3, 0, 1, 4, 2, 3, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0],
    mode: 'lines',
    name: 'Attacks (Daily)',
    line: {
        dash: 'solid',
        width: 2
    }
};

var deathDaily = {
    x: xData,
    y: [1, 0, 2, 0, 0, 2, 0, 0, 1, 0, 1, 2, 3, 70, 127, 76, 71, 45, 37, 32, 30, 24, 18, 15, 6, 13, 6, 8, 6, 5, 2, 3, 0, 0, 2, 3, 0, 0, 2, 0, 2, 1],
    mode: 'lines',
    name: 'Deaths (Daily)',
    line: {
        dash: 'solid',
        width: 2
    }
};

var attackTotal = {
    x: xData,
    y: [1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 17, 73, 216, 332, 386, 432, 468, 488, 516, 528, 539, 544, 549, 550, 553, 553, 554, 558, 560, 563, 563, 563, 565, 566, 567, 568, 569, 570, 571, 571, 571],
    mode: 'lines',
    name: 'Attacks (Total)',
    line: {
        dash: 'solid',
        width: 4
    }
};

var deathTotal = {
    x: xData,
    y: [1, 1, 3, 3, 3, 5, 5, 5, 6, 6, 7, 9, 12, 82, 209, 285, 356, 401, 438, 470, 500, 524, 542, 557, 563, 576, 582, 590, 596, 601, 603, 606, 606, 606, 608, 611, 611, 611, 613, 613, 615, 616],
    mode: 'lines',
    name: 'Deaths (Total)',
    line: {
        dash: 'solid',
        width: 4
    }
};

var data = [deathTotal, attackTotal, deathDaily, attackDaily];

var layout = {
    title: 'Cholera Attack and Deaths',
    xaxis: {
        showline: true,
        showgrid: false,
        showticklabels: true,
        linecolor: 'rgb(204,204,204)',
        linewidth: 2,
        autotick: false,
        ticks: 'outside',
        tickcolor: 'rgb(204,204,204)',
        tickwidth: 2,
        ticklen: 5,
        tickfont: {
            family: 'Arial',
            size: 12,
            color: 'rgb(82, 82, 82)'
        }
    },
    yaxis: {
        range: [0, 630],
        showgrid: false,
        zeroline: false,
        showline: false,
        autorange: false
    },
    legend: {
        y: 0.5,
        traceorder: 'reversed',
        font: {
            size: 16
        }
    }
};

Plotly.newPlot('lineDiv', data, layout);


// Table 2 

var tableData2 = [
    ['0-1', '2-5', '6-10', '11-15', '16-20', '21-40', '41-60', '61-80', 'over 80'],
    [8.2, 14, 12.1, 7.8, 7.2, 12.1, 13.7, 20.5, 39.6],
    [8.9, 14.7, 11.2, 7.1, 7.2, 11.8, 12.9, 20.5, 37.8]]

var table2 = [{
    type: 'table',
    header: {
        values: [["<b>AGE RANGE</b>"],
        ["<b>MALES</b>"],
        ["<b>FEMALES</b>"]],
        align: ["left", "center"],
        line: { width: 1, color: '#506784' },
        fill: { color: '#F93838' },
        font: { family: "Arial", size: 12, color: "white" }
    },
    cells: {
        values: tableData2,
        align: ["left", "center"],
        line: { color: "#506784", width: 1 },
        fill: { color: ['#FDCDCD', 'white'] },
        font: { family: "Arial", size: 11, color: ["black"] }
    }
}]

Plotly.newPlot('tableDiv2', table2);


var male = {
    x: ['0-1', '2-5', '6-10', '11-15', '16-20', '21-40', '41-60', '61-80', 'over 80'],
    y: [8.2, 14, 12.1, 7.8, 7.2, 12.1, 13.7, 20.5, 39.6],
    name: 'Male Deaths',
    marker: { color: 'rgb(222, 53, 53)' },
    type: 'bar'
};

var female = {
    x: ['0-1', '2-5', '6-10', '11-15', '16-20', '21-40', '41-60', '61-80', 'over 80'],
    y: [8.9, 14.7, 11.2, 7.1, 7.2, 11.8, 12.9, 20.5, 37.8],
    name: 'Female Deaths',
    marker: { color: 'rgb(102, 14, 189)' },
    type: 'bar'
};

var barData = [male, female];

var barlayout = {
    barmode: 'stack',
    title: 'Cholera Deaths by Age & Sex'
};

Plotly.newPlot('barDiv', barData, barlayout);


var tableData3 = [
    ['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', 'over 80'],
    [2075391, 1711664, 1395091, 1073914, 810979, 560534, 351893, 166194, 40772],
    [2065096, 1711627, 1542876, 1140383, 845260, 592970, 399019, 199326, 55704]]

var table3 = [{
    type: 'table',
    header: {
        values: [["<b>AGE RANGE</b>"],
        ["<b>MALES</b>"],
        ["<b>FEMALES</b>"]],
        align: ["left", "center"],
        line: { width: 1, color: '#506784' },
        fill: { color: '#F93838' },
        font: { family: "Arial", size: 12, color: "white" }
    },
    cells: {
        values: tableData3,
        align: ["left", "center"],
        line: { color: "#506784", width: 1 },
        fill: { color: ['#FDCDCD', 'white'] },
        font: { family: "Arial", size: 11, color: ["black"] }
    }
}]

Plotly.newPlot('tableDiv3', table3);


var pieData = [{
    values: [2065096, 1711627, 1542876, 1140383, 845260, 592970, 399019, 199326, 55704],
    labels: ['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', 'over 80'],
    domain: { column: 0 },
    name: 'Female Census',
    hoverinfo: 'label+percent+name',
    hole: .4,
    type: 'pie'
},
{
    values: [2075391, 1711664, 1395091, 1073914, 810979, 560534, 351893, 166194, 40772],
    labels: ['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', 'over 80'],
    domain: { column: 1 },
    name: 'Male Census',
    hoverinfo: 'label+percent+name',
    hole: .4,
    type: 'pie'
}];

var pieLayout1 = {
    title: 'UK Census (1851)',
    annotations: [
        {
            font: {
                size: 20
            },
            showarrow: false,
            text: 'Female',
            x: 0.185,
            y: 0.5
        },
        {
            font: {
                size: 20
            },
            showarrow: false,
            text: 'Male',
            x: 0.8,
            y: 0.5
        }
    ],
    height: 400,
    width: 900,
    showlegend: true,
    grid: { rows: 1, columns: 2 }
};

Plotly.newPlot('pieDiv1', pieData, pieLayout1);


var maleCensusData = {
    x: ['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', 'over 80'],
    y: [2075391, 1711664, 1395091, 1073914, 810979, 560534, 351893, 166194, 40772],
    name: 'Male',
    marker: { color: 'rgb(222, 53, 53)' },
    type: 'bar'
};

var maleCensusBar = [maleCensusData];

var maleCensuslayout = {
    barmode: 'stack',
    title: 'UK Male Census by Age (1851)'
};

Plotly.newPlot('barDiv2', maleCensusBar, maleCensuslayout);


var femaleCensusData = {
    x: ['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', 'over 80'],
    y: [2065096, 1711627, 1542876, 1140383, 845260, 592970, 399019, 199326, 55704],
    name: 'Female',
    marker: { color: 'rgb(102, 14, 189)' },
    type: 'bar'
};

var femaleCensusBar = [femaleCensusData];

var femaleCensuslayout = {
    barmode: 'stack',
    title: 'UK Female Census by Age (1851)'
};

Plotly.newPlot('barDiv3', femaleCensusBar, femaleCensuslayout);


var censusData = [{
    values: [8552261, 8186432],
    labels: ['Female', 'Male'],
    type: 'pie'
}];

var censusLayout = {
    height: 400,
    width: 500,
    title: 'UK Census by Gender (1851)'
};

Plotly.newPlot('pieDiv2', censusData, censusLayout);








var mymap = L.map('mapid').setView([0,0],0);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);


