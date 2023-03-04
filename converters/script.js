$(document).ready(()=> {
  $('main').first().css('margin-top', 
    (window.innerHeight - 
    $('main').first().height()) * .5 + 'px'
  );
  
  setOption(options, $('#quantity'));
  setUnits();
  $('#quantity').on('change', ()=> {
    setUnits();
    getValues($('input[type=number]').first(), $('input[type=number]:eq(1)'), 0);
  });
  $('input[type=number]').first().on('input', ()=> {
    getValues($('input[type=number]').first(), $('input[type=number]:eq(1)'), 0);
  });
  $('input[type=number]:eq(1)').on('input', ()=> {
    getValues($('input[type=number]').first(), $('input[type=number]:eq(1)'), 1);
  });
});

function setOption(arr, elem) {
  elem.html('');
  $.each(arr, (i)=> {
    elem.append(
      `<option value="${i}">
        ${arr[i].name}
      </option>`
    );
  });
}
function setUnits() {
  $('.unit').each((i)=> {
    setOption(options[$('#quantity').val()].units, $(`.unit:eq(${i})`));
  });
  $('.unit:eq(1)').val('1').change();
}
function getValues(a, b, ind) {
  if (ind == 0)
    b.val(
      options[$('#quantity').val()].units[$('.unit').first().val()].value(Number(a.val()))[
        $('.unit:eq(1)').val()
      ]
    );
  else
    a.val(
      options[$('#quantity').val()].units[$('.unit:eq(1)').val()].value(Number(b.val()))[
        $('.unit').first().val()
      ]
    );
}