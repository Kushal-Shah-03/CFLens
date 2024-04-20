// totals_save has the data for all the tags
var totals_save = [
    {
        title: "math",
        value: 2706,
        all: 28759
    },
    {
        title: "greedy",
        value: 2669,
        all: 28759
    },
    {
        title: "implementation",
        value: 2606,
        all: 28759
    },
    {
        title: "dp",
        value: 2000,
        all: 28759
    },
    {
        title: "constructive algorithms",
        value: 1642,
        all: 28759
    },
    {
        title: "data structures",
        value: 1632,
        all: 28759
    },
    {
        title: "brute force",
        value: 1565,
        all: 28759
    },
    {
        title: "graphs",
        value: 1024,
        all: 28759
    },
    {
        title: "sortings",
        value: 1009,
        all: 28759
    },
    {
        title: "binary search",
        value: 992,
        all: 28759
    },
    {
        title: "dfs and similar",
        value: 883,
        all: 28759
    },
    {
        title: "trees",
        value: 773,
        all: 28759
    },
    {
        title: "number theory",
        value: 695,
        all: 28759
    },
    {
        title: "strings",
        value: 691,
        all: 28759
    },
    {
        title: "combinatorics",
        value: 631,
        all: 28759
    },
    {
        title: "bitmasks",
        value: 530,
        all: 28759
    },
    {
        title: "two pointers",
        value: 507,
        all: 28759
    },
    {
        title: "*special",
        value: 426,
        all: 28759
    },
    {
        title: "geometry",
        value: 380,
        all: 28759
    },
    {
        title: "dsu",
        value: 337,
        all: 28759
    },
    {
        title: "divide and conquer",
        value: 270,
        all: 28759
    },
    {
        title: "shortest paths",
        value: 259,
        all: 28759
    },
    {
        title: "probabilities",
        value: 226,
        all: 28759
    },
    {
        title: "interactive",
        value: 212,
        all: 28759
    },
    {
        title: "games",
        value: 203,
        all: 28759
    },
    {
        title: "hashing",
        value: 194,
        all: 28759
    },
    {
        title: "flows",
        value: 139,
        all: 28759
    },
    {
        title: "matrices",
        value: 115,
        all: 28759
    },
    {
        title: "fft",
        value: 89,
        all: 28759
    },
    {
        title: "graph matchings",
        value: 88,
        all: 28759
    },
    {
        title: "string suffix structures",
        value: 87,
        all: 28759
    },
    {
        title: "ternary search",
        value: 52,
        all: 28759
    },
    {
        title: "meet-in-the-middle",
        value: 47,
        all: 28759
    },
    {
        title: "expression parsing",
        value: 35,
        all: 28759
    },
    {
        title: "2-sat",
        value: 30,
        all: 28759
    },
    {
        title: "chinese remainder theorem",
        value: 16,
        all: 28759
    },
    {
        title: "schedules",
        value: 8,
        all: 28759
    }
];
// totals has the data for the tags used for plotting pie-chart
var totals = [
    {
        title: "math",
        value: 2706,
        all: 28759
    },
    {
        title: "greedy",
        value: 2669,
        all: 28759
    },
    {
        title: "implementation",
        value: 2606,
        all: 28759
    },
    {
        title: "dp",
        value: 2000,
        all: 28759
    },
    {
        title: "constructive algorithms",
        value: 1642,
        all: 28759
    },
    {
        title: "data structures",
        value: 1632,
        all: 28759
    },
    {
        title: "brute force",
        value: 1565,
        all: 28759
    },
    {
        title: "graphs",
        value: 1024,
        all: 28759
    },
    {
        title: "sortings",
        value: 1009,
        all: 28759
    },
    {
        title: "binary search",
        value: 992,
        all: 28759
    },
    {
        title: "dfs and similar",
        value: 883,
        all: 28759
    },
    {
        title: "trees",
        value: 773,
        all: 28759
    },
    {
        title: "number theory",
        value: 695,
        all: 28759
    },
    {
        title: "strings",
        value: 691,
        all: 28759
    },
    {
        title: "combinatorics",
        value: 631,
        all: 28759
    },
    {
        title: "bitmasks",
        value: 530,
        all: 28759
    },
    {
        title: "two pointers",
        value: 507,
        all: 28759
    },
    {
        title: "*special",
        value: 426,
        all: 28759
    },
    {
        title: "geometry",
        value: 380,
        all: 28759
    },
    {
        title: "dsu",
        value: 337,
        all: 28759
    },
    {
        title: "divide and conquer",
        value: 270,
        all: 28759
    },
    {
        title: "shortest paths",
        value: 259,
        all: 28759
    },
    {
        title: "probabilities",
        value: 226,
        all: 28759
    },
    {
        title: "interactive",
        value: 212,
        all: 28759
    },
    {
        title: "games",
        value: 203,
        all: 28759
    },
    {
        title: "hashing",
        value: 194,
        all: 28759
    },
    {
        title: "flows",
        value: 139,
        all: 28759
    },
    {
        title: "matrices",
        value: 115,
        all: 28759
    },
    {
        title: "fft",
        value: 89,
        all: 28759
    },
    {
        title: "graph matchings",
        value: 88,
        all: 28759
    },
    {
        title: "string suffix structures",
        value: 87,
        all: 28759
    },
    {
        title: "ternary search",
        value: 52,
        all: 28759
    },
    {
        title: "meet-in-the-middle",
        value: 47,
        all: 28759
    },
    {
        title: "expression parsing",
        value: 35,
        all: 28759
    },
    {
        title: "2-sat",
        value: 30,
        all: 28759
    },
    {
        title: "chinese remainder theorem",
        value: 16,
        all: 28759
    },
    {
        title: "schedules",
        value: 8,
        all: 28759
    }
];
// totals_small has the data for top 10 tags by Count
var totals_small = [
    {
        title: "math",
        value: 2706,
        all: 16950
    },
    {
        title: "greedy",
        value: 2669,
        all: 16950
    },
    {
        title: "implementation",
        value: 2606,
        all: 16950
    },
    {
        title: "dp",
        value: 2000,
        all: 16950
    },
    {
        title: "constructive algorithms",
        value: 1642,
        all: 16950
    },
    {
        title: "data structures",
        value: 1632,
        all: 16950
    },
    {
        title: "brute force",
        value: 1565,
        all: 16950
    },
    {
        title: "graphs",
        value: 1024,
        all: 16950
    },
    {
        title: "sortings",
        value: 1009,
        all: 16950
    },
    {
        title: "binary search",
        value: 992,
        all: 16950
    }
];
var div1 = [
    {
        title: "math",
        value: 596,
        all: 6135
    },
    {
        title: "dp",
        value: 581,
        all: 6135
    },
    {
        title: "greedy",
        value: 523,
        all: 6135
    },
    {
        title: "data structures",
        value: 515,
        all: 6135
    },
    {
        title: "constructive algorithms",
        value: 418,
        all: 6135
    },
    {
        title: "implementation",
        value: 352,
        all: 6135
    },
    {
        title: "graphs",
        value: 308,
        all: 6135
    },
    {
        title: "brute force",
        value: 289,
        all: 6135
    },
    {
        title: "trees",
        value: 267,
        all: 6135
    },
    {
        title: "dfs and similar",
        value: 241,
        all: 6135
    },
    {
        title: "binary search",
        value: 222,
        all: 6135
    },
    {
        title: "combinatorics",
        value: 205,
        all: 6135
    },
    {
        title: "sortings",
        value: 187,
        all: 6135
    },
    {
        title: "number theory",
        value: 168,
        all: 6135
    },
    {
        title: "bitmasks",
        value: 134,
        all: 6135
    },
    {
        title: "strings",
        value: 128,
        all: 6135
    },
    {
        title: "geometry",
        value: 120,
        all: 6135
    },
    {
        title: "two pointers",
        value: 119,
        all: 6135
    },
    {
        title: "dsu",
        value: 100,
        all: 6135
    },
    {
        title: "divide and conquer",
        value: 97,
        all: 6135
    },
    {
        title: "probabilities",
        value: 90,
        all: 6135
    },
    {
        title: "shortest paths",
        value: 75,
        all: 6135
    },
    {
        title: "games",
        value: 60,
        all: 6135
    },
    {
        title: "hashing",
        value: 55,
        all: 6135
    },
    {
        title: "interactive",
        value: 53,
        all: 6135
    },
    {
        title: "matrices",
        value: 42,
        all: 6135
    },
    {
        title: "flows",
        value: 40,
        all: 6135
    },
    {
        title: "fft",
        value: 40,
        all: 6135
    },
    {
        title: "graph matchings",
        value: 30,
        all: 6135
    },
    {
        title: "string suffix structures",
        value: 28,
        all: 6135
    },
    {
        title: "ternary search",
        value: 12,
        all: 6135
    },
    {
        title: "2-sat",
        value: 11,
        all: 6135
    },
    {
        title: "meet-in-the-middle",
        value: 10,
        all: 6135
    },
    {
        title: "expression parsing",
        value: 8,
        all: 6135
    },
    {
        title: "chinese remainder theorem",
        value: 7,
        all: 6135
    },
    {
        title: "schedules",
        value: 4,
        all: 6135
    },
]
var div2 = [
    {
        title: "implementation",
        value: 1499,
        all: 12884
    },
    {
        title: "math",
        value: 1452,
        all: 12884
    },
    {
        title: "greedy",
        value: 1444,
        all: 12884
    },
    {
        title: "dp",
        value: 963,
        all: 12884
    },
    {
        title: "brute force",
        value: 908,
        all: 12884
    },
    {
        title: "constructive algorithms",
        value: 860,
        all: 12884
    },
    {
        title: "data structures",
        value: 746,
        all: 12884
    },
    {
        title: "sortings",
        value: 525,
        all: 12884
    },
    {
        title: "binary search",
        value: 493,
        all: 12884
    },
    {
        title: "graphs",
        value: 426,
        all: 12884
    },
    {
        title: "dfs and similar",
        value: 402,
        all: 12884
    },
    {
        title: "number theory",
        value: 381,
        all: 12884
    },
    {
        title: "strings",
        value: 371,
        all: 12884
    },
    {
        title: "trees",
        value: 328,
        all: 12884
    },
    {
        title: "combinatorics",
        value: 324,
        all: 12884
    },
    {
        title: "bitmasks",
        value: 305,
        all: 12884
    },
    {
        title: "two pointers",
        value: 261,
        all: 12884
    },
    {
        title: "dsu",
        value: 157,
        all: 12884
    },
    {
        title: "geometry",
        value: 157,
        all: 12884
    },
    {
        title: "divide and conquer",
        value: 119,
        all: 12884
    },
    {
        title: "shortest paths",
        value: 110,
        all: 12884
    },
    {
        title: "games",
        value: 97,
        all: 12884
    },
    {
        title: "hashing",
        value: 88,
        all: 12884
    },
    {
        title: "probabilities",
        value: 86,
        all: 12884
    },
    {
        title: "interactive",
        value: 86,
        all: 12884
    },
    {
        title: "flows",
        value: 55,
        all: 12884
    },
    {
        title: "matrices",
        value: 47,
        all: 12884
    },
    {
        title: "string suffix structures",
        value: 40,
        all: 12884
    },
    {
        title: "fft",
        value: 39,
        all: 12884
    },
    {
        title: "graph matchings",
        value: 28,
        all: 12884
    },
    {
        title: "ternary search",
        value: 25,
        all: 12884
    },
    {
        title: "meet-in-the-middle",
        value: 22,
        all: 12884
    },
    {
        title: "2-sat",
        value: 16,
        all: 12884
    },
    {
        title: "expression parsing",
        value: 13,
        all: 12884
    },
    {
        title: "chinese remainder theorem",
        value: 7,
        all: 12884
    },
    {
        title: "schedules",
        value: 4,
        all: 12884
    },
]
var div3 = [
    {
        title: "greedy",
        value: 302,
        all: 2135
    },
    {
        title: "math",
        value: 273,
        all: 2135
    },
    {
        title: "implementation",
        value: 223,
        all: 2135
    },
    {
        title: "brute force",
        value: 142,
        all: 2135
    },
    {
        title: "dp",
        value: 137,
        all: 2135
    },
    {
        title: "constructive algorithms",
        value: 128,
        all: 2135
    },
    {
        title: "sortings",
        value: 128,
        all: 2135
    },
    {
        title: "data structures",
        value: 120,
        all: 2135
    },
    {
        title: "binary search",
        value: 90,
        all: 2135
    },
    {
        title: "dfs and similar",
        value: 85,
        all: 2135
    },
    {
        title: "graphs",
        value: 75,
        all: 2135
    },
    {
        title: "strings",
        value: 74,
        all: 2135
    },
    {
        title: "two pointers",
        value: 64,
        all: 2135
    },
    {
        title: "number theory",
        value: 54,
        all: 2135
    },
    {
        title: "trees",
        value: 51,
        all: 2135
    },
    {
        title: "combinatorics",
        value: 32,
        all: 2135
    },
    {
        title: "shortest paths",
        value: 31,
        all: 2135
    },
    {
        title: "bitmasks",
        value: 27,
        all: 2135
    },
    {
        title: "dsu",
        value: 27,
        all: 2135
    },
    {
        title: "hashing",
        value: 15,
        all: 2135
    },
    {
        title: "divide and conquer",
        value: 11,
        all: 2135
    },
    {
        title: "games",
        value: 9,
        all: 2135
    },
    {
        title: "interactive",
        value: 7,
        all: 2135
    },
    {
        title: "graph matchings",
        value: 6,
        all: 2135
    },
    {
        title: "meet-in-the-middle",
        value: 6,
        all: 2135
    },
    {
        title: "flows",
        value: 4,
        all: 2135
    },
    {
        title: "probabilities",
        value: 4,
        all: 2135
    },
    {
        title: "ternary search",
        value: 3,
        all: 2135
    },
    {
        title: "geometry",
        value: 2,
        all: 2135
    },
    {
        title: "matrices",
        value: 2,
        all: 2135
    },
    {
        title: "2-sat",
        value: 2,
        all: 2135
    },
    {
        title: "schedules",
        value: 1,
        all: 2135
    },
]
var div4 = [
    {
        title: "implementation",
        value: 78,
        all: 350
    },
    {
        title: "greedy",
        value: 44,
        all: 350
    },
    {
        title: "brute force",
        value: 27,
        all: 350
    },
    {
        title: "math",
        value: 27,
        all: 350
    },
    {
        title: "sortings",
        value: 26,
        all: 350
    },
    {
        title: "data structures",
        value: 21,
        all: 350
    },
    {
        title: "dp",
        value: 18,
        all: 350
    },
    {
        title: "bitmasks",
        value: 15,
        all: 350
    },
    {
        title: "strings",
        value: 15,
        all: 350
    },
    {
        title: "binary search",
        value: 15,
        all: 350
    },
    {
        title: "dfs and similar",
        value: 14,
        all: 350
    },
    {
        title: "graphs",
        value: 9,
        all: 350
    },
    {
        title: "two pointers",
        value: 9,
        all: 350
    },
    {
        title: "constructive algorithms",
        value: 6,
        all: 350
    },
    {
        title: "number theory",
        value: 5,
        all: 350
    },
    {
        title: "trees",
        value: 4,
        all: 350
    },
    {
        title: "geometry",
        value: 4,
        all: 350
    },
    {
        title: "dsu",
        value: 3,
        all: 350
    },
    {
        title: "shortest paths",
        value: 2,
        all: 350
    },
    {
        title: "divide and conquer",
        value: 2,
        all: 350
    },
    {
        title: "combinatorics",
        value: 2,
        all: 350
    },
    {
        title: "hashing",
        value: 1,
        all: 350
    },
    {
        title: "flows",
        value: 1,
        all: 350
    },
    {
        title: "games",
        value: 1,
        all: 350
    },
    {
        title: "interactive",
        value: 1,
        all: 350
    },
]



var temp=d3.select('#donut')    // select the div element with the id 'donut'
.append('svg')  // append an svg element
.attr('class', 'pie'); // add a class to the svg element

function pie2() // function to draw the pie chart
{
    d3.select("#donut").selectAll("svg").remove(); // remove the existing svg element
    
    // Setting the dimensions of the pie chart
    var width = 360;
    var height = 360;
    var radius = Math.min(width, height) / 2;
    var donutWidth = 75;
    var color = d3.scaleOrdinal()   // setting the color scale
        .range(["#5A39AC", "#DD98D6", "#E7C820", "#08B2B2"]);
    
        // setting the svg element
    var svg = d3.select('#donut')
        .append('svg')
        .attr('class', 'pie')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', 'translate(' + (width / 2) +
            ',' + (height / 2) + ')');
    
            // setting the arc and pie
    var arc = d3.arc()
        .innerRadius(radius - donutWidth)
        .outerRadius(radius);
    
        // setting the pie
    var pie = d3.pie()
        .value(function (d) {
            return d.value;
        })
        .sort(null);
    
        // setting the legend
    var legendRectSize = 13;
    var legendSpacing = 7;
    
    // setting the tooltip
    var donutTip = d3.select("#donuttipDIV").append("div")
        .attr("class", "donut-tip")
        .style("opacity", 0)
        // add styling to add border and also text colour 
        .style("background-color", "white")
        .style("border", "1px solid black")
        .style("padding", "5px")

        .style("position", "absolute");

    // setting the path
    var path = svg.selectAll('path')
    .data(pie(totals))
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', '#5A39AC') // constant color
    .attr('stroke', '#fff') // border color
    .attr('stroke-width', 0.5) // border width

        .attr('transform', 'translate(0, 0)')
        .on('mouseover', function (event,d, i) {
            // Setting the opacity of the path and transition
            d3.select(this)
                .attr('opacity', '.85');
            donutTip
                .style("opacity", 1);
                let tagname= d.data.title;
                let num = ((d.value / d.data.all) * 100).toFixed(2) + '%';
                donutTip.html(tagname+"-"+d.value)
                .style("left", parseInt(event.pageX + 10) + "px")
                .style("top", parseInt(event.pageY - 15) + "px");
    
        })
        .on('mousemove', function (event,d, i) {
            // Setting the opacity of the path and transition
            d3.select(this)
                .attr('opacity', '.85');
            donutTip
                .style("opacity", 1);
                let tagname= d.data.title;
                let num = ((d.value / d.data.all) * 100).toFixed(2) + '%';
                donutTip.html(tagname+"-"+d.value)
                .style("left", parseInt(event.pageX + 10) + "px")
                .style("top", parseInt(event.pageY - 15) + "px");
    
        })
        .on('mouseout', function (d, i) {
            // Setting the opacity of the path and transition
            d3.select(this)
                .attr('opacity', '1');

            donutTip
                .style("opacity", 0);
        });
    
    
    // var legend = svg.selectAll('.legend')
    //     .data(color.domain())
    //     .enter()
    //     .append('g')
    //     .attr('class', 'circle-legend')
    //     .attr('transform', function (d, i) {
    //         var height = legendRectSize + legendSpacing;
    //         var offset = height * color.domain().length / 2;
    //         var horz = -2 * legendRectSize - 13;
    //         var vert = i * height - offset;
    //         return 'translate(' + horz + ',' + vert + ')';
    //     });
    
    // legend.append('circle')
    //     .style('fill', color)
    //     .style('stroke', color)
    //     .attr('cx', 0)
    //     .attr('cy', 0)
    //     .attr('r', '.5rem');
    
    // legend.append('text')
    //     .attr('x', legendRectSize + legendSpacing)
    //     .attr('y', legendRectSize - legendSpacing)
    //     .text(function (d) {
    //         return d;
    //     });
    
    // function change(data) {
    //     var pie = d3.pie()
    //         .value(function (d) {
    //             return d.value;
    //         }).sort(null)(data);
    
    //     var width = 360;
    //     var height = 360;
    //     var radius = Math.min(width, height) / 2;
    //     var donutWidth = 75;
    
    //     path = d3.select("#donut")
    //         .selectAll("path")
    //         .data(pie); // Compute the new angles
    //     var arc = d3.arc()
    //         .innerRadius(radius - donutWidth)
    //         .outerRadius(radius);
    //     path.transition().duration(500).attr("d", arc); // redrawing the path with a smooth transition
    // }
    
};
d3.select("button#everyone")
    .on("click", function () {
        console.log("hello");

        totals=totals_save;
        pie2();
    })
    d3.select("button#women")
    .on("click", function () {
        console.log("hello2 ");

        totals=totals_small;
        pie2();
    })
    d3.select("button#div1")
    .on("click", function () {
        console.log("Div1 ");
        totals=div1;
        pie2();
    })
    d3.select("button#div2")
    .on("click", function () {
        console.log("Div2 ");
        totals=div2;
        pie2();
    })
    d3.select("button#div3")
    .on("click", function () {
        console.log("Div3 ");
        totals=div3;
        pie2();
    })
    d3.select("button#div4")
    .on("click", function () {
        console.log("Div4 ");
        totals=div4;
        pie2();
    })
    
// d3.select("button#men")
//     .on("click", function () {
//         change(maleData)
//     })
pie2();


// Getting the svg element and setting the width and height
const svg = d3.select("#my_dataviz"),
  width = +svg.attr("width"),
  height = +svg.attr("height");

// Initializing Variables
document.getElementById("slider").value = "MaxRating";
var currentCountryName = null; // Variable to store the current country name
var selectedValue = "MaxRating"; // Variable to store the selected value from the dropdown

// declaring the projection
const path = d3.geoPath(); // Path generator
const projection = d3
  .geoMercator() // Mercator projection
  .translate([width / 2, height / 2]); // Center the map in the middle of the SVG element

const data = new Map(); // Map to store the data
var range = [0, 4000]; // Range of values for the color scale
if (selectedValue != "MaxRating") {
  // If the selected value is not MaxRating, change the range
  range = [0, 2000];
}

var colorScale = d3
  .scaleLinear() // Color scale

  .domain(range) // Define the range of values
  // .range(["#ddddff", "#0000ff"]);
  .range(["#e5f5e0", "#006d2c"]);

function generatePopupContent(countryName, dataType) {
  // Create a container for the popup content
  let popupContentContainer = document.createElement("div");
  popupContentContainer.classList.add("popup-content");

  // Create popup content based on the selected data type
  let popupContent = `
        <div class="popup">
          <div class="popup-header">
            <h3>${countryName}</h3>
            <button class="close-btn">&times;</button>
          </div>
          <div id="barChart"></div>
        </div>`;

  // Append popup content to the container
  popupContentContainer.innerHTML = popupContent;

  // Fetch data from CSV file and generate bar chart
  d3.csv("Data/orgStats.csv").then(function (orgData) {
    // Filter data based on the country name
    const filteredData = orgData.filter(function (d) {
      var country_name_filter = d.Country;
      // Handle country name exceptions from the CSV file
      if (country_name_filter === "United States") {
        country_name_filter = "USA";
      }
      if (country_name_filter === "United Kingdom") {
        country_name_filter = "England";
      }
      return country_name_filter === countryName;
    });

    // Sort the filtered data by organization value in descending order
    filteredData.sort(function (a, b) {
      return b.Value - a.Value;
    });

    // Get the top 10 organizations
    const topOrganizations = filteredData.slice(0, 10);
    if (topOrganizations.length == 0) {
      // If no data is available, display a message
      // popupContentContainer.innerHTML = "<h1>No Data Available</h1>";
      const barchartdiv = document.querySelector("#barChart");
      console.log(barchartdiv);
      barchartdiv.innerHTML = "<h1>No Data Available</h1>";
      return `
            <h1>No Data Available</h1>`; // Return the message if no data is available
    }
    // Plot bar chart based on the selected data type
    const margin = { top: 20, right: 20, bottom: 30, left: 40 }; // Margin for the bar chart
    const width = 400 - margin.left - margin.right; // Width of the bar chart
    const height = 300 - margin.top - margin.bottom; // Height of the bar chart
    const svg = d3
      .select("#barChart") // Select the bar chart div
      .append("svg") // Append an SVG element
      .attr("width", width + margin.left + margin.right + 500) // Set the width
      .attr("height", height + margin.top + margin.bottom + 500) // Set the height and append a group element to the SVG
      .append("g")
      .attr(
        "transform",
        "translate(" + (margin.left + 180) + "," + (margin.top + 100) + ")"
      ); // Translate the group element

    // Declaring x axis domain and range
    const x = d3
      .scaleBand()
      .domain(topOrganizations.map((d) => d.Organisation))
      .range([0, width + 200])
      .padding(0.1);

    // Declaring y axis domain and range
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(topOrganizations, (d) => +d[dataType])])
      .range([height, 0]);

    // Declaring the tooltip
    var tooltip1 = d3
      .select(".popup-container")
      .append("div")
      .attr("class", "tooltip1")
      .style("opacity", 0);
    //   .html("Bhai");

    // Getting the top margin of the svg element to adjust the popout position
    const svg2 = d3.select("#page-top");
    const svgRect = svg2.node().getBoundingClientRect();
    const top_margin = svgRect.top;
    const svg3 = d3.select("#my_dataviz");
    const svgRect2 = svg3.node().getBoundingClientRect();
    const top_margin2 = svgRect2.top;

    // Appending the bars to the svg element
    svg
      .selectAll(".bar")
      .data(topOrganizations)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.Organisation))
      .attr("width", x.bandwidth())
      .attr("y", (d) => y(+d[dataType])) // Use the selected data type here
      .attr("height", (d) => height - y(+d[dataType]))
      .on("mouseover", function (event, d) {
        // d3.select(this)
        //     .style("opacity", 1)
        //     .style("stroke", "black")
        //     .style("stroke-width", "2px");

        // var value = data.get(d.properties.name.toUpperCase()) || 0;

        // Some debugging code
        var Info = `Organisation Name:${d.Organisation}<br/>${dataType}:${d[dataType]}`;
        console.log(Info);

        // Update tooltip content and position
        tooltip1.style("opacity", 1);
        tooltip1
          .html(Info)
          .style("left", parseInt(event.pageX) - svgRect2.left + 20 + "px")
          .style(
            "top",
            parseInt(event.pageY) + top_margin - top_margin2 + "px"
          );
        // console.log("Kanda");
      })
      .on("mousemove", function (event, d) {
        // Move the tooltip with the mouse
        tooltip1
          .style("left", parseInt(event.pageX) - svgRect2.left + 20 + "px")
          .style(
            "top",
            parseInt(event.pageY) + top_margin - top_margin2 + "px"
          );
      })
      .on("mouseout", function (event, d) {
        // Change the opacity and stroke of the tooltip
        d3.select(this).style("stroke", "transparent");

        // Hide the tooltip
        tooltip1.style("opacity", 0);
      });

    // Append x axis to the svg element and rotate the text labels
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -10)
      .attr("y", 0)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .style("font-size", "18px");
    //   .style("font-wight", "bold")

    // Append y axis to the svg element
    svg
      .append("g")
      .call(d3.axisLeft(y))
      .style("font-size", "18px")
      .style("font-wight", "bold");
    //   .style("font-wight", "bold")
  });

  // Add event listener to the close button after it's appended to the DOM
  popupContentContainer
    .querySelector(".close-btn")
    .addEventListener("click", function () {
      document.body.removeChild(popupContentContainer); // Remove the popup content container
    });

  return popupContent;
}

// Function to handle click event on a country
function handleCountryClick(event, d) {
  var countryName = d.properties.name; // Get the country name
  currentCountryName = countryName;
  const popup = document.createElement("div"); // Create a popup container
  popup.classList.add("popup-container"); // Add a class to the popup container

  // Get the selected value
  var temp_value = selectedValue === "MaxRating" ? "maxRating" : "avgRating";
  const popupContent = generatePopupContent(countryName, temp_value); // Generate popup content
  popup.innerHTML = popupContent; // Append the popup content to the popup container

  // Get the position of the SVG element top and left
  const svg = d3.select("#page-top");
  const svgRect = svg.node().getBoundingClientRect();
  const top_margin = svgRect.top;
  const svg3 = d3.select("#my_dataviz");
  const svgRect2 = svg3.node().getBoundingClientRect();
  const top_margin2 = svgRect2.top;
  console.log(top_margin);
  // console.log(svgRect.left, svgRect.top, svgRect.width, svgRect.height)

  // Set the position and dimensions of the popup container
  popup.style.left = `${svgRect2.left}px`;
  popup.style.top = `${-top_margin + top_margin2}px`;
  popup.style.width = `${svgRect2.width}px`;
  popup.style.height = `${svgRect2.height}px`;

  document.body.appendChild(popup); // Append the popup container to the body

  // Add event listener to the close button
  const closeBtn = popup.querySelector(".close-btn");
  closeBtn.addEventListener("click", function () {
    document.body.removeChild(popup); // Remove the popup container
    make_graph(selectedValue, null); // Redraw the map and bar chart
    currentCountryName = null; // Reset the current country name
  });
}

// Function to draw the map
function make_graph(dataType, countryName) {
  // Load the data from the CSV file and the GeoJSON file
  Promise.all([
    d3.json("https://enjalot.github.io/wwsd/data/world/world-110m.geojson"),
    d3.csv("Data/countryStats.csv", function (d) {
      data.set(d.Country, +parseFloat(d[dataType])); // Use the selected data type here
    }),
  ]).then(function (loadData) {
    // Get the GeoJSON data
    let topo = loadData[0];
    console.log("hello", topo);
    let maxExportValue = d3.max(Array.from(data.values()));

    // Create the tooltip
    var tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

    svg.selectAll("path").remove(); // Remove existing paths before redrawing

    svg
      .selectAll("path") // Draw the map
      .data(topo.features)
      .enter()
      .append("path")
      .attr("d", d3.geoPath().projection(projection))
      .attr("fill", function (d) {
        let str = d.properties.name.toUpperCase();
        d.total = data.get(str) || 0;
        return colorScale(d.total);
      })
      .style("stroke", "transparent")
      .attr("class", function (d) {
        return "Country";
      })
      .style("opacity", 0.8)
      .on("click", function (event, d) {
        // Add click event listener to the country
        handleCountryClick(event, d);
      })
      .on("mouseover", function (event, d) {
        // Add mouseover event listener to the country
        d3.select(this) // Change the opacity and stroke of the country
          .style("opacity", 1)
          .style("stroke", "black")
          .style("stroke-width", "2px");

        // Get the value of the selected country
        var value = data.get(d.properties.name.toUpperCase()) || 0;
        var countryInfo = `Country: ${
          d.properties.name
        }<br/>${selectedValue}: ${value.toFixed(2)}`;

        // Update tooltip content and position
        tooltip.transition().duration(200).style("opacity", 1);
        tooltip
          .html(countryInfo)
          .style("left", parseInt(event.pageX) + 20 + "px")
          .style("top", parseInt(event.pageY) + 20 + "px");
      })
      .on("mousemove", function (event, d) {
        // Add mousemove event listener to the country
        tooltip // Move the tooltip with the mouse
          .style("left", 20 + parseInt(event.pageX) + "px")
          .style("top", 20 + parseInt(event.pageY) + "px");
      })
      .on("mouseout", function (event, d) {
        // Add mouseout event listener to the country
        d3.select(this) // Change the opacity and stroke of the country
          .style("opacity", 0.8)
          .style("stroke", "transparent");

        // Hide the tooltip
        tooltip.transition().duration(500).style("opacity", 0);
      });
      make_legend(selectedValue);   
    // If a country is selected, redraw its bar chart
    if (countryName) {
      removePopup();
      // var dataType = selectedValue === "MaxRating" ? "maxRating" : "avgRating"; // Determine the dataType based on selectedValue
      // generatePopupContent(countryName, dataType); // Pass dataType to generatePopupContent
      const popup = document.createElement("div"); // Create a popup container
      popup.classList.add("popup-container"); // Add a class to the popup container

      // Get the selected value
      var temp_value =
        selectedValue === "MaxRating" ? "maxRating" : "avgRating";
      const popupContent = generatePopupContent(currentCountryName, temp_value); // Generate popup content
      popup.innerHTML = popupContent; // Append the popup content to the popup container

      // Get the position of the SVG element top and left
      const svg = d3.select("#page-top");
      const svgRect = svg.node().getBoundingClientRect();
      const top_margin = svgRect.top;
      const svg3 = d3.select("#my_dataviz");
      const svgRect2 = svg3.node().getBoundingClientRect();
      const top_margin2 = svgRect2.top;
      console.log(top_margin);
      // console.log(svgRect.left, svgRect.top, svgRect.width, svgRect.height)

      // Set the position and dimensions of the popup container
      popup.style.left = `${svgRect2.left}px`;
      popup.style.top = `${-top_margin + top_margin2}px`;
      popup.style.width = `${svgRect2.width}px`;
      popup.style.height = `${svgRect2.height}px`;

      document.body.appendChild(popup); // Append the popup container to the body

      // Add event listener to the close button
      const closeBtn = popup.querySelector(".close-btn");
      closeBtn.addEventListener("click", function () {
        document.body.removeChild(popup); // Remove the popup container
        make_graph(selectedValue, null); // Redraw the map and bar chart
        currentCountryName = null; // Reset the current country name
      });
    }
  });
}

// Add event listener to the dropdown
document.getElementById("slider").addEventListener("change", function () {
  // Get the selected value
  selectedValue = this.value;
  console.log("seect",selectedValue);
  // range = [0, 4000]; // Range of values for the color scale
  if (selectedValue == "MaxRating") {
    // If the selected value is not MaxRating, change the range
    range = [0, 4000];
  }
  else
  {
    range= [0,2600];
  }
  colorScale = d3
  .scaleLinear() // Color scale

  .domain(range) // Define the range of values
  // .range(["#ddddff", "#0000ff"]);
  .range(["#e5f5e0", "#006d2c"]);
  // Remove the existing popup if it exists
  removePopup();
  // Redraw the map and bar chart with the updated data based on the selected value
  make_graph(selectedValue, currentCountryName);
  make_legend(selectedValue);
  // Some debugging code
  //   if (currentCountryName != null) {
  //       // var temp3_value = selectedValue === "MaxRating" ? "maxRating" : "avgRating";
  //       removePopup();
  //       console.log("Bhai");
  //       // generatePopupContent(temp3_value, currentCountryName);
  //       const popup = document.createElement("div");
  //       popup.classList.add("popup-container");

  //       var temp_value = selectedValue === "MaxRating" ? "maxRating" : "avgRating";
  //       const popupContent = generatePopupContent(currentCountryName, temp_value);
  //       popup.innerHTML = popupContent;

  //       const svg = d3.select("#my_dataviz");
  //       const svgRect = svg.node().getBoundingClientRect();

  //       popup.style.left = `${svgRect.left}px`;
  //     //   popup.style.top = `${svgRect.top}px`;
  //       popup.style.width = `${svgRect.width}px`;
  //       popup.style.height = `${svgRect.height}px`;

  //       document.body.appendChild(popup);

  //       const closeBtn = popup.querySelector(".close-btn");
  //       closeBtn.addEventListener("click", function() {
  //           document.body.removeChild(popup);
  //           make_graph(selectedValue, null);
  //           currentCountryName=null;
  //       });
  //   }
});

// Function to remove the popup
function removePopup() {
  const existingPopup = document.querySelector(".popup-container"); // Get the existing popup container
  if (existingPopup) {
    document.body.removeChild(existingPopup); // Remove the popup container
  }
}

// Draw the map and bar chart with the initial data
make_graph(selectedValue, null);

function make_legend(type){
    d3.select(".legend").selectAll("*").remove();
  
    var legendWidth = 400;
  var legendHeight = 20;
  var legendMargin = { top: 10, right: 20, bottom: 10, left: 20 };
  
  // Append legend SVG to the container
  var legendSvg = d3.select(".legend")
    .append("svg")
    .attr("class", "legend")
    .attr("width", legendWidth + legendMargin.left + legendMargin.right)
    .attr("height", legendHeight + legendMargin.top + legendMargin.bottom+30)
    .append("g")
    .attr("transform", "translate(" + legendMargin.left + "," + legendMargin.top + ")")
    .style("font-size", "12px")
    .style("font-weight", "bold");
  
  // Create color gradient for legend
  var defs = legendSvg.append("defs");
  var linearGradient = defs.append("linearGradient")
    .attr("id", "legendGradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "0%");
  
  linearGradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#e5f5e0");
  
  linearGradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#006d2c");
  
  // Create legend rectangle
  legendSvg.append("rect")
    .attr("width", legendWidth)
    .attr("height", legendHeight)
    .style("fill", "url(#legendGradient)");
  
  // Add legend scale
  range=[0,0]
  if(type=="MaxRating"){
    range=[0,4000]
  }else{
    range=[0,2600]
  }
  
  var legendScale = d3.scaleLinear()
    .domain(range) // Adjust domain based on your color scale range
    .range([0, legendWidth]);
  
  var legendAxis = d3.axisBottom(legendScale)
    .tickSize(5)
    .ticks(5);
  
  legendSvg.append("g")
    .attr("class", "legendAxis")
    .attr("transform", "translate(0," + legendHeight + ")")
    .call(legendAxis);
  }
  