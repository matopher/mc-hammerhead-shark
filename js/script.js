  var xMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var xWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var xYears = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"];
  var labelsArray = [];
  var profits = [];
  var ctx = null;

  var drawThatGraph = function() {
    changeDisplay();
    profits = [];
    $(".profit").each(function() {
      profits.push(parseFloat($(this).val()));
    });
    console.log(profits);

    var data = {
      labels: labelsArray,
      datasets: [
        {
        label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: profits
        }
      ]
    };

    var option = {
      responsive: true,
    };


    var myLineChart = ctx.Line(data, option); 

  }

  $(document).ready(function() {
    var context = document.getElementById("myChart").getContext('2d');
    ctx = new Chart(context);
  });


  var changeDisplay = function() {
    document.getElementById('graphSection').style.display = 'block';
  }

  var e = document.getElementById("dropDown");

  var test = function() {
    if (e.value === 'months') labelsArray = xMonths;
    else if (e.value === 'weekdays') labelsArray = xWeekdays;
    else if (e.value === 'years') labelsArray = xYears;

    
    document.getElementById('formId').innerHTML = "";
    var html = '';
    for (var i=0; i<labelsArray.length;i++) {
      html += '<div class="form-group col-sm-4">'
      html += '<label for="textinput" style="cursor:text;">'+ labelsArray[i] + '</label>';
      html += '<input type="number" id="textinput" class="form-control profit"><br>';
      html += '</div>'
    }
    html += '<div class="col-sm-12">'
    html += '<a href="#graphSection"><button id="graphIt" type="button" class="btn btn-success btn-lg" onclick="drawThatGraph()">Graph It!</button></a>'
    html += '</div>'
    ;
    
    $("#formId").append(html);
  }
  test();

