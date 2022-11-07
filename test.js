d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv', function (err, rows) {

    function unpack(rows, key) {
        return rows.map(function (row) {
            return row[key];
        });
    }

    var trace = {
        x: unpack(rows, 'Date'),
        close: unpack(rows, 'AAPL.Close'),
        high: unpack(rows, 'AAPL.High'),
        low: unpack(rows, 'AAPL.Low'),
        open: unpack(rows, 'AAPL.Open'),

        // cutomise colors
        increasing: { line: { color: 'black' } },
        decreasing: { line: { color: 'red' } },

        type: 'candlestick',
        xaxis: 'x',
        yaxis: 'y'
    };

    var data = [trace];

    var layout = {
        dragmode: 'zoom',
        showlegend: false,
        xaxis: {
            rangeslider: {
                visible: false
            }
        }
    };

    Plotly.newPlot('myDiv', data, layout);
});
