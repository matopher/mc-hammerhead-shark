  var xMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var xWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var xYears = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"];
  var labelsArray = [];
  var profits = [];
  var ctx = null;
  var myLineChart;

  var currentObj;

  var x21Days = [];
  for (var i = 1; i < 22; i++) {
    x21Days.push(i);
  }

  var drawThatGraph = function() {
    //changeDisplay();
    profits = [];
    // $(".profit").each(function() {
    //   profits.push(parseFloat($(this).val()));
    // });

    for (var i = 0; i < 21; i++) {
      profits.push(currentObj.dayData[i]);
    }
    labelsArray = x21Days;
    console.log(profits);

    var data = {
      labels: labelsArray,
      datasets: [
        {
        label: "This label does nothing",
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


    myLineChart = ctx.Line(data, option); 

  }

  $(document).ready(function() {
    var context = document.getElementById("myChart").getContext('2d');
    ctx = new Chart(context);
  });


  var changeDisplay = function() {
    document.getElementById('graphSection').style.display = 'block';
  }

  // var e = document.getElementById("dropDown");

  var test = function() {
    // if (e.value === 'months') labelsArray = xMonths;
    // else if (e.value === 'weekdays') labelsArray = xWeekdays;
    // else if (e.value === 'years') labelsArray = xYears;
    
    
    document.getElementById('formId').innerHTML = "";
    var html = '';
    // for (var i=0; i<labelsArray.length;i++) {
      html += '<div class="form-group col-lg-4">'
        html += '<label for="textinput" style="cursor:text;">'+ 'Day  <span id="currentDay"></span></label>';
        html += '<input type="tel" id="textinput" class="form-control profit" placeholder="0"><br>';
      html += '</div>';
    // }
    html += '<div class="col-centered center">'
    html += '<button id="save-button" class="btn btn-lg btn-primary">Save</button>'
    html += '</div>'

    html += '<div class="col-sm-12">';
    // html += '<a href="#graphSection"><button id="graphIt" type="button" class="btn btn-success btn-lg" onclick="drawThatGraph()">Graph It!</button></a>';
    html += '</div>';
    
    $("#formId").append(html);
  }
  test();

$(document).ready(function() { 
    var newObj = {};

    var keys = [];
    for (key in localStorage) { 
      if(key.startsWith('@')) {
        keys.push(key); 
      }     
    }

    for (var i = 0; i < keys.length; i++) {
     var getObj = JSON.parse(localStorage.getItem(keys[i]));
      $('#habit-list').append(addHabitButton(getObj.name));
    }

    

    $('#add-habit-btn').click(function(){
      var newHabit = $('#new-habit').val();
      var unit = $('#new-unit').val();
      
      newObj = {name: newHabit, unit: unit, day: 1, dayData: []};
      localStorage.setItem("@"+newHabit+"Obj", JSON.stringify(newObj));
      
      // Add Button
	    $('#habit-list').append(addHabitButton(newHabit));
    });

    var checkDay = function() {
      if(currentObj.day >= 21) {
        console.log("Came out true");
        myLineChart = null;
        drawThatGraph()
        $('#currentHabit').css("display", "block");
        $('#congrats').css('display', 'inherit');
        $('#share-buttons').css('display', 'block');
      }
      else {
        console.log("Came out false");
        $('#currentHabit').css("display", "block");
        $('#congrats').css('display', 'none');
        myLineChart = null;
      }
    };
    

    $('.habitButton').click(function() { 

      for (var i = 0; i < keys.length; i++) {
        var getObj = JSON.parse(localStorage.getItem(keys[i]));
        if(getObj.name === $(this).context.id) {
          currentObj = getObj;
          
          $('#progressBarId').css('width', String(getObj.day/21 * 100) + '%');
          $('#day').html('');
          $('#day').html(getObj.day);
          $('#currentDay').html('');
          $('#currentDay').html(getObj.day);
        }
      }

      checkDay();
    });

    $('#save-button').click(function() { 
        if ($('#textinput').val() !== '') {
          localObj = currentObj;
          checkDay();
          localObj.day++;
          localObj.dayData.push($('#textinput').val());
          localStorage.setItem("@"+localObj.name+"Obj", JSON.stringify(localObj));

          $('#progressBarId').css('width', String(localObj.day/21 * 100) + '%');
          $('#day').html('');
          $('#day').html(localObj.day);
          $('#currentDay').html('');
          $('#currentDay').html(localObj.day);
          $('#textinput').val("");
        }
    });

  });





var addHabitButton = function(habit) {
  var habitButton = "";
      habitButton += '<div class="col-sm-12">'
      habitButton += '<button id="' + habit + '" type="button" class="btn btn-primary btn-lg habit-list-item habitButton">' + habit + '</button>'
      habitButton += '</div>'
      return habitButton;
}

// .modal-backdrop classes fullscreen

$(".modal-transparent").on('show.bs.modal', function () {
  setTimeout( function() {
    $(".modal-backdrop").addClass("modal-backdrop-transparent");
  }, 0);
});
$(".modal-transparent").on('hidden.bs.modal', function () {
  $(".modal-backdrop").addClass("modal-backdrop-transparent");
});

$(".modal-fullscreen").on('show.bs.modal', function () {
  setTimeout( function() {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  }, 0);
});
$(".modal-fullscreen").on('hidden.bs.modal', function () {
  $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
});

$(document).ready(function() {
    $('#habit-list *').click(function(){
      $('#currentHabit').toggleClass('activePage');
      $('#page-one').addClass('hiddenPage');
  });
});