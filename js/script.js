
$(function () {

		function saveData() {
			//var test = jquery("#textinput").value;
			alert(test);
		}

		var data = {
	    	labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			datasets: [
	       		//  {
		        //     label: "My First dataset",
		        //     fillColor: "rgba(220,220,220,0.2)",
		        //     strokeColor: "rgba(220,220,220,1)",
		        //     pointColor: "rgba(220,220,220,1)",
		        //     pointStrokeColor: "#fff",
		        //     pointHighlightFill: "#fff",
		        //     pointHighlightStroke: "rgba(220,220,220,1)",
		        //     data: [65, 59, 80, 81, 56, 55, 40, 56, 43, 23, 54, 53]
	        	// },
	        	{
					label: "My Second dataset",
	            	fillColor: "rgba(151,187,205,0.2)",
	            	strokeColor: "rgba(151,187,205,1)",
	            	pointColor: "rgba(151,187,205,1)",
	            	pointStrokeColor: "#fff",
	            	pointHighlightFill: "#fff",
	            	pointHighlightStroke: "rgba(151,187,205,1)",
	            	data: [28, 48, 40, 19, 86, 27, 1000 ,65, 32, 86, 23, 85]
	        	}
	        ]
	    };
	   
    var option = {
    responsive: true,
    };

    // Get the context of the canvas element we want to select
    var ctx = document.getElementById("myChart").getContext('2d');
    var myLineChart = new Chart(ctx).Line(data, option); //'Line' defines type of the chart.
});