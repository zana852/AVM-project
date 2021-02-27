$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();

    //var action = $('input[name=actions]:checked', '#form').val();
    var building = $("#you_want option:selected").val();
    var firstName = $("#first_name").val();
    var secondName = $("#second_name").val();
    var phone = $("#phone_number").val();
    var email = $("#email_name").val();
    var message = $("#msg").val();

    var object = {
      //one: action,
      one: building,
      two: firstName,
      three: secondName,
      four: phone,
      five: email,
      six: message,
    };
    $.ajax({
      type: "post",
      url: "send.php",
      data: object,
      success: function (res) {
        console.log(res);
      },
      error: function () {
        console.log("something is wrong");
      },
    });
  });
});

function openModal(id) {
  document.querySelector(id + " #myModal").style.display = "block";
}

function closeModal(id) {
  document.querySelector(id + " #myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex, "#photos");

function plusSlides(n, id) {
  showSlides((slideIndex += n), id);
}

function currentSlide(n, id) {
  showSlides((slideIndex = n), id);
}

function showSlides(n, id) {
  var i;
  var slides = document.querySelectorAll(id + " .mySlides");
  var dots = document.querySelectorAll(id + " .demo");
  var captionText = document.querySelector(id + " #caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
