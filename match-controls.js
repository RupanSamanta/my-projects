var buttons = document.querySelectorAll("div.match-section div");
var lineup = document.querySelector(".match-section-lineup");

						
buttons[1].style.background = "rgba(0,0,0,0.3)";
buttons[1].style.borderColor = "#ff00d2";
buttons[1].style.borderBottomColor = "transparent";
lineup.style.display = "none";
document.querySelector(".number").style.color = "transparent";
buttons[0].onclick = function()
{
			lineup.style.display = "block";
		document.querySelector(".match-section-stats").style.display = "none";
			buttons[0].style.background = "rgba(0,0,0,0.3)";
			buttons[0].style.borderColor = "#ff00d2";
			buttons[0].style.borderBottomColor = "transparent";
			buttons[1].style.background = "rgba(0,0,0,0.5)";
			buttons[1].style.borderColor = "transparent";
			document.querySelector(".lineup-field").style.display = "flex";
			
			var i = 0, num = document.querySelectorAll("div.number");
						while(i<num.length) 
					 {
									num[i].style.opacity = 0;
									num[i].style.color = "rgba(220,220,220,0)";
									i++;
						}	
	
	
			var w = setTimeout(function()
		 {
						document.querySelector(".lineup-field").style.height = "620px";
						document.querySelector(".lineup-field").style.opacity = 1;
			},1000);
		var x = 	setTimeout(function() 
			{
						var i = 0, num = document.querySelectorAll("div.number");
						while(i<num.length) 
					 {
									num[i].style.opacity = 1;
									num[i].style.color = "rgb(220,220,220)";
									i++;
						}	
			},2000);
}
buttons[1].onclick = function()
{
			lineup.style.display = "none";
			document.querySelector(".match-section-stats").style.display = "block";
			buttons[1].style.background = "rgba(0,0,0,0.3)";
			buttons[1].style.borderColor = "#ff00d2";
			buttons[1].style.borderBottomColor = "transparent";			
			buttons[0].style.background = "rgba(0,0,0,0.5)";
			buttons[0].style.borderColor = "transparent";
			document.querySelector(".lineup-field").style.display = "none";
			document.querySelector(".lineup-field").style.opacity = 0;
			document.querySelector(".lineup-field").style.height = 0;
			
}
