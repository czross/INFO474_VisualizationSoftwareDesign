// Create a function Network that will be your reusable function


var Network = function() {
  // Create variables within the function scope to track
  var width, height, r, collision, border;
  
  //default values
  width = 900; //width of svg
  height = 400; //height of svg
  r = 10; //size of each node
  collision = true; //whether collision detection will occur
  border = true; //whether there will be a border keeping the nodes within the box
  
  // Write your chart function that will be returned by the Network function.
  // It should take in a parameter that represents your selection
  var chart = function(selection) {
    // Loop through selections using the .each method
    selection.each(function(data) {
        //data must be in an object format (2 arrays within: Nodes and links)
        data = data[0]
        
      // Select `this` as the element in which you want to render your chart
        var div = d3.select(this);
        
        //colors of nodes are default
        var color = d3.scale.category20();
       
        var svg = div.append("svg")
            .attr("id", 'network')
            .attr("width", width)
            .attr("height", height)
            .attr("style", "outline: solid black;");


        var force = d3.layout.force()
            .charge(-120)
            .linkDistance(30)
            .size([width, height]);
        
        force
            .nodes(data.nodes)
            .links(data.links)
            .start();

        var link = svg.selectAll(".link")
            .data(data.links)
            .enter().append("line") 
            .attr("class", "link")
            .style("stroke-width", function(d) { return Math.sqrt(d.value); });

        var node = svg.selectAll(".node")
            .data(data.nodes)
            .enter().append("circle")
            .attr("class", "node")
            .attr("r", r)
            .style("fill", function(d) { return color(d.group); })
            .call(force.drag);

        node.append("title")
            .text(function(d) { return d.name; });

        force.on("tick", function() {
            if(collision) {
                node.each(collide(.5));
            }
            
            link.attr("x1", function(d) { return d.source.x; })
                .attr("y1", function(d) { return d.source.y; })
                .attr("x2", function(d) { return d.target.x; })
                .attr("y2", function(d) { return d.target.y; });

            
            node.attr("cx", function(d) { 
                    if(border) {
                        return Math.max(r, Math.min(width - r, d.x));
                    }else {
                        return d.x;
                    }
            });
            node.attr("cy", function(d) { 
                if(border) {
                    return Math.max(r, Math.min(height - r, d.y));
                }else {
                    return d.y;
                }
            });
        });
    
        //collision detection function
        function collide(alpha) {
            var quadtree = d3.geom.quadtree(data.nodes);
            return function(d) {
                var rb = 2*r + 3,
                    nx1 = d.x - rb,
                    nx2 = d.x + rb,
                    ny1 = d.y - rb,
                    ny2 = d.y + rb;
                quadtree.visit(function(quad, x1, y1, x2, y2) {
                if (quad.point && (quad.point !== d)) {
                    var x = d.x - quad.point.x,
                        y = d.y - quad.point.y,
                        l = Math.sqrt(x * x + y * y);
                    if (l < rb) {
                    l = (l - rb) / l * alpha;
                    d.x -= x *= l;
                    d.y -= y *= l;
                    quad.point.x += x;
                    quad.point.y += y;
                    }
                }
                return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
                });
            };
        }  
    
    })
  };
  

    //CUSTOMIZABLE METHODS
    //Change or get the width of the chart (value in pixels)
    chart.widthMethod = function(value) {
        if(!arguments.length) return this.width; // if no value is set, get the width
        width = value; // set the width
        d3.select("#network").remove();
        return chart;
    };

    //Change or get the height of the chart (value in pixels)
    chart.heightMethod = function(value) {
        if(!arguments.length) return this.height; // if no value is set, get the height
        height = value; // set the height
        d3.select("#network").remove();
        return chart;         
    };

    //Change or get the r valuee of the nodes (value in pixels)
    chart.rMethod = function(value) {
        if(!arguments.length) return this.r; // if no value is set, get the r
        r = value; // set the r
        d3.select("#network").remove();
        return chart;        
    };
    
    //Change or get whether there will be a border that keeps nodes inside (boolean value: true/false) 
    chart.borderMethod = function(value) {
        if(!arguments.length) return this.border; // if no value is set, get the border bool
        border = value; // set the border
        d3.select("#network").remove();
        return chart;        
    };
    
    //Change or get whether there will be collision detection between nodese (boolean value: true/false)
    chart.collisionDetectMethod = function(value) {
        if(!arguments.length) return this.collision; // if no value is set, get the collision bool
        collision = value; // set the collision
        d3.select("#network").remove();
        return chart;         
    };

  // Return the chart object
  return chart;
}