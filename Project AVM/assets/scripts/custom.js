/*hidden of representation */
/*jQuery('document').ready(function(){
 jQuery("#representation").hide();
 jQuery("ul").hide();												/*alert("Check if representation and list has hidden");
});
*/

// jQuery("document").ready(function () {
//   jQuery("#logo_small71").hide();
//   jQuery("#logo_small72").hide();
//   jQuery("ul").hide(); /*alert("Check if logo_small71 and list has hidden");*/
// });

// jQuery(document).ready(function () {
//   jQuery("#project").click(function () {
//     jQuery(
//       "#logo_small71"
//     ).toggle(); /*alert("it is going/not going project toggle function");*/
//     jQuery("#logo_small72").toggle();
//     jQuery("ul").toggle();
//     jQuery("#contacts").toggle();
//   });
// });

// /* representation opening function

//  jQuery("#presentation").on('click',function(){
//                                    *alert("it is going/not going presentation toggle function");
//    $("#representation").toggle();
//  });

//  */

// /*jQuery(document).ready(function(){
//   jQuery("#presentation").on('click',function(){
//     jQuery("#representation").appendTo("#presentation");
//   });
//                                    alert("representation opening function is finished");
//  })
//  */

// jQuery(document).ready(function () {
//   jQuery("#gotointroduceproject").click(function () {
//     alert("it is going/not going gotointroduceproject toggle function");
//     $(document.location.assign(index_form.html)).toggle();
//   });
// });

// jQuery(document).ready(function () {
//   $(".phone").mask("+7 (999) 999-9999");
// });

//naujas kodas


$(document).ready(function () {



  $('#form').submit(function (event) {
    event.preventDefault();

    var action = $('input[name=actions]:checked', '#form').val();
    var building = $('#you_want option:selected').val();
    var firstName = $('#first_name').val();
    var secondName = $('#second_name').val();
    var phone = $('#phone_number').val();
    var email = $('#email_name').val();
    var message = $('#msg').val();

    var object = {
      one: action,
      two: building,
      three: firstName,
      four: secondName,
      five: phone,
      six: email,
      seven: message,
    }
    $.ajax({
      type: "post",
      url: "send.php",
      data: object,
      success: function (res) {
        console.log(res);
      },
      error: function () {
        console.log('something is wrong');
      }
    });
  });

});