$('document').ready(function() {
   setFormations();
   displayFormation($('#formation').find(':selected').val());
   $('#formation').change((e) => {
      displayFormation($('#formation').find(':selected').val());
   });
   $('#add-player-wrapper').height(window.innerHeight + "px");
   const myFont = new FontFace('Renogare', 'url(https://theshinramen.github.io/DLS-Card-Creator/DLS23/assets/site/Renogare-Regular.woff)');
   myFont.load();
  document.fonts.add(myFont);
});
$('#close').click(()=> {
   hideAddPlayer();
   let btn = $('#pitch button');
   $.each(btn, (ind) => {
      btn[ind].disabled = false;
   });
});
$('#search').click(() => {
   let val = $('#search-bar').val().trim();
   if (val.length != 0) {
      $('#search-result').html("");
      DATA.forEach((value, index) => {
         if (value.name.search(val) != -1)
            searchResult(index, value, $('#search-result'));
      });
   }
});

function setFormations() {
  let formations = [
    ["4-4-2", "4-1-2-1-2", "4-3-1-2", "4-2-2-2", "4-4-1-1", "4-1-3-2"],
    ["4-5-1", "4-1-4-1", "4-2-3-1", "4-3-2-1"],
    ["4-3-3", "4-1-2-3", "4-2-1-3"],
    ["5-3-2", "5-2-1-2"],
    ["5-2-3", "5-2-2-1"],
    ["5-4-1", "5-1-2-1-1"],
    ["3-5-2", "3-2-3-2", "3-1-4-2", "3-4-1-2", "3-5-1-1"],
    ["3-4-3", "3-4-2-1", "3-1-2-1-3", "3-3-1-3"]
  ]
  for (let i=0; i<formations.length; i++) {
    let optgrp = document.createElement('optgroup');
    optgrp.setAttribute('label', formations[i][0]);
    for (let j=0; j<formations[i].length; j++) {
      let opt = document.createElement('option');
      opt.innerText = formations[i][j];
      optgrp.appendChild(opt);
    }
    $('#formation').append(optgrp);
  }
};
function displayFormation(val) {
  $('#pitch').html("");
  let pos = position[val].split('-'),
   counter = 0,
   form = val.split('-'),
   sep = document.createElement('div'),
   btn = document.createElement('button'),
   height = ($('#pitch').height() / (form.length + 1)) + "px";
  btn.innerHTML = "GK";
  btn.name = "defense";
  sep.appendChild(btn);
  sep.style.transform = 'translateY(15px)';
  sep.style.height = height;
  $('#pitch').append(sep);
  for (let i=0; i<form.length; i++) {
    sep = document.createElement('div');
    for (let j=0; j<form[i]; j++) {
      btn = document.createElement('button');
      let tempos = pos[counter++];
      switch(tempos) {
         case "LB":
         case "CB":
         case "RB":
            btn.name = "defense";
            break;
         case "LM":
         case "AM":
         case "CM":
         case "DM":
         case "RM":
            btn.name = "midfield";
            break;
         default: 
            btn.name = "attack";
      }
      btn.innerText = tempos;
      if (form[i] == 2)
        btn.style.margin = "0 20px";
      sep.appendChild(btn);
    }
    if (form.length > 3) {
      if (i == 0)
        sep.style.transform = "translateY(20px)";
      if (i == form.length - 1)
        sep.style.transform = "translateY(15px)";
    }
    if ((i == form.length-1 && form[i] == 2) || (i == 1 && (val == "4-2-2-2" || val == "5-2-2-1")))
      sep.style.justifyContent = "center";
    if ((i == 2 && val == "3-4-2-1") || (form[i] == 2 && val == "5-1-2-1-1"))
         sep.style.justifyContent = "space-around";
    
    sep.style.height = height;
    $('#pitch').append(sep);
  }
  let pitch_btn = $('#pitch button');
  $.each(pitch_btn, (i)=> {
      pitch_btn[i].addEventListener('click', ()=> {
        pitch_btn[i].disabled = true;
        displayAddPlayer();
     });
  });
}
function drawCard(cvn, obj) {
   let width = 1184;
   let height = 1280;
   cvn.width = width;
   cvn.height = height;
   let ctx = cvn.getContext('2d');
   var card_img = new Image();
   card_img.src = "assests/images/cards/"+obj.type+".png";
   card_img.onload = ()=> {
      ctx.drawImage(card_img, 0, 0, width, height);
      
      ctx.beginPath();
      ctx.arc(990,195,150,2*Math.PI,0);
      ctx.fillStyle = circleColor(86);
      ctx.fill();
      
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.font = "500 150px Renogare";
      ctx.fillText(obj.rate,990,250);
      
      ctx.fillStyle = "dodgerblue";
      ctx.fillRect(907,447,170,110);
      
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.font = "500 90px Renogare";
      ctx.fillText(obj.position,990,534);
      
      var player_img = new Image();
      player_img.src = "assests/images/players/"+obj.url+".png";
      player_img.onload = ()=> {
         let rat = ratio(player_img.width, player_img.height);
         ctx.drawImage(player_img, 70, 220, rat[0]/rat[1]*800, 800);
      }
   }
}
function displayAddPlayer() {
   let elem = $('#add-player-wrapper');
   elem.css('display', 'flex');
   setTimeout(()=>{
      elem.css({
         'opacity': 1,
         'transform': 'scale(1)'
      });
   }, 100);
}
function ratio(nume, deno) {
   let temp = nume > deno ? deno : nume;
   for (; temp > 1; temp--)
      if (nume % temp == 0 && deno % temp == 0) {
         nume /= temp;
         deno /= temp;
      }
   return [nume, deno];
}
function circleColor(n) {
   if (n <= 59)
      return "#d0504b";
   else if (n >= 60 && n <= 69)
      return "#de8735";
   else if (n >= 70 && n <= 79)
      return "#e4C059";
   else if (n >= 80 && n <= 89)
      return "#63d041";
   else if (n >= 90)
      return "#5797d1";
}
function searchResult(ind, obj, elem) {
   let div = document.createElement('div');
   div.id = ind;
   div.className = "result";
   let cvn = document.createElement('canvas');
   div.appendChild(cvn);
   let tbl_holder = document.createElement('div');
   tbl_holder.className = "table-holder";
   let table = document.createElement('table'), 
      tr = document.createElement('tr');
   let gk = [
      "SPE", "ACC", "CON", "STR",
      "TAC", "PAS", "GKH", "GKR"
   ],
   not_gk = [
      "SPE", "ACC", "STA", "CON",
      "STR", "TAC", "PAS", "SHO"
   ];
   for (let i=0; i<8; i++) {
      var td = document.createElement('td');
      var temp;
      if (obj.position == "GK")
         temp = gk;
      else
         temp = not_gk;
      td.innerText = temp[i];
      tr.appendChild(td);
   }
   table.appendChild(tr);
   tr = document.createElement('tr');
   for (let i=0; i<8; i++) {
      var td = document.createElement('td');
      td.innerText = obj.stats[i];
      tr.appendChild(td);
   }
   table.appendChild(tr);
   tbl_holder.appendChild(table);
   div.appendChild(tbl_holder);
   div.addEventListener('click', ()=>{
      hideAddPlayer();
      let btn = $('#pitch button');
      for (let i=0; i<btn.length; i++)
         if (btn[i].disabled) {
            btn[i].disabled = false;
            let img = new Image();
            img.style.width = "60px";
            img.style.height = (40/37*60)+"px";
            img.src = $('#'+ind+' canvas')[0].toDataURL();
            img.addEventListener('load', ()=>{
               btn[i].classList.add('bgnone');
               btn[i].value = DATA[div.id].rate;
               btn[i].innerHTML = "";
               btn[i].appendChild(img);
               updateRatings();
            });
         }
   });
   elem.append(div);
   let ctx = $('#'+ind+' canvas')[0];
   drawCard(ctx, obj);
}
function hideAddPlayer() {
   let elem = $('#add-player-wrapper');
   elem.css('opacity', 0);
   setTimeout(()=>{
      elem.css({'display': 'none',
      'transform': 'scale(0)'});
   }, 300);
}
function updateRatings() {
   let btn = $('#pitch button'),
       team_rating = 0, nan = 0,
       ovr = [[0,0],[0,0],[0,0]];
   $.each(btn, (i)=> {
      if (!btn[i].value.length == 0) {
         team_rating += Number(btn[i].value);
         nan++;
         if (btn[i].name == "attack") {
            ovr[0][0] += Number(btn[i].value);
            ovr[0][1]++;
         }
         else if (btn[i].name == "midfield") {
            ovr[1][0] += Number(btn[i].value);
            ovr[1][1]++;
         }
         else {
            ovr[2][0] += Number(btn[i].value);
            ovr[2][1]++;
         }
      }
   });
   $('#team-rating').html(parseInt(team_rating/nan));
   let atk = Math.round(ovr[0][0]/ovr[0][1]),
   mid = Math.round(ovr[1][0]/ovr[1][1]),
   def = Math.round(ovr[2][0]/ovr[2][1]);
   $('#atk').html(atk);
   $('#mid').html(mid);
   $('#def').html(def);
   $('#attack').css('width', atk+'%');
   $('#midfield').css('width', mid+'%');
   $('#defense').css('width', def+'%');
}