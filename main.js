$(document).ready(function() {/*DNT*/

for (var i = 0; i < 36; i++) {
  $('#game').append('<div class="box"><p></p></div>');
}

$('.box').click(function() {
  boxIndex = $(this).index();
  console.log('index :' + boxIndex);
  $.ajax({
    'url': 'https://flynn.boolean.careers/exercises/api/random/int',
    'method': 'get',
    'success': function(data) {
      var randomNr = data.response;
      console.log('random nr: ' + randomNr);
      $('.box').eq(boxIndex).children('p').text(randomNr);
      if (randomNr <= 5) {
        $('.box').eq(boxIndex).addClass('yellow');
      } else {
        $('.box').eq(boxIndex).addClass('green');
      }
    },
    'error': function() {
      alert('Apparently a rabbit ate your number...');
    }
  })
})

/**/


})/*DNT - closing doc.ready*/
