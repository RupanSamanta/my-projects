/* selecting all necessary elements */
var firstName = document.getElementById('first-name'),
lastName = document.getElementById('last-name'),
rating = document.getElementById('rating'),
position = document.getElementsByClassName('position')[0],
country = document.getElementsByClassName('country')[0],
height = document.getElementById('height'),
foot = document.getElementsByClassName('foot')[0],
boot = document.getElementsByClassName('boot-col')[0],
spe = document.getElementById('speed'),
acc = document.getElementById('acceleration'),
sta = document.getElementById('stamina'),
con = document.getElementById('condition'),
str = document.getElementById('strength'),
tac = document.getElementById('tackle'),
pas = document.getElementById('pass'),
sho = document.getElementById('shoot'),
attr = [spe, acc, sta, con, str, tac, pas, sho],
common = document.getElementById('common'),
rare = document.getElementById('rare'),
legendary = document.getElementById('legendary'),
uploadImg = document.getElementsByClassName('upload-image')[0],
image = document.getElementById('image'),
horiBar = document.getElementById('hori-pos'),
vertBar = document.getElementById('vert-pos'),
down = document.getElementsByClassName('download')[0],
imgWidth = document.getElementById('img-width'),
imgHeight = document.getElementById('img-height'),
canvas = document.getElementsByTagName('canvas')[0],
ctx = canvas.getContext('2d'),
cardURL = 'https://rupansamanta.github.io/www.dls2022friendlyseries.com/DLS/dls-card/',
cards = '', boots = '',
red = '#e61419', orange = '#f48410',
yellow = '#eedb10', green = '#10ca08',
sblue = '#19dab2', rblue = '#4d8af2',
grey = '#777a85', white = '#ffffff',
black = '#000', font = '58px Reno',
statsCoord = [[935,292], [935,427], [935,562], [935,697], [1217,292], [1217,427], [1217,562], [1217,697]],
attrCoord = [[795,292], [1077,292], [795,427], [1077,427], [795,562], [1077,562], [795,697],  [1077,697]],
fGK = ['SPE', 'TAC', 'ACC', 'PAS', 'CON', 'GKH', 'STR', 'GKR'],
fOT = ['SPE', 'STR', 'ACC', 'TAC', 'STA', 'PAS', 'CON', 'SHO'],
span = document.querySelectorAll('.stats span'), urls = document.getElementById('urls'),
horiPos, vertPos, img = new Image(), uplImg = new Image(), 
uplSrc = 'https://www.futwiz.com/assets/img/fifa21/faces/20801.png';
urls.value = uplSrc;
/* selecting all necessary elements */

/* upload image */
uploadImg.onclick = function ()
{
			image.click();
		 navigator.vibrate(50)
}
/* upload image */

/* set all functions */

			document.body.onload = drawCard;
			common.onchange = drawCard;
			rare.onchange = drawCard;
			legendary.onchange = drawCard;
			firstName.oninput = drawCard;
			lastName.oninput = drawCard;
			position.onchange = drawCard;
			rating.oninput = drawCard;
			foot.onchange = drawCard;
			boot.onchange = drawCard;
			height.oninput = drawCard;
			horiBar.onchange = drawCard;
			vertBar.onchange = drawCard;
			imgWidth.oninput = drawCard;
			imgHeight.oninput = drawCard; country.onchange = drawCard;
			down.onclick = function ()
			{
			      if(confirm('Confirm Download')) download ();
			}
                        urls.oninput = function ()
			{
						uplSrc = urls.value;
						drawCard();
			}
			for (let i = 0; i < attr.length; i++)
			{
						attr[i].oninput = drawCard;
			}
			image.onchange = readFile;
/* set all functions */

/* draw cards */
function drawCard()
{
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			if(common.checked)
						cards = cardURL+'common.png';
			else if(rare.checked)
		 			cards = cardURL+'rare.png';
		 else if(legendary.checked)
		 			cards = cardURL+'legendary.png';
	                img.crossOrigin="anonymous"; img.src = cards;
			img.onload = function ()
			{
						ctx.drawImage(img, 0, 0, 1280, 890);
						uplImg.crossOrigin="anonymous"; uplImg.src = uplSrc;
					 uplImg.onload = function ()
					 {
					 			horiPos = horiBar.value;
					 			vertPos = vertBar.value;
					 			ctx.drawImage(uplImg, horiPos, vertPos, imgWidth.value, imgHeight.value);				 			
				         }
				  ctx.textAlign = 'center';		    
		    ctx.font = '50px Reno';
		    ctx.fillStyle = grey;
		    ctx.fillText(firstName.value, 360, 790);		    
		  	 ctx.textAlign = 'center';
					 ctx.font = '70px Reno';
					 ctx.fillStyle = white;
		    ctx.fillText(lastName.value, 362, 858);   	
		    	    
		    ctx.beginPath()		    
		    ctx.arc(616, 118, 88, 0, 2*Math.PI);
		    ctx.fillStyle = rateColor();
		    ctx.fill();
		    
		    ctx.font = '80px Reno';
		    ctx.fillStyle = white;
		    ctx.fillText(rating.value, 615, 151);
		    
		    ctx.fillStyle = posColor();
		    ctx.fillRect(554, 250, 142, 86);
		    var cnt = new Image();
		    if(country.value == 'eng')
		    			cnt.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/250px-Flag_of_England.svg.png';
		    else if(country.value == 'scot')
		    			cnt.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/250px-Flag_of_Scotland.svg.png';
		    else if(country.value == 'wales')
		    			cnt.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Flag_of_Wales.svg/250px-Flag_of_Wales.svg.png';
		    else	
		                        cnt.src = 'https://flagcdn.com/w320/'+country.value+'.png';
		    cnt.crossOrigin = 'anonymous';
		    cnt.onload = function ()
		    {
		    			ctx.drawImage(cnt,554,356,142,90)
		    }
		    ctx.textAlign = 'center';
		    ctx.font = '66px Reno';
		    ctx.fillStyle = black;
		    ctx.fillText(position.value, 624, 318);
		    
		    ctx.font = '62px Reno';
		    ctx.fillStyle = black;
		    ctx.fillText(height.value, 908, 159);
		    
		    var bt = new Image(); bt.crossOrigin="anonymous";
		    bt.src = 'https://rupansamanta.github.io/www.dls2022friendlyseries.com/DLS/dls-boot/'+boot.value+'.png';		    
		    bt.onload = function ()
		    {		
		    			ctx.drawImage(bt, 1020, 84, 110, 110);
		    }
		    
		    ctx.font = '62px Reno';
		    ctx.fillStyle = black;
		    ctx.fillText(foot.value[0], 1185, 159);
		    
                    attrName();
		    writeAttributes();
			}
}
function attrName()
{
			ctx.textAlign = 'center';
			if(position.value == 'GK')
						for(let i=0; i<fGK.length; i++)
						{
									ctx.fillStyle = '#000';
									ctx.font = '62px Reno';
		    			ctx.fillText(fGK[i], attrCoord[i][0], attrCoord[i][1]);
		    			span[i].innerText = fGK[i];
						}
			else
						for(let i=0; i<fOT.length; i++)
						{
									ctx.fillStyle = '#000';
									ctx.font = '62px Reno';
		    			ctx.fillText(fOT[i], attrCoord[i][0], attrCoord[i][1]);
		    			span[i].innerText = fOT[i];
						}
}
function writeAttributes()
{
			for(let i=0; i<attr.length; i++)
			{
						var v = attr[i].value;						
						if(v < 60)
									ctx.fillStyle = red;
						else if(v >= 60 && v < 70)
									ctx.fillStyle = orange;
						else if(v >= 70 && v < 80)
									ctx.fillStyle = yellow;
						else if(v >= 80 && v < 90)
									ctx.fillStyle = green;
						else if(v > 89)
									ctx.fillStyle = sblue;
						ctx.font = '62px Reno';
                                                if(v >= 100)
						{
									ctx.save();									
									ctx.translate(statsCoord[i][0], statsCoord[i][1]);
									ctx.save();
									ctx.scale(0.85, 1);
									ctx.fillText(v, 0, 0);
									ctx.restore();
									ctx.restore();
						}
						else
		    ctx.fillText(v, statsCoord[i][0], statsCoord[i][1]);
			}
}
function rateColor()
{
			var r = '', rv = rating.value;
			if(rv < 60)
						r = red;
			else if(rv >= 60 && rv < 70)
						r = orange;
			else if(rv >= 70 && rv < 80)
						r = yellow;
			else if(rv >= 80 && rv < 90)
						r = green;
			else if(rv >= 90)
						r = rblue;
			return r;
}
function posColor()
{
			var pv = position.value.toLowerCase(),
			pc = '';
			if(pv == 'cf' || pv == 'wf')
						pc = red;
			else if(pv == 'lm' || pv == 'am' || pv == 'cm' || pv == 'dm' || pv == 'rm')
						pc = yellow;
			else if(pv == 'lb' || pv == 'cb' || pv == 'rb')
						pc = green;
			else if(pv == 'gk')
						pc = rblue;
			return pc;
}
function readFile()
{
			var reader = new FileReader(),
   file = image.files[0];
   reader.onload = function(e)
   {
   			uplSrc = e.target.result;
   			drawCard();
   }
   reader.readAsDataURL(file);
}
/*function downLoad()
{
			down.download = firstName.value+' '+lastName.value+'.png';
			down.href = canvas.toDataURL('image/png;base64');
}*/
/* draw cards */
/* download */

function download()
{
        var a = document.createElement('a');
        a.href = canvas.toDataURL('image/png;base64');
	a.download = firstName.value+lastName.value+'.png';
	document.body.appendChild(a)
	a.click();
	document.body.removeChild(a);
}

/* download */
