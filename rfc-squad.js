			var navDiv = document.querySelectorAll('nav div');
			navDiv[1].style.background = '#a00d9e';
			navDiv[1].style.fontWeight = '800';
			navDiv[1].style.transform = 'scale(1.1)';
		
			var Card = document.querySelector('.player-box'),
			PlayerImage = document.querySelectorAll('.player-image'),
			PlayerName = document.querySelectorAll('.player-name'),
			PlayerCountry = document.querySelectorAll('#player-country img'),
			PlayerRating =  document.querySelectorAll('#player-rating'),
			PlayerPosition = document.querySelectorAll('#player-pos'),
			PlayerHeight = document.querySelectorAll('#Pheight'),
			PlayerFoot = document.querySelectorAll('#Pfoot'),
			spe = document.querySelectorAll('#spe'),
			acc = document.querySelectorAll('#acc'),
			sta = document.querySelectorAll('#sta'),
			con = document.querySelectorAll('#con'),
			str = document.querySelectorAll('#str'),
			tac = document.querySelectorAll('#tac'),
			pas = document.querySelectorAll('#pas'),
			sho = document.querySelectorAll('#sho'),
			hand = document.querySelectorAll('#hand'),
			react = document.querySelectorAll('#react'),
			button = document.querySelectorAll('button'),
			download = document.querySelectorAll('#download'),
			anchor = document.querySelectorAll('.download'),
			Brazil = 'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png',
			Spain = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1280px-Bandera_de_Espa%C3%B1a.svg.png',
			Ukraine = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1280px-Flag_of_Ukraine.svg.png',
			Netherlands = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1280px-Flag_of_the_Netherlands.svg.png',
			Senegal = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/1280px-Flag_of_Senegal.svg.png',
			Italy = 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1280px-Flag_of_Italy.svg.png',
			Greece = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/1280px-Flag_of_Greece.svg.png',
			Morocco = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/1280px-Flag_of_Morocco.svg.png',
			England = 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1280px-Flag_of_England.svg.png',
			Portugal = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1280px-Flag_of_Portugal.svg.png',
			France = 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png',
			
                        //aCardSrc = ['https://i.imgur.com/3VXKwlm.png'],
			aName = ['Lionel Messi', 'Cristiano Ronaldo', 'Kylian Mbappé', 'Harry Kane', 'Erling Haaland', 'Neymar Jr.', 'Mahammad Salah', 'Antoine Griezman'],
			aPos = ['CF', 'CF', 'CF', 'CF', 'CF', 'WF', 'WF', 'WF'],
   aImg = [ 'https://www.futwiz.com/assets/img/fifa22/faces/158023.png', 'https://www.futwiz.com/assets/img/fifa22/faces/20801.png', 'https://www.futwiz.com/assets/img/fifa22/faces/231747.png', 'https://www.futwiz.com/assets/img/fifa22/faces/202126.png', 'https://www.futwiz.com/assets/img/fifa22/faces/239085.png', 'https://www.futwiz.com/assets/img/fifa22/faces/190871.png', 'https://www.futwiz.com/assets/img/fifa22/faces/209331.png', 'https://www.futwiz.com/assets/img/fifa22/faces/194765.png'],
			aCoun = ['https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/250px-Flag_of_Argentina.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1280px-Flag_of_Portugal.svg.png',  'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png', 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1280px-Flag_of_England.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/1280px-Flag_of_Norway.svg.png', 'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/1280px-Flag_of_Egypt.svg.png', 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png'],
		 aCounAlt = ['Argentina', 'Portugal', 'France', 'England', 'Norway', 'Brazil', 'Egypt', 'France'],
		 aRat = [99, 98, 95, 93, 92, 96, 96, 96],
		 aHei = [171,186,181,188,194,175,175,176],
		 aFoot = ['L','B','R','R','L','B','L','L'],
			aSpe = [100,93,100,100,100,100,100,100],
			aAcc = [100,100,100,86,100,100,100,100],
			aSta = [100,95,90,97,97,100,100,100],
			aCon = [100,99,93,90,83,100,87,96],
			aStr = [84,100,90,97,94,72,97,90],
			aTac = [73,57,42,42,50,63,62,55],
			aPas = [100,95,100,91,85,98,92,94],
			aSho = [100,98,100,98,92,100,95,98],
			
			mName = ['Eden Hazard','Raheem Sterling','Heung-Min Son', 'Kevin De Bruyne','Philippe Coutinho','Christian Eriksen','Isco','Luka Modric','Ilkay Gundogan','Casemiro','Marcos Llorente','Bernardo Silva', 'Riyard Mahrez', 'Jadon Sancho'],
			mImg = ['https://www.futwiz.com/assets/img/fifa22/faces/183277.png','https://www.futwiz.com/assets/img/fifa22/faces/202652.png','https://www.futwiz.com/assets/img/fifa22/faces/200104.png','https://www.futwiz.com/assets/img/fifa22/faces/192985.png','https://www.futwiz.com/assets/img/fifa22/faces/189242.png','https://www.futwiz.com/assets/img/fifa22/faces/190460.png','https://www.futwiz.com/assets/img/fifa22/faces/197781.png','https://www.futwiz.com/assets/img/fifa22/faces/177003.png','https://www.futwiz.com/assets/img/fifa22/faces/186942.png','https://www.futwiz.com/assets/img/fifa22/faces/200145.png','https://www.futwiz.com/assets/img/fifa22/faces/226161.png','https://www.futwiz.com/assets/img/fifa22/faces/218667.png','https://www.futwiz.com/assets/img/fifa22/faces/204485.png','https://www.futwiz.com/assets/img/fifa22/faces/233049.png'],
			mRat = [95,94,86,95,93,91,90,94,91,92,89,92,91,91],
			mPos = ['LM','LM','LM','AM','AM','AM','AM','CM','CM','DM','DM','RM','RM','RM','RM'],
			mCoun = ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/1280px-Flag_of_Belgium.svg.png','https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1280px-Flag_of_England.svg.png','https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1280px-Flag_of_South_Korea.svg.png','https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/1280px-Flag_of_Belgium.svg.png','https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png','https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1280px-Flag_of_Denmark.svg.png','https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1280px-Bandera_de_Espa%C3%B1a.svg.png','https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1280px-Flag_of_Croatia.svg.png','https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png','https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png','https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1280px-Bandera_de_Espa%C3%B1a.svg.png','https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1280px-Flag_of_Portugal.svg.png','https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/1280px-Flag_of_Algeria.svg.png','https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1280px-Flag_of_England.svg.png'],
			mCounAlt = ['Belgium','England','South Korea','Belgium','Brazil','Denmark','Spain','Croatia','Germany','Brazil','Spain','Portugal','Algeria','England'],
			mHei = [172,170,184,181,172,182,175,173,180,184,184,173,182,180],
			mFoot = ['R','R','B','R','R','B','R','R','R','R','R','L','L','R'],
			mSpe = [96,100,99,85,100,96,100,87,99,78,98,94,100,100],
			mAcc = [97,99,94,84,100,99,100,77,100,75,98,95,99,100],
			mSta = [85,89,78,91,86,100,100,82,100,88,88,89,97,100],
			mCon = [100,97,84,100,100,86,89,100,82,89,77,88,87,83],
			mStr = [76,74,77,79,63,87,75,81,89,100,92,87,89,82],
			mTac = [69,62,49,87,50,55,38,85,62,95,70,78,52,85],
			mPas = [100,91,79,100,100,84,88,100,81,92,76,88,80,82],
			mSho = [99,95,77,100,99,89,90,100,77,94,73,78,81,82],
                        gCardSrc = [
                        'https://rupansamanta.github.io/www.dls2022friendlyseries.com/2022Sandro.jpg',
			'https://rupansamanta.github.io/www.dls2022friendlyseries.com/2022Alba.jpg',    
                        'https://rupansamanta.github.io/www.dls2022friendlyseries.com/2022Zinchenko.jpg',
                        'https://rupansamanta.github.io/www.dls2022friendlyseries.com/2022Virgil.jpg',
			'https://rupansamanta.github.io/www.dls2022friendlyseries.com/2022Koulibaly.jpg',    
                        'https://rupansamanta.github.io/www.dls2022friendlyseries.com/2022Chiellini.jpg', 
                        'https://rupansamanta.github.io/www.dls2022friendlyseries.com/2022Laporte.jpg',
			'https://rupansamanta.github.io/www.dls2022friendlyseries.com/2022Manolas.jpg',    
                        'https://rupansamanta.github.io/www.dls2022friendlyseries.com/2022Varane.jpg', 
                        'https://rupansamanta.github.io/www.dls2022friendlyseries.com/2022Ruben.jpg',
			'https://rupansamanta.github.io/www.dls2022friendlyseries.com/2022Bounucci.jpg',    
                        'https://rupansamanta.github.io/www.dls2022friendlyseries.com/2022Arnold.jpg', 
                        'https://rupansamanta.github.io/www.dls2022friendlyseries.com/2022Cancelo.jpg',
			'https://rupansamanta.github.io/www.dls2022friendlyseries.com/2022Hakimi.jpg'
                        ],
                        gCardDownload = [
                        'Alex Sandro 91 Card', 'Jordi Alba 91 Card', 'Olexandre Zinchenko 75 Card',
                        'Virgil van Djik 93 Card', 'Kalidou Koulibaly 92 Card', 'Giorgio Chiellini 92 Card', 'Aymeric Laporte 91 Card', 'Kostas Manolas 90 Card', 'Raphael Varane 84 Card', 'Ruben Dias 83', 'Leonardo Bounucci 82 Card',
                        'Alexander-Arnold 91 Card', 'João Cancelo 90 Card', 'Ashraf Hakimi 87 Card'
                        ],
			Sandro = 
			{
						name: 'Alex Sandro',
						img: 'https://www.futwiz.com/assets/img/fifa22/faces/191043.png',
					 rating: 91, position: 'LB',
						countrySrc: Brazil,
					 country: 'Brazil',
						height: 182, foot: 'L',
						spe: 100, acc: 100, sta: 95, con: 81,
						str: 99, tac: 83, pas: 71, sho: 56,
			},
			Alba = 
			{
						name: 'Jordi Alba',
						img: 'https://www.futwiz.com/assets/img/fifa22/faces/189332.png',
						rating: 91, position: 'LB',
						countrySrc: Spain,
						country: 'Spain',
						height: 171, foot: 'L',
						spe: 100, acc: 100, sta: 100, con: 86,
						str: 76, tac: 85, pas: 84, sho: 64,
			},
			Zinchenko = 
			{
						name: 'Oleksandr Zinchenko',
						img: 'https://www.futwiz.com/assets/img/fifa22/faces/227813.png',
						rating: 75, position: 'LB',
						countrySrc: Ukraine,
						country: 'Ukraine',
						height: 175, foot: 'L',
						spe: 74, acc: 75, sta: 75, con: 74,
						str: 63, tac: 68, pas: 72, sho: 62,
			},
			Virgil = 
			{
						name: 'Virgil van Djik',
						img: 'https://www.futwiz.com/assets/img/fifa22/faces/203376.png',
						rating: 93, position: 'CB',
						countrySrc: Netherlands,
						country: 'Netherlands',
						height: 193, foot: 'R',
						spe: 92, acc: 96, sta: 100, con: 80,
						str: 100, tac: 95, pas: 85, sho: 73,
			},
			Koulibaly = 
			{
						name: 'Kalidou Koulibaly',
						img: 'https://www.futwiz.com/assets/img/fifa22/faces/201024.png',
						rating: 92, position: 'CB',
						countrySrc: Senegal,
						country: 'Senegal',
						height: 185, foot: 'R',
						spe: 100, acc: 96, sta: 100, con: 78,
						str: 100, tac: 90, pas: 78, sho: 60,
			},
			Chiellini =
			{
						name: 'Giorgio Chiellini',
						img: 'https://www.futwiz.com/assets/img/fifa22/faces/138956.png',
						rating: 92, position: 'CB',
						countrySrc: Italy,
						country: 'Italy',
						height: 187, foot: 'L',
						spe: 91, acc: 89, sta: 100, con: 80,
						str: 100, tac: 98, pas: 80, sho: 68,
			},
			Laporte = 
			{
						name: 'Aymeric Laporte',
						img: 'https://www.futwiz.com/assets/img/fifa22/faces/212218.png',
						rating: 91, position: 'CB',
						countrySrc: Spain,
						country: 'Spain',
						height: 189, foot: 'L',
						spe: 92, acc: 98, sta: 100, con: 77,
						str: 100, tac: 87, pas: 80, sho: 59,
			},
			Manolas = 
			{
						name: 'Kostas Manolas',
						img: 'https://www.futwiz.com/assets/img/fifa22/faces/192774.png',
						rating: 90, position: 'CB',
						countrySrc: Greece,
						country: 'Greece',
						height: 188, foot: 'R',
						spe: 99, acc: 93, sta: 100, con: 73,
						str: 100, tac: 94, pas: 77, sho: 54,
			},
			Varane = 
			{
						name: 'Raphael Varane',
						img: 'https://www.futwiz.com/assets/img/fifa22/faces/201535.png',
						rating: 84, position: 'CB',
						countrySrc: France,
						country: 'France',
						height: 191, foot: 'R',
						spe: 93, acc: 87, sta: 85, con: 73,
						str: 86, tac: 85, pas: 76, sho: 52,
			},
			Ruben = 
			{
						name: 'Ruben Dias',
						img: 'https://www.futwiz.com/assets/img/fifa22/faces/239818.png',
						rating: 83, position: 'CB',
						countrySrc: Portugal,
						country: 'Portugal',
						height: 187, foot: 'R',
						spe: 70, acc: 74, sta: 93, con: 79,
						str: 88, tac: 85, pas: 80, sho: 68,
			},
			Bounucci = 
			{
						name: 'Leonardo Bounucci',
						img: 'https://www.futwiz.com/assets/img/fifa22/faces/184344.png',
						rating: 82, position: 'CB',
						countrySrc: Italy,
						country: 'Italy',
						height: 190, foot: 'R',
						spe: 71, acc: 72, sta: 86, con: 76,
						str: 93, tac: 87, pas: 76, sho: 69,
			},
			Arnold = 
			{
						name: 'Trent Alexander - Arnold',
						img: 'https://www.futwiz.com/assets/img/fifa22/faces/231281.png',
						rating: 91, position: 'RB',
						countrySrc: England,
						country: 'England',
						height: 175, foot: 'R',
						spe: 96, acc: 98, sta: 81, con: 85,
						str: 82, tac: 78, pas: 92, sho: 77,
			},
			Cancelo = 
			{
						name: 'João Cancelo',
						img: 'https://www.futwiz.com/assets/img/fifa22/faces/210514.png', 
						rating: 90, position: 'RB',
						countrySrc: Portugal,
						country: 'Portugal',
						height: 182, foot: 'R',
						spe: 100, acc: 100, sta: 100, con: 79,
						str: 95, tac: 76, pas: 78, sho: 56,
			},
			Hakimi = 
			{
						name: 'Ashraf Hakimi',
						img: 'https://www.futwiz.com/assets/img/fifa22/faces/235212.png',
						rating: 87, position: 'RB',
						countrySrc: Morocco,
						country: 'Morocco',
						height: 179, foot: 'R',
						spe: 98, acc: 97, sta: 82, con: 79,
						str: 86, tac: 69, pas: 75, sho: 73,
			},
                        gCardSrc = [
                        'https://rupansamanta.github.io/www.dls2022friendlyseries.com/2022Alisson.jpg',
			'https://rupansamanta.github.io/www.dls2022friendlyseries.com/2022Ederson.jpg',    
                        'https://rupansamanta.github.io/www.dls2022friendlyseries.com/2022Courtois.jpg'
                        ],
                        gCardDownload = [
                        'Alisson 96 Card', 'Ederson 95 Card', 'Thibaut Courtois 94 Card'
                        ],
                        Alisson = 
			{
						name: 'Alisson Becker',
						img: 'https://www.futwiz.com/assets/img/fifa22/faces/212831.png',
						rating: 96, position: 'GK',
						countrySrc: Brazil,
						country: 'Brazil',
						height: 193, foot: 'R',
						spe: 66, acc: 62, sta: 61, con: 58,
						tac: 25, pas: 61, gkh: 88, gkr: 99
			},
			Ederson = 
			{
						name: 'Ederson Moraes',
						img: 'https://www.futwiz.com/assets/img/fifa22/faces/210257.png',
						rating: 95, position: 'GK',
						countrySrc: Brazil,
						country: 'Brazil',
						height: 186, foot: 'L',
						spe: 67, acc: 70, sta: 55, con: 59,
					 tac: 54, pas: 59, gkh: 95, gkr: 91
			},
			Courtois = 
			{
						name: 'Thibaut Courtois',
						img: 'https://www.futwiz.com/assets/img/fifa22/faces/192119.png',
						rating: 94, position: 'GK',
						countrySrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/1280px-Flag_of_Belgium.svg.png',
						country: 'Belgium',
						height: 198, foot: 'L',
						spe: 68, acc: 68, sta: 42, con: 53,
					 tac: 58, pas: 28, gkh: 89, gkr: 95
			},
			keeper = [Alisson, Ederson, Courtois],
			defender = [Sandro, Alba, Zinchenko, Virgil, Koulibaly, Chiellini, Laporte, Manolas, Varane, Ruben, Bounucci, Arnold, Cancelo, Hakimi],
			aButLeft = button[0], aButRight = button[1], 
			mButLeft = button[2], mButRight = button[3], 
		 dButLeft = button[4], dButRight = button[5],
			gButLeft = button [6], gButRight = button [7],
			a=0, m=0, d=0, g=0;
			function forward()
			{
						var ind = 0;
						PlayerImage[ind].setAttribute('src', aImg[a]);
						PlayerImage[ind].setAttribute('alt', aName[a]);
						PlayerName[ind].innerHTML = aName[a];
						PlayerRating[ind].innerHTML = aRat[a];
						PlayerPosition[ind].innerHTML = aPos[a];
						PlayerCountry[ind].setAttribute('src', aCoun[a]);
						PlayerCountry[ind].setAttribute('alt', aCounAlt[a]);
						PlayerHeight[ind].innerHTML = aHei[a];
						PlayerFoot[ind].innerHTML = aFoot[a];
						spe[ind].innerHTML = aSpe[a];
						acc[ind].innerHTML = aAcc[a];
						sta[ind].innerHTML = aSta[a];
					 con[ind].innerHTML = aCon[a];
					 str[ind].innerHTML = aStr[a];
					 tac[ind].innerHTML = aTac[a];
					 pas[ind].innerHTML = aPas[a];
					 sho[ind].innerHTML = aSho[a];
					 //anchor[0].setAttribute('href', aCardSrc[a]);
					 //anchor[0].setAttribute('download', aCardDownload[a]);
					 navigator.vibrate(40);
			}
			function midfield()
			{
						var ind = 1;
						PlayerImage[ind].setAttribute('src', mImg[m]);
						PlayerImage[ind].setAttribute('alt', mName[m]);
						PlayerName[ind].innerHTML = mName[m];
						PlayerRating[ind].innerHTML = mRat[m];
						PlayerPosition[ind].innerHTML = mPos[m];
						PlayerCountry[ind].setAttribute('src', mCoun[m]);
						PlayerCountry[ind].setAttribute('alt', mCounAlt[m]);
						PlayerHeight[ind].innerHTML = mHei[m];
						PlayerFoot[ind].innerHTML = mFoot[m];
						spe[ind].innerHTML = mSpe[m];
						acc[ind].innerHTML = mAcc[m];
						sta[ind].innerHTML = mSta[m];
					 con[ind].innerHTML = mCon[m];
					 str[ind].innerHTML = mStr[m];
					 tac[ind].innerHTML = mTac[m];
					 pas[ind].innerHTML = mPas[m];
					 sho[ind].innerHTML = mSho[m];                                        
                                         //anchor[1].setAttribute('href', mCardSrc[m]);
					 //anchor[1].setAttribute('download', mCardDownload[m]);					
                        	         navigator.vibrate(40);
			}
			function defense()
			{
						var ind = 2;
						PlayerImage[ind].setAttribute('src', defender[d].img);
						PlayerImage[ind].setAttribute('alt', defender[d].name);
						PlayerName[ind].innerHTML = defender[d].name;
						PlayerRating[ind].innerHTML = defender[d].rating;
						PlayerPosition[ind].innerHTML = defender[d].position;
						PlayerCountry[ind].setAttribute('src', defender[d].countrySrc);
						PlayerCountry[ind].setAttribute('alt', defender[d].country);
						PlayerHeight[ind].innerHTML = defender[d].height;
						PlayerFoot[ind].innerHTML = defender[d].foot;
						spe[ind].innerHTML = defender[d].spe;
						acc[ind].innerHTML = defender[d].acc;
						sta[ind].innerHTML = defender[d].sta;
					 con[ind].innerHTML = defender[d].con;
					 str[ind].innerHTML = defender[d].str;
					 tac[ind].innerHTML = defender[d].tac;
					 pas[ind].innerHTML = defender[d].pas;
					 sho[ind].innerHTML = defender[d].sho;
                                         anchor[2].setAttribute('href', dCardSrc[d]);
					 anchor[2].setAttribute('download', dCardDownload[d]);					 					 
					 navigator.vibrate(40);
			}
			function goalkeeper()
			{
						var ind = 3;
						PlayerImage[ind].setAttribute('src', keeper[g].img);
						PlayerImage[ind].setAttribute('alt', keeper[g].name);
						PlayerName[ind].innerHTML = keeper[g].name;
						PlayerRating[ind].innerHTML = keeper[g].rating;
						PlayerPosition[ind].innerHTML = keeper[g].position;
						PlayerCountry[ind].setAttribute('src', keeper[g].countrySrc);
						PlayerCountry[ind].setAttribute('alt', keeper[g].country);
						PlayerHeight[ind].innerHTML = keeper[g].height;
						PlayerFoot[ind].innerHTML = keeper[g].foot;
						spe[ind].innerHTML = keeper[g].spe;
						acc[ind].innerHTML = keeper[g].acc;
						sta[ind].innerHTML = keeper[g].sta;
					 con[ind].innerHTML = keeper[g].con;
					 tac[ind].innerHTML = keeper[g].tac;
					 pas[ind].innerHTML = keeper[g].pas;
					 hand[0].innerHTML = keeper[g].gkh;
					 react[0].innerHTML = keeper[g].gkr;
                                         anchor[3].setAttribute('href', gCardSrc[g]);
					 anchor[3].setAttribute('download', gCardDownload[g]);					 
					 navigator.vibrate(40);
			}
			forward();
			midfield();
		        defense();
			goalkeeper();
			aButLeft.onclick = function()
			{						
					 if(a==0)
					 			a = aName.length-1;
					 else
									a--;
						forward();			
			}
			aButRight.onclick = function()
			{
					 if(a==aName.length-1)
					 			a = 0;
					 else
									a++;
						forward();
			}
			mButLeft.onclick = function()
			{						
					 if(m==0)
					 			m = mName.length-1;
					 else
									m--;
						midfield();
			}
		 mButRight.onclick = function()
			{
					 if(m==mName.length-1)
					 			m = 0;
					 else
									m++;
						midfield();
			}
			dButLeft.onclick = function()
			{						
					 if(d==0)
					 			d = defender.length-1;
					 else
									d--;
						defense();
			}
		 dButRight.onclick = function()
			{
					 if(d==defender.length-1)
					 			d = 0;
					 else
									d++;
						defense();
			}
			gButLeft.onclick = function()
			{						
					 if(g==0)
					 			g = keeper.length-1;
					 else
									g--;
						goalkeeper();
			}
		 gButRight.onclick = function()
			{
					 if(g==keeper.length-1)
					 			g = 0;
					 else
									g++;
						goalkeeper();
			}
			
			function vib()
			{
						navigator.vibrate([60,60,70]);
			}
			download[0].onclick = vib;
			download[1].onclick = vib;
			download[2].onclick = vib;
			download[3].onclick = vib;
