			var score_box = document.querySelector('.score'),
			time_box = document.querySelector('.time'),
			question_box = document.querySelector('.question'),
			num1_box = document.querySelector('.first-num'),
			num2_box = document.querySelector('.last-num'),
			operator_box = document.querySelector('.operators'),
			answer_box = document.querySelector('#answer'),
			submit_box = document.querySelector('#button'),
			correct_wrong = document.querySelector('.correct-wrong'),
			operation = 0, randomOperator = 0, time = 0,
			randomV = 0, num1 = 0, num2 = 0, score = 0,
			correctAns = 0, incorrectAns = 0, scoreV = 0,
			qNum = 0, questions = [],
			yAnswer = [], cAnswer = [],
			radio = document.querySelectorAll('#levels'),
			tdQuesNo = document.querySelectorAll('#QNo'),
			tdQues = document.querySelectorAll('#Q'),
			tdAns = document.querySelectorAll('#Ans'),
			tdCAns = document.querySelectorAll('#CAns'),
			main_box = document.querySelectorAll('main'),
			start_button = document.querySelector('.start-button'),
			replayButton = document.querySelector('#replay');
			score_box.innerHTML = 0;
			time_box.innerHTML = '0s';	
			for(var i=0; i<10; i++)
			{
						var div = document.createElement('div');
						div.innerHTML = '<span>'+(i+1)+'</span><i class="fas fa-circle" id="i"></i>';
						correct_wrong.appendChild(div);
			}			
			var cw = document.querySelectorAll('#i');
			function genQuestion()
			{		
						if(radio[0].checked == true)
						{
									randomV = 20;
									scoreV = 5;
						}
						else if(radio[1].checked == true)
						{
									randomV = 50;
									scoreV = 10;
						}
						else if(radio[2].checked == true)
						{
									randomV = 100; 
									scoreV = 20;
						}	
						submit_box.disabled = false;
						question_box.innerHTML = qNum+1;
						if(randomV==20)
						{
					 num1 = Math.floor(Math.random()*randomV);
						num2 = Math.floor(Math.random()*randomV);
						}
						else if(randomV==50)
						{
					 num1 = Math.floor(Math.random()*randomV+10);
						num2 = Math.floor(Math.random()*randomV+30);
						}
						else if(randomV==100)
						{
					 num1 = Math.floor(Math.random()*randomV+20);
						num2 = Math.floor(Math.random()*randomV+50);
						}
						num1_box.innerHTML = num1;
						num2_box.innerHTML = num2;
						randomOperator = Math.floor(Math.random()*3+1);
						switch(randomOperator)
						{
									case 1:
												operation = num1+num2;
												operator_box.innerHTML = '+';
												questions[qNum] = num1+' + '+num2;
												cAnswer[qNum] = num1+num2;
												break;
								 case 2:
												operation = num1-num2;
												operator_box.innerHTML = '-';
												questions[qNum] = num1+' - '+num2;
												cAnswer[qNum] = num1-num2;
												break;
								 case 3:
												operation = num1*num2;
												operator_box.innerHTML = '×';
												questions[qNum] = num1+' × '+num2;
												cAnswer[qNum] = num1*num2;
												break;	
						}
			}
			function check()
			{
						answer = answer_box.value;
						yAnswer[qNum] = answer;
						if(answer == operation)
						{
								score += scoreV;
								score_box.innerHTML = score;
								cw[qNum].className = 'fas fa-check-circle';
								cw[qNum].style.color = 'limegreen';
								correctAns++;
						}
						else
						{
									cw[qNum].className = 'fas fa-times-circle';
									cw[qNum].style.color = 'red';
									incorrectAns++;
						}
						answer_box.value = null;							
					 	qNum++;
						genQuestion();
					 if(qNum==10)
									setTimeout(displayResult, 500);
			}
			setInterval(function()
			{
						if(answer_box.value.length == 0)
						{
									submit_box.disabled = true;
									submit_box.className = '';
						}
						else 
					 {
					 			submit_box.disabled = false;
					 			submit_box.className = 'button';
					 	}
			},100);
			function timeC()
			{
						if(time>=60)							
									time_box.innerHTML = Math.floor(time/60)+'m '+time%60+'s';
						else
					 			 time_box.innerHTML = time+'s';
				  	time++;
			}
			function displayResult()
			{
								 	main_box[1].style.display = 'none';
								 main_box[2].style.display = 'block';
								 clearInterval(timeCount);
								 for(var i=0; i<questions.length-1; i++)
								 {
								 			tdQuesNo[i].innerHTML = i+1;
								 			tdQues[i].innerHTML = questions[i];								 			
								 			tdCAns[i].innerHTML = cAnswer[i];
								 			if(yAnswer[i] == cAnswer[i])
								 						tdAns[i].innerHTML = yAnswer[i]+'<i class="fas fa-check-circle" style="color: limegreen; margin: 0 5px"></i>';
								 			else
														tdAns[i].innerHTML = yAnswer[i]+'<i class="fas fa-times-circle" style="color: red; margin: 0 5px"></i>';
								 }
								 document.querySelector('#correct').innerHTML = correctAns;
								 document.querySelector('#incorrect').innerHTML = incorrectAns;
								 document.querySelector('#timeTaken').innerHTML = time>60?Math.floor(time/60)+'m '+time%60+'s': time+'s';
								 document.querySelector('#score').innerHTML = score;
			}
			function replay()
			{
						operation = 0; randomOperator = 0; 
						time = 0; num1 = 0; num2 = 0; score = 0;
						correctAns = 0; incorrectAns = 0; 
						qNum = 0; randomV = 0; questions = [];
						scoreV = 0; yAnswer = []; cAnswer = [];
						answer_box.value = null;
						score_box.innerHTML = score;
						time_box.innerHTML = time+'s';
						num1_box.innerHTML = '';
						num2_box.innerHTML = '';
						operator_box.innerHTML = '';
						for(var i=0; i<cw.length; i++)
						{
									cw[i].className = 'fas fa-circle';
									cw[i].style.color = 'white';
						}
						setTimeout(function()
						{											
									main_box[2].style.display = 'none';
					 			 main_box[0].style.display = 'block';							  
					 	},1500);
			}
			start_button.onclick = function()
			{
						start_button.innerHTML = 'Starting';
						setTimeout(function()
						{															
									main_box[0].style.display = 'none';
									main_box[1].style.display = 'block';
									timeCount = setInterval(timeC, 1000);			
									setTimeout(genQuestion, 1000);
									setTimeout(timeC, 1000);
									start_button.innerHTML = 'Start';
					 },1500);
			}			
			submit_box.onclick = check;
			replayButton.onclick = replay;
