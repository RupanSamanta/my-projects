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
down = document.getElementsByTagName('a')[0],
size = document.getElementById('size'),
canvas = document.getElementsByTagName('canvas')[0],
ctx = canvas.getContext('2d'),
cardURL = '/storage/emulated/0/DLS_CARD/',
cards = '', boots = '',
red = '#e61419', orange = '#f48410',
yellow = '#eedb10', green = '#10ca08',
sblue = '#19dab2', rblue = '#4d8af2',
grey = '#777a85', white = '#ffffff',
black = '#000', font = '58px Reno',
statsCoord = [[936,292], [936,427], [936,562], [936,697], [1220,292], [1220,427], [1220,562], [1220,697]],
sizeVal = [1.6,1.5,1.4,1.3,1.2,1,1.2,1.3,1.4,1.5,1.6],
horiPos, vertPos, sz,
img = new Image(), uplImg = new Image(), 
uplSrc = 'https://www.futwiz.com/assets/img/fifa22/faces/67129665.png';

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
			size.oninput = drawCard;
			down.onclick = function ()
			{
						download (canvas, 'Ronaldo.png');
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
			img.src = cards;
			img.onload = function ()
			{
						ctx.drawImage(img, 0, 0, 1280, 890);
						uplImg.src = uplSrc;
					 uplImg.onload = function ()
					 {
					 			horiPos = horiBar.value;
					 			vertPos = vertBar.value;
					 			var wid, hei; sz = size.value;
					 			if(sz>=sizeVal.length/2)
					 			{
					 						wid = uplImg.width*sizeVal[sz];
					 						hei = uplImg.height*sizeVal[sz];
					 			}
					 			else
									{
												wid = uplImg.width/sizeVal[sz];
					 						hei = uplImg.height/sizeVal[sz];
									}
					 			ctx.drawImage(uplImg, horiPos, vertPos, wid, hei);				 			
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
		    
		    ctx.font = '89px Reno';
		    ctx.fillStyle = white;
		    ctx.fillText(rating.value, 615, 151);
		    
		    ctx.fillStyle = posColor();
		    ctx.fillRect(552, 250, 144, 86);
		    
		    ctx.textAlign = 'center';
		    ctx.font = '66px Reno';
		    ctx.fillStyle = black;
		    ctx.fillText(position.value, 624, 318);
		    
		    ctx.font = '62px Reno';
		    ctx.fillStyle = black;
		    ctx.fillText(height.value, 908, 159);
		    
		    var bt = new Image();
		    bt.src = '/storage/emulated/0/DLS_BOOT/'+boot.value+'.png';		    
		    bt.onload = function ()
		    {		
		    			ctx.drawImage(bt, 1020, 84, 110, 110);
		    }
		    
		    ctx.font = '62px Reno';
		    ctx.fillStyle = black;
		    ctx.fillText(foot.value[0], 1185, 159);
		    
		    writeAttributes();
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
						pc = blue;
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

function download(canvas, filename) {

    /// create an "off-screen" anchor tag
    var lnk = document.createElement('a'),
        e;

    /// the key here is to set the download attribute of the a tag
    lnk.download = filename;

    /// convert canvas content to data-uri for link. When download
    /// attribute is set the content pointed to by link will be
    /// pushed as "download" in HTML5 capable browsers
    lnk.href = canvas.toDataURL('image/png;base64');

    /// create a "fake" click-event to trigger the download
    if (document.createEvent) {

        e = document.createEvent("MouseEvents");
        e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

        lnk.dispatchEvent(e);

    } else if (lnk.fireEvent) {

        lnk.fireEvent("onclick");
    }
}
/* download */