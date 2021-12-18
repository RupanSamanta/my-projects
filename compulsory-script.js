			var drop_list = document.querySelector(".drop-list");
			var drop_list_item = document.querySelectorAll("div.drop-list div");
			var button_div = document.querySelectorAll("div.header-button div");
			var d=0;
document.querySelector(".header-button").onclick = function()
{
			if(d%2==0)
			{												
						drop_list.style.opacity = "1";	
						drop_list.style.height = "80px";
					  for(var i = 0; i<drop_list_item.length; i++)
						{
									drop_list_item[i].style.height = "25px";
									drop_list_item[i].style.display = "block";
						}
						button_div[0].style.transform = "translateY(3px) rotateZ(47deg)";
						button_div[0].style.background = "#ff00b2";
						button_div[1].style.transform = "translateY(-4px) rotateZ(-47deg)";
					 button_div[1].style.background = "#ff00b2";	document.querySelector(".header-button").style.borderColor = "#ff00b2";
			}
			else
			{
						drop_list.style.opacity = "0";
						for(var i = 0; i<drop_list_item.length; i++)
						{
									drop_list_item[i].style.height = "0";
									drop_list_item[i].style.display = "none";
						}
						button_div[0].style.transform = "translateY(0) rotateZ(0)";
					 button_div[0].style.background = "yellow";
						button_div[1].style.transform = "translateY(0) rotateZ(0)";
						button_div[1].style.background = "yellow";	document.querySelector(".header-button").style.borderColor = "yellow";
						drop_list.style.opacity = "0";
						drop_list.style.height = "0";
			}
			drop_list.style.transitionDuration = ".3s";					
			button_div[0].style.transitionDuration = "0.4s";	
			button_div[1].style.transitionDuration = "0.4s";	
	  	document.querySelector(".header-button").style.transitionDuration = "0.23s";
			d++;
}
/*              Drop Down List            */



/*             Statistics Buttons Controls      */
var stats = document.querySelectorAll("div.table-content div");
var stats_table = document.getElementsByClassName("stats-table");

stats[0].style.background = "rgba(0,0,0,0.4)";
stats[0].style.borderTopColor = "#ff00b2";
for(var i = 0; i<stats_table.length; i++)
stats_table[i].style.display = "none";
stats_table[0].style.display = "table";

stats[0].onclick = function() 
{
			for(var i = 0; i<stats.length; i++)
			{
						if(i==0)
						{
									stats[i].style.background = "rgba(0,0,0,0.4)";
							  	stats[i].style.borderTopColor = "#ff00b2";
						}
						else
						{
									stats[i].style.background = "rgba(0,0,0,0.6)";
							  	stats[i].style.borderTopColor = "transparent";
						}
			}
			for(var i = 0; i<stats_table.length; i++)
						if(i==0)
									stats_table[i].style.display = "table";
						else
									stats_table[i].style.display = "none";
}

stats[1].onclick = function() 
{
			for(var i = 0; i<stats.length; i++)
			{
						if(i==1)
						{
									stats[i].style.background = "rgba(0,0,0,0.4)";
							  	stats[i].style.borderTopColor = "#ff00b2";
						}
						else
						{
									stats[i].style.background = "rgba(0,0,0,0.6)";
							  	stats[i].style.borderTopColor = "transparent";
						}
			}
			for(var i = 0; i<stats_table.length; i++)
						if(i==1)
									stats_table[i].style.display = "table";
						else
									stats_table[i].style.display = "none";
}

stats[2].onclick = function() 
{
			for(var i = 0; i<stats.length; i++)
			{
						if(i==2)
						{
									stats[i].style.background = "rgba(0,0,0,0.4)";
							  	stats[i].style.borderTopColor = "#ff00b2";
						}
						else
						{
									stats[i].style.background = "rgba(0,0,0,0.6)";
							  	stats[i].style.borderTopColor = "transparent";
						}
			}
			for(var i = 0; i<stats_table.length; i++)
						if(i==2)
									stats_table[i].style.display = "table";
						else
									stats_table[i].style.display = "none";
}

stats[3].onclick = function() 
{
			for(var i = 0; i<stats.length; i++)
			{
						if(i==3)
						{
									stats[i].style.background = "rgba(0,0,0,0.4)";
							  	stats[i].style.borderTopColor = "#ff00b2";
						}
						else
						{
									stats[i].style.background = "rgba(0,0,0,0.6)";
							  	stats[i].style.borderTopColor = "transparent";
						}
			}
			for(var i = 0; i<stats_table.length; i++)
						if(i==3)
							{stats_table[i].style.display = "table";
							stats_table[i].style.width = "100%";}
						else
									stats_table[i].style.display = "none";
}
			
 /*           Statistics Buttons Controls       */




 /*												 Fixtures & Results 									*/

 var match_centre = document.querySelectorAll("div.match-centre");
 for(var i = 1; i < match_centre.length; i++)
			 match_centre[i].style.display = "none";
  
 
 var i = 0; 
 var fixture = document.querySelectorAll("div.series-table div");
 fixture[0].style.background = "transparent";
 fixture[0].style.borderTopColor = "#ff00b2";
 var fixture_list = document.getElementsByClassName("fixture-container");
 while(i<6) 
 {
 			fixture_list[i].style.display = "block";
 			i++;
 }
 
 fixture[0].onclick = function() 
 {
 			for(var i = 0; i<fixture.length; i++)
 			{
 						if(i==0)
 						{
 									fixture[i].style.background = "transparent";
								 fixture[i].style.borderTopColor = "#ff00b2";
						}
						else
						{
									fixture[i].style.background = "rgba(0,0,0,.4)";
								 fixture[i].style.borderTopColor = "transparent";								 
						}
 			}
 			for(var i = 0; i<fixture_list.length; i++) 
 			{
 						if(i<=5)
 									fixture_list[i].style.display = "block";
 						else
									fixture_list[i].style.display = "none";
 			}
 }
 
 fixture[1].onclick = function() 
 {
 			for(var i = 0; i<fixture.length; i++)
 			{
 						if(i==1)
 						{
 									fixture[i].style.background = "transparent";
								 fixture[i].style.borderTopColor = "#ff00b2";
						}
						else
						{
									fixture[i].style.background = "rgba(0,0,0,.4)";
								 fixture[i].style.borderTopColor = "transparent";								 
						}
 			}
			for(var i = 0; i<fixture_list.length; i++) 
 			{
 						if(i>=6 && i<=11)
 									fixture_list[i].style.display = "block";
 						else
									fixture_list[i].style.display = "none";
 			}
 }
 
 fixture[2].onclick = function() 
 {
 			for(var i = 0; i<fixture.length; i++)
 			{
 						if(i==2)
 						{
 									fixture[i].style.background = "transparent";
								 fixture[i].style.borderTopColor = "#ff00b2";
						}
						else
						{
									fixture[i].style.background = "rgba(0,0,0,.4)";
								 fixture[i].style.borderTopColor = "transparent";								 
						}
 			}
 		for(var i = 0; i<fixture_list.length; i++) 
 			{
 						if(i>=12 && i<=17)
 									fixture_list[i].style.display = "block";
 						else
									fixture_list[i].style.display = "none";
 			}
 }
 
 /*												 Fixtures & Results 									*/ 
 /* Series in Number */
document.querySelector("#series-in-number").innerHTML = '<div class="box"><div><div class="title">SERIES IN NUMBERS</div></div><div class="container"><div class="series-stats-title"><div>Series 1</div><div>Series 2</div><div>Series 3</div></div><div class="series-stats-details"><div class="series-stats-box"><img src="https://www.pngkit.com/png/full/292-2928062_football-icon-png-white.png" alt="football"><br><li>Goals</li><li id="goal"></li></div><!-- goals --><div class="series-stats-box"><img src="https://i.imgur.com/0OdGHXd.png" alt="football"><br><li>Shots Taken</li><li id="shots-taken"></li></div><!-- shots taken --><div class="series-stats-box"><img src="https://i.imgur.com/6AirFua.png" alt=""><br><li>Average Goals</li><li id="average-goal"></li></div><!-- average goals --><div class="series-stats-box"><img src="https://i.imgur.com/4eLBh27.png" alt="watch"><br><li>Minutes Per Goal</li><li id="minutes-per-goal"></li></div><!-- minutes per goal --><div class="series-stats-box"><img src="https://i.imgur.com/E6wTRRh.png" alt="football"><br><li>Fouls</li><li id="fouls"></li></div><!-- fouls --><div class="series-stats-box"><img src="https://i.imgur.com/1mIMCnp.png" alt="football"><br><li>Yellow Cards</li><li id="yellow-card"></li></div><!-- yellow card--><div class="series-stats-box"><img src="https://i.imgur.com/RP44wPx.png" alt="football"><br><li>Red Cards</li><li id="red-card"></li></div><!-- red card --><div class="series-stats-box"><img src="https://i.imgur.com/O140xYL.png" alt="gloves"><br><li>Clean Sheets</li><li id="cleansheet"></li></div><!-- clean sheet --></div>	<!-- series-stats-details --></div><!-- container --></div>'
				
var goals = 100, match = 3;
var average_goal = (goals/match).toString();
var minutes_per_goal = ((match*90)/goals).toString();
document.querySelector("#goal").innerHTML = "N/A";// goals;
document.querySelector("#shots-taken").innerHTML = "N/A";
document.querySelector("#minutes-per-goal").innerHTML = "N/A"; //minutes_per_goal.substring(0,4);
document.querySelector("#average-goal").innerHTML = "N/A"; //average_goal.substring(0,4);
document.querySelector("#fouls").innerHTML = "N/A";
document.querySelector("#yellow-card").innerHTML = "N/A";
document.querySelector("#red-card").innerHTML = "N/A";
document.querySelector("#cleansheet").innerHTML = "N/A";

/* Series in Numbers */




var goTop = document.querySelector(".goTop");
goTop.style.display = "none";
window.onscroll = function() 
 {
  		if(document.documentElement.scrollTop > 200)
    			goTop.style.display = "block";
    else 
  				 goTop.style.display = "none";  
}
goTop.onclick = function()
{
			document.documentElement.scrollTop = 0;
}
/* got to the top of page */

/* Navigator */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
/* navigator */

/* powered by script  */

document.querySelector("footer").innerHTML = '<div class="title">GAMING PARTNER</div><div class="game"><img src="https://i.imgur.com/I6JQIoT.png" alt="dls 2022"></div><div class="title">POWERED BY</div><div class="powered-by"><div><img src="https://i.imgur.com/C5eEqi9.png" alt="lenovo"></div><!-- lenovo --><div><img src="https://i.imgur.com/u5UREyB.png" alt="airtel"></div><!-- airtel --><div><img src="https://i.imgur.com/8fkK3I5.png" alt="samsung"></div><!-- samsung --><div><img src="https://i.imgur.com/LA0VAyY.png" alt="jio"></div><!-- jio --><div><img src="https://i.imgur.com/KHUnnXD.png" alt="treb edit"></div><!-- treb edit --><div><img src="https://i.imgur.com/Jl6XlUk.png" alt="google chrome"></div><!-- google chrome --><div><img src="https://i.imgur.com/1nwBAiF.png" alt="pixel lab"></div><!-- pixel lab --><div><img src="https://i.imgur.com/FtZ8gLi.png" alt="imgur"></div><!-- imgur --><div><img src="https://i.imgur.com/s2uJSAQ.png" alt="google photos"></div><!-- google photos --><div><img src="https://i.imgur.com/mRQsB9x.png" alt="github"></div><!-- git hub --><div><img src="https://i.imgur.com/A3u6KCB.png" alt="you cut"></div><!-- you cut --><div><img src="https://i.imgur.com/UkcqT23.png" alt="x recorder"></div><!-- x recorder --></div><div class="copyright">&copy;rupan 2021</div>';
