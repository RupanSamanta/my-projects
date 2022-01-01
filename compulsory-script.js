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
						drop_list.style.borderTop = "solid 1px yellow";
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
						drop_list.style.borderTop = "none";
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
stats[0].style.borderColor = "#ff00b2";
stats[0].style.borderBottomColor = "transparent";
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
							  	stats[i].style.borderColor = "#ff00b2";
							  	stats[i].style.borderBottomColor = "transparent";
						}
						else
						{
									stats[i].style.background = "rgba(0,0,0,0.6)";
							  	stats[i].style.borderColor = "transparent";
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
							  	stats[i].style.borderColor = "#ff00b2";
							  	stats[i].style.borderBottomColor = "transparent";
						}
						else
						{
									stats[i].style.background = "rgba(0,0,0,0.6)";
							  	stats[i].style.borderColor = "transparent";
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
							  	stats[i].style.borderColor = "#ff00b2";
							  	stats[i].style.borderBottomColor = "transparent";
						}
						else
						{
									stats[i].style.background = "rgba(0,0,0,0.6)";
							  	stats[i].style.borderColor = "transparent";
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
							  	stats[i].style.borderColor = "#ff00b2";
							  	stats[i].style.borderBottomColor = "transparent";
						}
						else
						{
									stats[i].style.background = "rgba(0,0,0,0.6)";
							  	stats[i].style.borderColor = "transparent";
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

	var match_date = document.querySelectorAll("div.match-date");
	var match_dates = ['Thurday, 23rd December, 2021'];
	for(var i = 0; i<6; i++)
	{match_date[i].innerHTML = match_dates[0]};
 var match_centre_box = document.querySelectorAll("div.match-centre-box");
 
 var match_link = ['https://rupansamanta.github.io/www.dls2022friendlyseries.com/series%201%20match%201.html', 'https://rupansamanta.github.io/www.dls2022friendlyseries.com/series%201%20match%202.html', 'https://rupansamanta.github.io/www.dls2022friendlyseries.com/series%201%20match%203.html', 'https://rupansamanta.github.io/www.dls2022friendlyseries.com/series%201%20match%204.html', 'https://rupansamanta.github.io/www.dls2022friendlyseries.com/series%201%20match%205.html', 'https://rupansamanta.github.io/www.dls2022friendlyseries.com/series%201%20match%206.html'];
 
 var span = document.querySelectorAll("span");
 for(var i = 0; i < span.length; i++)
	{							
				span[i].innerHTML = "VS";
	}
	for(var i = 0; i<match_link.length; i++)
	{
				match_centre_box[i].innerHTML = '<a href="'+match_link[i]+'"><div class="match-centre">Match Centre</div></a>';
				span[i].innerHTML = "FT";
				match_centre_box[i].style.color = "rgb(240,240,240)";
	}
 var fixture_home_team_score = document.getElementsByClassName("home-team-score"), fixture_away_team_score = document.getElementsByClassName("away-team-score");

 var result_home_team_score = [0,3,0,0,2,'(1)1',0,1,1,3,2,3];
 var result_away_team_score = [1,2,1,2,1,'1(0)',1,2,2,0,1,1];
 
 for(var i = 0; i<result_home_team_score.length; i++)
 {
			 fixture_home_team_score[i].innerHTML = result_home_team_score[i];
			 fixture_away_team_score[i].innerHTML = result_away_team_score[i];
			 	fixture_home_team_score[i].style.fontSize = "18px";
			 	fixture_away_team_score[i].style.fontSize = "18px";
		}
 
 
 var i = 0; 
 var fixture = document.querySelectorAll("div.series-table div");
 fixture[0].style.background = "transparent";
 fixture[0].style.borderColor = "#ff00b2";
 fixture[0].style.borderBottomColor = "transparent";
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
								 fixture[i].style.borderColor = "#ff00b2";
								 fixture[i].style.borderBottomColor  = "transparent";
						}
						else
						{
									fixture[i].style.background = "rgba(0,0,0,.4)";
								 fixture[i].style.borderColor = "transparent";								 
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
								 fixture[i].style.borderColor = "#ff00b2";
								 fixture[i].style.borderBottomColor = "transparent";
						}
						else
						{
									fixture[i].style.background = "rgba(0,0,0,.4)";
								 fixture[i].style.borderColor = "transparent";								 
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
								 fixture[i].style.borderColor = "#ff00b2";
								 fixture[i].style.borderBottomColor = "transparent";
						}
						else
						{
									fixture[i].style.background = "rgba(0,0,0,.4)";
								 fixture[i].style.borderColor = "transparent";								 
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


/* 						head to head 						*/
var rfc_pos = [54,53,49,68,60,55,53,51,56,64,46,56];
var amb_pos = [46,47,51,32,40,45,47,49,44,36,54,44];
var rfc_pass = [85,81,80,92,87,87,78,91,82,87,78,77];
var amb_pass = [69,76,64,72,72,66,72,77,71,65,74,71];
var rfc_pos_avg = 0, rfc_pass_avg = 0, amb_pos_avg = 0, amb_pass_avg = 0;
for(var i = 0; i<rfc_pos.length; i++)
{
			rfc_pos_avg+= rfc_pos[i];
			rfc_pass_avg+= rfc_pass[i];
			amb_pos_avg+= amb_pos[i];
			amb_pass_avg+= amb_pass[i];
}
rfc_pos_avg = ((rfc_pos_avg/rfc_pos.length).toString()).substring(0,2)+'%';
rfc_pass_avg = ((rfc_pass_avg/rfc_pass.length).toString()).substring(0,2)+'%';
amb_pos_avg = ((amb_pos_avg/amb_pos.length).toString()).substring(0,2)+'%';
amb_pass_avg = ((amb_pass_avg/amb_pass.length).toString()).substring(0,2)+'%';

document.querySelector(".details-container").innerHTML = '<div class="details"><div>Played 12</div></div>\
<div class="details"><div>6</div><div>Won</div><div>6</div></div>\
<div class="details"><div>6</div><div>Lost</div><div>6</div></div>\
<div class="details"><div>'+rfc_pos_avg+'</div><div>Average Possession</div><div>'+amb_pos_avg+'</div></div>\
<div class="details"><div>76</div><div>Total Shots</div><div>44</div></div>\
<div class="details"><div>18</div><div>Goal Scored</div><div>14</div></div>\
<div class="details"><div>14</div><div>Goal Conceded</div><div>18</div></div>\
<div class="details"><div>3</div><div>Cleansheet</div><div>2</div></div>\
<div class="details"><div>'+rfc_pass_avg+'</div><div>Pass Completion</div><div>'+amb_pass_avg+'</div></div>\
<div class="details"><div>12</div><div>Fouls</div><div>9</div></div>\
<div class="details"><div>Recent Result 3 - 1</div></div>';
/* 						head to head						 */


 /* Series in Number */
document.querySelector("#series-in-number").innerHTML = '<div class="box"><div><div class="title">SEASON IN NUMBERS</div></div><div class="container"><div class="series-stats-details"><div class="series-stats-box"><img src="https://www.pngkit.com/png/full/292-2928062_football-icon-png-white.png" alt="football"><br><li>Goals</li><li id="goal"></li></div><!-- goals --><div class="series-stats-box"><img src="https://i.imgur.com/0OdGHXd.png" alt="football"><br><li>Shots Taken</li><li id="shots-taken"></li></div><!-- shots taken --><div class="series-stats-box"><img src="https://i.imgur.com/6AirFua.png" alt=""><br><li>Average Goals</li><li id="average-goal"></li></div><!-- average goals --><div class="series-stats-box"><img src="https://i.imgur.com/4eLBh27.png" alt="watch"><br><li>Minutes Per Goal</li><li id="minutes-per-goal"></li></div><!-- minutes per goal --><div class="series-stats-box"><img src="https://i.imgur.com/E6wTRRh.png" alt="football"><br><li>Fouls</li><li id="fouls"></li></div><!-- fouls --><div class="series-stats-box"><img src="https://i.imgur.com/1mIMCnp.png" alt="football"><br><li>Yellow Cards</li><li id="yellow-card"></li></div><!-- yellow card--><div class="series-stats-box"><img src="https://i.imgur.com/RP44wPx.png" alt="football"><br><li>Red Cards</li><li id="red-card"></li></div><!-- red card --><div class="series-stats-box"><img src="https://i.imgur.com/O140xYL.png" alt="gloves"><br><li>Clean Sheets</li><li id="cleansheet"></li></div><!-- clean sheet --></div>	<!-- series-stats-details --></div><!-- container --></div>'
				
var goals = 32, match = 12;
var average_goal = (goals/match).toString();
var minutes_per_goal = ((match*90)/goals).toString();
document.querySelector("#goal").innerHTML = goals;
document.querySelector("#shots-taken").innerHTML = 120;
document.querySelector("#minutes-per-goal").innerHTML = minutes_per_goal.substring(0,5);
document.querySelector("#average-goal").innerHTML = average_goal.substring(0,4);
document.querySelector("#fouls").innerHTML = 21;
document.querySelector("#yellow-card").innerHTML = 5;
document.querySelector("#red-card").innerHTML = 1;
document.querySelector("#cleansheet").innerHTML = 5;

/* Series in Numbers */


/* 						Statistics									 */

var stats_table = document.getElementsByClassName("stats-table");
var goals = stats_table[0], assists = stats_table[1], yellow_card = stats_table[2], red_card = stats_table[3];
var rfc_logo = '<img src="https://i.imgur.com/yy4m7p5.png" alt="rfc">', amb_logo = '<img src="https://www.indiansuperleague.com/static-resources/images/clubs/small/reverse/1874.png" alt="atkmb">';

goals.innerHTML = '<tr><td>Pos.</td><td>Team</td><td>Player</td><td>Goals</td></tr>\
<tr><td>1</td><td>'+rfc_logo+'</td><td>Lionel Messi</td><td>7</td></tr>\
<tr><td>2</td><td>'+amb_logo+'</td><td>Cristiano Ronaldo</td><td>5</td></tr>\
<tr><td>2</td><td>'+rfc_logo+'</td><td>Cristiano Ronaldo</td><td>5</td></tr>\
<tr><td>3</td><td>'+rfc_logo+'</td><td>Neymar Jr.</td><td>3</td></tr>\
<tr><td>4</td><td>'+rfc_logo+'</td><td>Antoine Griezman</td><td>2</td></tr>\
<tr><td>4</td><td>'+amb_logo+'</td><td>Lionel Messi</td><td>2</td></tr>\
<tr><td>4</td><td>'+amb_logo+'</td><td>Neymar Jr.</td><td>2</td></tr>\
<tr><td>5</td><td>'+amb_logo+'</td><td>Kylian Mbappé</td><td>1</td></tr>\
<tr><td>5</td><td>'+rfc_logo+'</td><td>Kylian Mbappé</td><td>1</td></tr>\
<tr><td>5</td><td>'+amb_logo+'</td><td>Paul Pogba</td><td>1</td></tr>\
<tr><td>5</td><td>'+amb_logo+'</td><td>Erling Haaland</td><td>1</td></tr>\
<tr><td>5</td><td>'+amb_logo+'</td><td>Mahammad Salah</td><td>1</td></tr>';

assists.innerHTML = '<tr><td>Pos.</td><td>Team</td><td>Player</td><td>Assists</td></tr>\
<tr><td>1</td><td>'+rfc_logo+'</td><td>Cristiano Ronaldo</td><td>6</td></tr>\
<tr><td>2</td><td>'+rfc_logo+'</td><td>Lionel Messi</td><td>4</td></tr>\
<tr><td>3</td><td>'+amb_logo+'</td><td>Lionel Messi</td><td>3</td></tr>\
<tr><td>4</td><td>'+rfc_logo+'</td><td>Neymar Jr.</td><td>2</td></tr>\
<tr><td>4</td><td>'+amb_logo+'</td><td>Kylian Mbappé</td><td>2</td></tr>\
<tr><td>4</td><td>'+amb_logo+'</td><td>Neymar Jr.</td><td>2</td></tr>\
<tr><td>5</td><td>'+rfc_logo+'</td><td>Kylian Mbappé</td><td>1</td></tr>\
<tr><td>5</td><td>'+amb_logo+'</td><td>Paul Pogba</td><td>1</td></tr>\
<tr><td>5</td><td>'+rfc_logo+'</td><td>Antoine Griezman</td><td>1</td></tr>';

yellow_card.innerHTML = '<tr><td>Pos.</td><td>Team</td><td>Player</td><td>Yellow Card</td></tr>\
<tr><td>1</td><td>'+rfc_logo+'</td><td>Joáo Cancelo</td><td>1</td></tr>\
<tr><td>1</td><td>'+amb_logo+'</td><td>Kalidou Koulibaly</td><td>1</td></tr>\
<tr><td>1</td><td>'+amb_logo+'</td><td>Lionel Messi</td><td>1</td></tr>\
<tr><td>1</td><td>'+rfc_logo+'</td><td>Antoine Griezman</td><td>1</td></tr>\
<tr><td>1</td><td>'+rfc_logo+'</td><td>Jordi Alba</td><td>1</td></tr>';

red_card.innerHTML = '<tr><td>Pos.</td><td>Team</td><td>Player</td><td>Red Card</td></tr>\
<tr><td>1</td><td>'+rfc_logo+'</td><td>Aymeric Laporte</td><td>1</td></tr>\												<tr><td>0</td><td>N/A</td><td>N/A</td><td>0</td></tr>';



/* 						Statistics									 */

var music = document.querySelector(".music");
var ms = 0;
var play_music = new Audio('https://ia601506.us.archive.org/2/items/fifa-tots-music/FIFA%20TOTS%20MUSIC.mp3');
music.onclick = function()
{		
			if(ms%2==0)
			{
						music.style.textDecoration = "none";
						play_music.play();
			}		
			else
			{
						music.style.textDecoration = "line-through";
						play_music.pause();
			}
			ms++;
}/*Play music*/
music.addEventListener('ended', function()
{
    this.currentTime = 0;
    this.play();
},false);

var goTop = document.querySelector(".goTop");
goTop.innerHTML = '&#8896;';
goTop.style.display = "none";
window.onscroll = function() 
 {
 	 		if(document.documentElement.scrollTop >= 200)
   				goTop.style.display = "block";			
    else
  				 goTop.style.display = "none";
 }
goTop.onclick = function()
{
			document.documentElement.scrollTop = 0;
}
/* got to the top of page & music */


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

document.querySelector("footer").innerHTML = '<div class="title">GAMING PARTNER</div><div class="game"><img src="https://i.imgur.com/I6JQIoT.png" alt="dls 2022"></div><div class="title" style="background:black">POWERED BY</div><div class="powered-by"><div><img src="https://i.imgur.com/C5eEqi9.png" alt="lenovo"></div><!-- lenovo --><div><img src="https://i.imgur.com/u5UREyB.png" alt="airtel"></div><!-- airtel --><div><img src="https://i.imgur.com/8fkK3I5.png" alt="samsung"></div><!-- samsung --><div><img src="https://i.imgur.com/LA0VAyY.png" alt="jio"></div><!-- jio --><div><img src="https://i.imgur.com/KHUnnXD.png" alt="treb edit"></div><!-- treb edit --><div><img src="https://i.imgur.com/Jl6XlUk.png" alt="google chrome"></div><!-- google chrome --><div><img src="https://i.imgur.com/1nwBAiF.png" alt="pixel lab"></div><!-- pixel lab --><div><img src="https://i.imgur.com/FtZ8gLi.png" alt="imgur"></div><!-- imgur --><div><img src="https://i.imgur.com/s2uJSAQ.png" alt="google photos"></div><!-- google photos --><div><img src="https://i.imgur.com/mRQsB9x.png" alt="github"></div><!-- git hub --><div><img src="https://i.imgur.com/A3u6KCB.png" alt="you cut"></div><!-- you cut --><div><img src="https://i.imgur.com/UkcqT23.png" alt="x recorder"></div><!-- x recorder --><div><img src="https://i.imgur.com/Y73ZVA1.png" alt="internet archive"></div><!-- internet archive --><div><img src="https://i.imgur.com/IweT3XQ.png" alt="youtube"></div><!-- YouTube --></div></div><div class="copyright">&copy;dls2022friendlyseries</div><div class="last-update">Last Updated on 12/30/2021 at 13:25 IST </div>';



document.querySelector("body").style.color = "rgba(0,0,0,0)";
var section = document.querySelectorAll("section");
var all_image = document.querySelectorAll("img");
var all_div = document.querySelectorAll("div");
var all_p = document.querySelectorAll("p");
for(var i = 0; i<all_image.length; i++)
			all_image[i].style.opacity = "0";

for(var i = 0; i<all_p.length; i++)
{
		all_p[i].style.transform = "translateX(100%)";
		all_p[i].style.opacity = "0";
		all_p[i].style.display = "none";
		all_p[i].style.width = "0";
 }

for(var i = 0; i<all_div.length; i++)			
	{
					all_div[i].style.opacity = "0";	
					all_div[i].style.transform = "translateY(50px)";
	}
						
for(var i = 0; i<section.length; i++)
	{
		section[i].style.transform = "translateY(50%)";
		section[i].style.opacity = "0";
 }
var interval = 0;
setInterval(function()
{
						
			if(interval==1)
			{
						for(var i = 0; i<section.length; i++)
						{
					 			section[i].style.transform = "none";
								 section[i].style.opacity = "1";					 
						}
						for(var i = 0; i<all_p.length; i++)
					{
							all_p[i].style.display = "block";
						}
		}
		 else if(interval==2)
	 	{
						for(var i = 0; i<all_image.length; i++)
	  							all_image[i].style.opacity = "1";		
	  				document.querySelector("body").style.color = "rgba(220, 220, 220, 1)";
	  				for(var i = 0; i<all_p.length; i++)
		{			
					all_p[i].style.width = "auto";
					all_p[i].style.opacity = "1";					
				 all_p[i].style.transform = "none";
		}
		clearInterval();
	  }
		 
		 else if(interval==1.5)
		{ for(var i = 0; i<all_div.length; i++)	
		 		{
		 						all_div[i].style.opacity = "1";
		 						all_div[i].style.transform = "none";
			}
		}
			interval+=0.5;
},500);
