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
$('#search-box').keypress((e)=> {
   if (e.which == 13)
      $('#search').click();
});
let search_str = "";
$('#search').click(() => {
  $('#search-bar').blur();
   let val = $('#search-bar').val().trim().toLowerCase();
   if (val != search_str) {
      $('#search-result').html('');
      if (val.length != 0) {
      DATA.forEach((value, index) => {
         if (value["First Name"].toLowerCase().startsWith(val) || 
            value["Last Name"].toLowerCase().startsWith(val) || 
            (value["First Name"].toLowerCase()+" "+value["Last Name"].toLowerCase()).startsWith(val))
            searchResult(index, value, $('#search-result'));
      });
      }
      search_str = val;
   }
});
$('#clear').click(()=> {
   $('#search-bar').val(null);
   $('#clear').attr('disable', true);
   $('#clear').css('visibility', 'hidden');
   $('#search-bar').focus();
});
$('#search-bar').on('input', ()=> {
   if ($('#search-bar').val().length == 0) {
      $('#clear').attr('disable', true);
      $('#clear').css('visibility', 'hidden');
   }
   else {
      $('#clear').attr('disable', false);
      $('#clear').css('visibility', 'visible');
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
   let card_img = new Image();
   let player_img = new Image();
   let type = obj.Rating;
   if (type < 70)
      type = "Common";
   else if (type < 80)
      type = "Rare";
   else
      type = "Legendary";
   card_img.src = "assests/images/cards/"+type+".png";
   card_img.onload = ()=> {
      ctx.drawImage(card_img, 0, 0, width, height);
      
      ctx.beginPath();
      ctx.arc(990,195,150,2*Math.PI,0);
      ctx.fillStyle = circleColor(obj.Rating);
      ctx.fill();
      
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.font = "500 150px Renogare";
      ctx.fillText(obj.Rating,990,250);
      
      switch (obj.Position) {
         case 'CF':
         case 'LW':
         case 'RW':
         case 'SS':
            ctx.fillStyle = "red";
            break;
         case 'LM':
         case 'CM':
         case 'AM':
         case 'DM':
         case 'RM':
            ctx.fillStyle = "yellow";
            break;
         case 'LB':
         case 'CB':
         case 'RB':
            ctx.fillStyle = "lawngreen";
            break;
         default:
            ctx.fillStyle = "dodgerblue";
      }
      ctx.fillRect(907,447,170,110);
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.font = "600 85px Renogare";
      ctx.fillText(obj.Position,990,534);
      
      let flag = new Image();
      flag.src = `assests/images/flags/${obj.Nationality}.png`;
      flag.onload = ()=> {
        let rat = ratio(flag.width, flag.height);
        ctx.drawImage(flag, 907, 590, 170, rat[1]/rat[0]*170);
      }
      
      let player_name = obj["Last Name"] == null ? obj["First Name"] : obj["Last Name"];
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.font = "600 130px Renogare";
      let wid = ctx.measureText(player_name.toUpperCase()).width;
      if ( wid > 950) {
        ctx.save();
        ctx.translate(550,1200);
        ctx.save();
        console.log(wid)
        if (wid > 1300)
          ctx.scale(0.65, 1);
        else if (wid > 1100)
          ctx.scale(0.75, 1);
        else
          ctx.scale(0.85, 1);
        ctx.fillText(player_name.toUpperCase(), 0, 0);
        ctx.restore();
        ctx.restore();
      }
      else
        ctx.fillText(player_name.toUpperCase(),550,1200);
      player_img.src = `https://raw.githubusercontent.com/Rupan17/DLS-Files/main/playerphotos/DLS23/${obj["Player ID"]}.png`;
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
   $('body').css('overflow-y', 'hidden');
}
function hideAddPlayer() {
   let elem = $('#add-player-wrapper');
   elem.css('opacity', 0);
   setTimeout(()=>{
      elem.css({'display': 'none',
      'transform': 'scale(0)'});
   }, 300);
   $('body').css('overflow-y', 'auto');
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
      var temp = [
         "SPE", "ACC", "STA", "CON",
         "STR", "TAC", "PAS", "SHO"
      ],
      stats = [
         "Speed", "Acceleration", "Stamina", "Control",
         "Strength", "Tackling", "Passing", "Shooting"
      ];
      if (obj.Position == "GK") {
         temp = [
            "SPE", "ACC", "CON", "STR",
            "TAC", "PAS", "GKH", "GKR"
         ];
         stats = [
            "Speed", "Acceleration", "Control", "Strength", 
            "Tackling", "Passing", "Handling (GK)", "Reactions (GK)"
         ];
      }
   for (let i=0; i<8; i++) {
      var td = document.createElement('td');
      td.innerText = temp[i];
      tr.appendChild(td);
   }
   table.appendChild(tr);
   tr = document.createElement('tr');
   for (let i=0; i<8; i++) {
      var td = document.createElement('td');
      td.innerText = obj[stats[i]];
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
               btn[i].id = (DATA[div.id]["Player ID"]  == null ? "" : DATA[div.id]["Player ID"]) + "-" + DATA[div.id].Rating;
               btn[i].value = DATA[div.id].Price == null ? "" : DATA[div.id].Price;
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
function updateRatings() {
   let btn = $('#pitch button'),
       team_rating = 0, team_value = 0, 
       nan = 0, ovr = [[0,0],[0,0],[0,0]];
   $.each(btn, (i)=> {
      if (btn[i].value != null)
         team_value += Number(btn[i].value);
      let btn_name = btn[i].name;
      if (!btn_name.length == 0) {
         let num = Number(btn[i].id.split('-')[1]);
         team_rating += num;
         nan++;
         if (btn_name == "attack") {
            ovr[0][0] += num;
            ovr[0][1]++;
         }
         else if (btn_name == "midfield") {
            ovr[1][0] += num;
            ovr[1][1]++;
         }
         else {
            ovr[2][0] += num;
            ovr[2][1]++;
         }
      }
   });
   $('#team-value').html(team_value);
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
