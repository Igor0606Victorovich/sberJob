
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
.attr("width", function(d, i) {
	if (i === 0) {
		return d * scaleFactor;
	} else if (i === data.length - 1) {
		return d * scaleFactor - 100;
	} else {
		return d * scaleFactor * 10;
	}

	})
.attr("height", barHeight - 1)
.attr("fill", function(d, i) {
	if (i === 0) {
		return "white";
	} else if (i === data.length - 1) {
		return "#20B2AA";
	} else {
		return "#32CD32"
	}
});
		 
bar.append("text")

.attr("x", function(d, i) { 
	if (i === 0){
return (d*scaleFactor * 0.5);
} else if (i === data.length - 1) {
return (d*scaleFactor * 0.5);
} else return (d*scaleFactor * 12);
  })

.attr("y", barHeight / 2)
.attr("dy", ".35em")

.attr("fill", function(d, i){
	return i === 0 ? "black" : "white";
})
.attr("text-anchor", function(d, i) {
	if (i === 0) {
		return "middle";
	} else if (i === data.length - 1) {
		return "middle";
	} else {
		return "right"
	}
})
.text(function(d) { return d; 
 });

