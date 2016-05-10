// var chart = {
//     width : 960,
//     height : 500,
//     r : 5
// };



// // console.log(chart.rMethod());

// $(function() { 
    
//     chart.widthMethod = function(value) {
//         if(!arguments.length) return this.width; // if no value is set, get the width
//         this.width = value; // set the width
//         d3.select("#network").remove();
//         draw(chart.width, chart.height, chart.r);
//     };

//     chart.heightMethod = function(value) {
//         if(!arguments.length) return this.height; // if no value is set, get the height
//         this.height = value; // set the height
//         d3.select("#network").remove();
//         draw(chart.width, chart.height, chart.r);   
//     };

//     chart.rMethod = function(value) {
//         if(!arguments.length) return this.r; // if no value is set, get the r
//         this.r = value; // set the r
//         // $("#svgid").empty();

//         d3.select("#network").remove();
//         draw(chart.width, chart.height, chart.r);    
//     };
      
    
        
    
//     var draw = function(width, height, r) { 
//         d3.json("miserables.json", function(error, graph) {
//             if (error) throw error;
                
//             var color = d3.scale.category20();

//             var force = d3.layout.force()
//                 .charge(-120)
//                 .linkDistance(30)
//                 .size([width, height]);

//             var svg = d3.select("#my-div").append("svg")
//                 .attr("id", "network")
//                 .attr("width", width)
//                 .attr("height", height)
//                 .attr("style", "outline: solid black;");
                
//             force
//                 .nodes(graph.nodes)
//                 .links(graph.links)
//                 .start();

//             var link = svg.selectAll(".link")
//                 .data(graph.links)
//                 .enter().append("line") 
//                 .attr("class", "link")
//                 .style("stroke-width", function(d) { return Math.sqrt(d.value); });

//             var node = svg.selectAll(".node")
//                 .data(graph.nodes)
//                 .enter().append("circle")
//                 .attr("class", "node")
//                 .attr("r", r)
//                 .style("fill", function(d) { return color(d.group); })
//                 .call(force.drag);

//             node.append("title")
//                 .text(function(d) { return d.name; });

//             force.on("tick", function() {
//                 link.attr("x1", function(d) { return d.source.x; })
//                     .attr("y1", function(d) { return d.source.y; })
//                     .attr("x2", function(d) { return d.target.x; })
//                     .attr("y2", function(d) { return d.target.y; });

//                 node.attr("cx", function(d) { return Math.max(r, Math.min(width - r, d.x));})
//                     .attr("cy", function(d) { return Math.max(r, Math.min(height - r, d.y));});
//             });
//         });
//     };
//     draw(chart.width, chart.height, chart.r);

//     // chart.rMethod(10);
//     // chart.rMethod(20);
//     // chart.widthMethod(500);
//     // chart.heightMethod(200);
//     // setTimeout(5000);
//     // chart.rMethod(20);
//     // setTimeout(5000);    
//     // chart.rMethod(1);
//     // setTimeout(5000);    
//     // chart.rMethod(50);
        
// });






// // exposed methods:
// // 1. Changing width, height of div
// // 2. changing radius of Nodes 
// // 3. change color of group of nodes 
// // 4. add new node 
// // 5. connect nodes


// // var chart = function() {
// //  // Set defaults up here
// //     var chart = {
// //         width : 960,
// //         height : 500,
// //         r : 5
// //     };
 
// //     // Internal function that gets returned
// //     function my(selection) {
// //         // For each selected element, perform the function
// //         selection.each(function(data, i) {
// //             var div = d3.select(this);
// //         // generate chart here; `data` is the data and `this` is the element
        
// //         });
// //     }
// //     return my;
// // }