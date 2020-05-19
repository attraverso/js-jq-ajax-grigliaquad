$(document).ready(function() {/*DNT*/

/**HANDLEBARS VERSION**/
var gridbox = Handlebars.compile('<div class="box"><p></p></div>');
for (var i = 0; i < 36; i++) {
  $('#game').append(gridbox);
}

/*BASIC VERSION*/
// for (var i = 0; i < 36; i++) {
//   $('#game').append('<div class="box"><p></p></div>');
// }
//

$('.box').click(function() {
  /*store $this in variable to use inside ajax*/
  currentBox = $(this);
  /*if the box hasn't already been filled*/
  if (!currentBox.hasClass('clicked')) {
    /*add class clicked*/
    currentBox.addClass('clicked');
    /*get ajax to call randomNr API*/
    $.ajax({
      'url': 'https://flynn.boolean.careers/exercises/api/random/int',
      'method': 'get',
      'success': function(data) {
        /*grab rendomNr key value*/
        var randomNr = data.response;
        /*print result in html*/
        currentBox.children('p').append(randomNr);
        /*based on the number, paint the box*/
        if (randomNr <= 5) {
          currentBox.addClass('yellow');
        } else {
          currentBox.addClass('green');
        }
      },
      'error': function() {
        alert('Apparently a rabbit ate your number...');
      }
    })
  }
})

})/*DNT - closing doc.ready*/
