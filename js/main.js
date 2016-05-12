//Special thanks to Mike Bostock https://bl.ocks.org/mbostock/4062045

// Create a function Network that will be your reusable function


$(function() {
    // Create variables within the function scope to track
    var myChart = Network()
        .rMethod(3)
        .heightMethod(900)
        .widthMethod(900)
        .borderMethod(true)
        .collisionDetectMethod(true);

    var myChart2 = Network()
        .rMethod(3)
        .heightMethod(900)
        .widthMethod(900)
        .borderMethod(true)
        .collisionDetectMethod(true);

    console.log(myChart.heightMethod());

    d3.json("data.json", function (data) {
        var chartWrapper = d3.select('#test-div')
            .datum([data])
            .call(myChart);

    })

    /*d3.json("data2.json", function(data) {
        myChart2.rMethod(10);
        myChart2.widthMethod(600);
        var chartWrapper = d3.select('#test-div')
            .datum([data])
            .call(myChart);

    })
    */
});