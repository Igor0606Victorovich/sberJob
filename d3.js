
var data = [19124, 441, 197, 146, 37.1, 71.7, 18231];
		         
var width = 430 
scaleFactor = 0.02, 
barHeight = 30;
		         
var graph = d3
.select(".histogram")
.append("svg")
.attr("width", width)
.attr("height", barHeight * data.length);
		        
var bar = graph
.selectAll("g")
.data(data)
.enter()
.append("g")
.attr("transform", function(d, i) {
 return "translate(0," + i * barHeight + ")";
});

bar
.append("rect")
.attr("width", function(d) {
return d * scaleFactor;
	})
.attr("height", barHeight - 1);
		 
bar.append("text")
.attr("x", function(d) { 
return (d*scaleFactor); 
  })
.attr("y", barHeight / 2)
.attr("dy", ".35em")
.text(function(d) { return d; 
 });


// var bar1 = graph
// .select("g")	 
// .data(data)

// bar1
// .append("rect")
// .attr("width", function(d) {
//  return d * scaleFactor *10;
//  })
// .style("color", "white")