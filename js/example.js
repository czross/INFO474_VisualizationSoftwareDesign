
$(function() {
   var myChart = Network()
        .rMethod(20)
        .heightMethod(900)
        .widthMethod(900)
        .borderMethod(true)
        .collisionDetectMethod(true);
   
    d3.json("miserables.json", function(data) {
        var chartWrapper = d3.select('#test-div')
            .datum([data])
            .call(myChart);
    
        // myChart.rMethod(3)
        //     .widthMethod(1000)
        chartWrapper.call(myChart);
    
    });
   
    // // Initiation of chart
    // var chartWrapper = d3.select('#test-div')
    //                 .datum(["miserables.json"]) 
    //                 .call(myChart); 
                    
                
    // Update a chart parameter and the data (on some event handler)
    // myChart.param1(newValue);
    // chartWrapper.datum([newDataSet]).call(myChart); 
    
    
});
