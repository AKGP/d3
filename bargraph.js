var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);
var h = 100,
    w = 100,
    padding = 2;
var dataset = [5, 10, 15, 20, 25];
svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", function(d, i) {
        return i * w / dataset.length;
    })
    .attr("y", function(d) {
        console.log("h:" + h + " d:" + d);
        return (h - d*4);

    })
    .attr("width", w / dataset.length - padding)
    .attr("height", function(d) {
        console.log(d);
        return d*4;
    })
    .style("fill","blue");