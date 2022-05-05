const positionSel = document.getElementsByClassName('position')[0],
countrySel = document.getElementsByClassName('country')[0],
footSel = document.getElementsByClassName('foot')[0],
bootCol = document.getElementsByClassName('boot-col')[0],
posValue = ['WF', 'CF', 'LM', 'AM', 'CM', 'DM', 'RM', 'LB', 'CB', 'RB', 'GK'],
colName = ['Random', 'Black', 'White', 'Gold', 'Red', 'Blue', 'Pink', 'Yellow', 'Orange', 'Violet', 'Brown', 'Green', 'Grey'],
footType = ['Left', 'Right', 'Both'],
countryName = [];

/* Select options for position */
for (let i = 0; i < posValue.length; i++)
{
			var opt = document.createElement('option');
			opt.value = posValue[i];
			opt.innerHTML = posValue[i];
			if(posValue[i].toLowerCase() == 'cf')
						opt.selected = true;
			positionSel.appendChild(opt);
}
/* Select options for foot type */
for (let i = 0; i < footType.length; i++)
{
			var opt = document.createElement('option');
			opt.value = footType[i];
			opt.innerHTML = footType[i];
			if(footType[i].toLowerCase() == 'both')
						opt.selected = true;
			footSel.appendChild(opt);
}
/* Select options for color names */
for (let i = 0; i < colName.length; i++)
{
			var opt = document.createElement('option');
			opt.value = colName[i].toLowerCase();
			opt.innerHTML = colName[i];
			if(colName[i].toLowerCase() == 'red')
						opt.selected = true;
			bootCol.appendChild(opt);
}
