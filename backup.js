<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <link rel="stylesheet" type="text/css" href="Aibnb_style.css">
   <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
   <title> Aibnb Graphs </title>
</head>

<body>
    <h2> Scatter Plot Revies vs Price </h2>
    <div  id="scatterPlot"><!-- Plotly chart will be drawn inside this DIV --></div>
    <h2> Chart Bar Price vs Time </h2>
    <div id="ChartBar"><!-- Plotly chart will be drawn inside this DIV --></div>
    <h2> Chart Bar Accommodates vs Time </h2>
    <div id="ChartBar2"><!-- Plotly chart will be drawn inside this DIV --></div>
    <h2> Pie Chart Room Types </h2>
    <div id="Piechart"><!-- Plotly chart will be drawn inside this DIV --></div>
</body>

<script
    type = "text/javascript" src="Airbnb_plugin.js"> // kopplling till js filen 
</script>

<!-- En spridningsplott som visar pris på x-axeln och antal recensioner på y-axeln.-->
<script>
    var prices = []; // en lista skapas 
    for (i=0; i < airbnbData.length; i++) {
    prices.push (airbnbData[i].price)
};

    var reviews = [];
    for (i=0; i < airbnbData.length; i++) {
    reviews.push (airbnbData[i].reviews)
};  

    var priceRev = {
    x: prices,
    y: reviews,
    mode: 'markers',
    type: 'scatter'};

    var data = [priceRev];

Plotly.newPlot('scatterPlot', data);
</script>

<!-- Ett histogram som visar spridningen på hyrespriserna -->

<script>

    var rentPrices = []; // en lista skapas 
    for (i=0; i < airbnbData.length; i++) {
    rentPrices.push (airbnbData[i].price)
    };

    var rentDate = []; 
    for (i=0; i < airbnbData.length; i++) {
    rentDate.push (airbnbData[i].last_modified)
    };

    var rentP = [
  {
    x: rentDate,
    y: rentPrices,
    type: 'bar'
  }
];

var data2 = rentP

Plotly.newPlot('ChartBar', data2);

</script>

<!--Ett histogram som visar spridningen på antalet gäster (accomodates) -->

<script>
var guests = []; // en lista skapas 
for (i=0; i < airbnbData.length; i++) {
guests.push (airbnbData[i].accommodates)
};

var accommodatesDate = []; 
for (i=0; i < airbnbData.length; i++) {
accommodatesDate.push (airbnbData[i].last_modified)
};

var guestsDate = [
{
x: accommodatesDate,
y: guests,
type: 'bar'
}
];

var data3 = guestsDate

Plotly.newPlot('ChartBar2', data3);

</script>

<!-- Ett pie chart som visar andel procent av varje typ 
av rum ”room_type” har av det totala antalen objekt. -->

<script>

var accommodation = []; 
for (i=0; i < airbnbData.length; i++) {
accommodation.push (airbnbData[i].accommodates)
};  

var rooms = []; // en lista skapas 
for (i=0; i < airbnbData.length; i++) {
rooms.push (airbnbData[i].room_type)
};

var cake = [{
  values:accommodation,
  labels:rooms,
  type: 'pie'
}];

var layout = {
  height: 400,
  width: 500
};

Plotly.newPlot('Piechart', cake, layout);

</script>

</html>