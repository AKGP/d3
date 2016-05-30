var h = 500,
    w = 400,
    ds;
var buildLine = function() {
    var lineFun = d3.svg.line()
        .x(function(d) {
            return (d.date - 20161011) * 15;
        })
        .y(function(d) {
            return (h - d.sales)
        })
        .interpolate("linear");

    var svg = d3.select("body").append("svg").attr({
        width: w,
        height: h
    });
    var viz = svg.append("path")
        .attr({
            d: lineFun(ds),
            "stroke": "purple",
            "strokeWidth": 2,
            "fill": "none"
        });
};

var showTotal = function() {
    var total = 0;
    for (var i = 0; i < ds.length; i++) {
        total += Number(ds[i].sales);
    }
    var Avg = total/ds.length;
    console.log("total is : " + total);
    var t = d3.select('body').append("table");
    var tr = t.selectAll("tr").data([1]).enter().append("tr").append("td").text("Sales Total :" + total);
};

d3.json("data.json", function(err, data) {
    if (err) {
        console.log(err);
    } else {
        ds = data;
        console.log(ds);
        console.log("ds: " + JSON.stringify(ds));
    }
    buildLine();
    showTotal();

});