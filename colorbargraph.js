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
    .attr({
        x: function(d, i) {
            return i * w / dataset.length;
        },
        y: function(d) {
            console.log("h:" + h + " d:" + d);
            return (h - d * 4);
        },
        width: w / dataset.length - padding,
        height: function(d) {
            console.log(d);
            return d * 4;
        },
        fill: function(d) {
            return "rgb(" + (d * 10) + "," + (d * 5) + "," + (d * 20) + ")";
        }
    });