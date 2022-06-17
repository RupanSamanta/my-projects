const canvas = document.getElementsByTagName('canvas'),
			bgCtx = canvas[0].getContext('2d'),
			ctx = canvas[1].getContext('2d'),
			width = window.innerWidth,
			height = window.innerHeight,
			particles = [];
			
canvas[0].width = width;
canvas[0].height = height;
canvas[1].width = width;
canvas[1].height = height*0.95;

background();
stars();
document.body.addEventListener('click', (e)=>{ shoot(e) });

function random(min, max)
{
			return Math.random() * (max - min) + min;
}
function background()
{
			var bg = bgCtx.createLinearGradient(0, 0, 0, height);
			bg.addColorStop(0, '#000B27');
			bg.addColorStop(1, '#561477');			
			
			bgCtx.fillStyle = bg;
			bgCtx.fillRect(0, 0, width, height);
			
			bgCtx.fillStyle = '#182746';
			bgCtx.fillRect(0, height * 0.98, width, height);
			bgCtx.fillStyle = '#0e152a';
			bgCtx.fillRect(0, height * 0.95, width, height);
}
function stars()
{
			for (let i = 0; i < random(100, 200); i++) {
					
						var r = random(0.2, 1),
									 x = random(25, width - 20),
									 y = random(25, height / 2);
						bgCtx.beginPath();
						bgCtx.fillStyle = 'white';
						bgCtx.arc(x, y, r, 0, Math.PI * 2);
						bgCtx.fill();
			}			
}

function drawWizard()
{
    var wiz = new Image();
    wiz.src = 'https://github.com/flowforfrank/javascript-fireworks/blob/master/assets/wizard.png?raw=true';    
    wiz.onload = function () {   
        bgCtx.drawImage(this, (width * 0.9) - this.width, (height * 0.95) - this.height);       		
  		 }
}
function circle(x, y)
{
			var r = random(100, 255),
		  		  g = random(100, 255),
    		  b = random(100, 255);
			ctx.beginPath();
		 ctx.fillStyle = 'rgb('+r+','+g+','+b+')';
	  	ctx.arc(x, y, 5, 0, Math.PI * 2);
	 		ctx.fill();
}
function shoot(e)
{
			var x1 = e.pageX, y1 = height * 0.95,
						 x2 = e.pageX, y2 = e.pageY,
						 distance = Math.round(Math.sqrt(Math.pow((y2 - y1), 2) + Math.pow((x2 - x1), 2))),
						 length = height * 0.05, interval, d,
						 cnv = document.createElement('canvas');
						 cnv.width = width; cnv.height = height;
						 d = new Date();
						 d = Math.round(d).toString();
						 cnv.setAttribute('id', d);
						 document.body.appendChild(cnv);						 
						 
		 circle(x2, y2);
		 var cid = document.getElementById(d),
			    cix = cid.getContext('2d');
		 interval = 	setInterval(()=>
		 {		 	  		
					 var r = random(100, 255),
					 			  g = random(100, 255),
					 			  b = random(100, 255), yy = y1 - length;
			   y1 -= 5; yy -= 5;
			   
			   cix.clearRect(0, 0, width, height);		 			  
		 				cix.beginPath();
		 				cix.moveTo(x1, y1);
		 				cix.lineTo(x1, yy);
		 				cix.strokeStyle = 'rgb('+r+','+g+','+b+')';
		 				cix.stroke();
		 				distance = Math.round(Math.sqrt(Math.pow((y2 - y1), 2) + Math.pow((x2 - x1), 2)));
		 				
		 				if (y1 < y2 + length) {
		 					  clearInterval(interval);
		 							sparkles(x2, y2, d);
		 				}
		 }, 0);
}

function sparkles(x, y, tt)
{
			var r = random(150, 255),
		  		  g = random(150, 255),
    		  b = random(150, 255),
    		  n = random(50, 100),
    		  theta = 360 / n, l = height * 0.2, i = 1,
    		  c = document.getElementById(tt),
    		  cx = c.getContext('2d');
    		  
			cx.beginPath();
		 cx.fillStyle = 'rgb('+r+','+g+','+b+')';
	  	cx.arc(x, y, 5, 0, Math.PI * 2);
	 		cx.fill();
	 		
	 		setTimeout(()=>{		
	 					while(i < 360){
	 					i+= theta;	 						 
	 					var sin = Math.sin(i * Math.PI / 180),
	 					    cos = Math.cos(i * Math.PI / 180);
	 					cx.beginPath();
		 				cx.moveTo(x, y);
		 				cx.lineTo(x + l * sin, y + l * cos);
		 				cx.strokeStyle = 'rgb('+r+','+g+','+b+')';
		 				cx.stroke();
		 				l = random(height * 0.1, height * 0.2);
		 				if(i >= 360)
		 							setTimeout(()=>
		 			 				{
		 			 						ctx.clearRect(0, 0, width, height);
		 									c.style.opacity = 0;
		 									setTimeout(()=>{c.remove()}, 1000);
		 			 				}, height * 0.9);
		 			 }
		 	}, 100);
}
