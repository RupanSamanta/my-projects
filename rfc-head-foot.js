var head = document.querySelector('header'),
			foot = document.querySelector('footer'),
			nav , 	I = 0, 	icons, div, head1, figure,
			navList = ['Home', 'Squad', 'Stadium & Facilities', 'Records', 'Trophies'],
			navIcon = ['fa-solid fa-house', 'fa-solid fa-users', 'fa-solid fa-building', 'fa-solid fa-medal', 'fa-solid fa-trophy'],
			footerLogo = ['https://i.imgur.com/C5eEqi9.png', 'https://i.imgur.com/u5UREyB.png', 'https://i.imgur.com/Bp3si52.png', 'https://i.imgur.com/Jl6XlUk.png', 'https://i.imgur.com/KHUnnXD.png', 'https://i.imgur.com/mRQsB9x.png', 'https://i.imgur.com/FtZ8gLi.png', 'https://i.imgur.com/1nwBAiF.png', 'https://i.imgur.com/UkcqT23.png', 'https://i.imgur.com/A3u6KCB.png'],
			footerTitle = ['Official Device', 'Official Network', 'Search Engine', 'Official Browser', 'Official Editor', 'Web Host', 'Gallery Host', 'Photo Editor', 'Video Recorder', 'Video Editor'],
			footerAlt = ['Lenovo', 'Airtel', 'Google', 'Chrome', 'Treb Edit', 'Git Hub', 'Imgur', 'Pixel Lab', 'X Recorder', 'You Cut'];
			
		 head.innerHTML = '<div id="head1"><div></div><i class="fa-solid fa-bars-staggered" id="i"></i></div><nav></nav>';
		 nav = document.querySelector('nav');
			icons = document.getElementById('i');
			head1 = document.getElementById('head1');
			for(var i=0; i<navList.length; i++)
			{
						div = document.createElement('div');
						div.innerHTML = '<span><i class="'+navIcon[i]+'"></i></span>'+navList[i];
						nav.appendChild(div);
			}
			icons.onclick = function()
			{
						if(I%2==0)
						{
									icons.className = 'fa-solid fa-xmark';
									head.style.height = '475px';
						}
						else
						{
									icons.className = 'fa-solid fa-bars-staggered';
									head.style.height = '60px';
						}
						I++;
			}

var footDiv = document.createElement('div');
figure = document.createElement('figure');
figure.innerHTML = '<img src="https://i.imgur.com/I6JQIoT.png" alt="DLS 22"></img><figcaption>Official Game</figcaption>';
footDiv.appendChild(figure);
foot.appendChild(footDiv);

footDiv = document.createElement('div');
for (var i = 0; i < footerLogo.length; i++)
{
			figure = document.createElement('figure');
			figure.innerHTML =  '<img src="'+footerLogo[i]+'" alt="'+footerAlt[i]+'"></img><figcaption>'+footerTitle[i]+'</figcaption>';
			footDiv.appendChild(figure);
}
foot.appendChild(footDiv);
footDiv = document.createElement('div');
footDiv.innerHTML = '<p>&copy;RS Football Club 2022</p>';
foot.appendChild(footDiv);
