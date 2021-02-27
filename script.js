document.addEventListener("DOMContentLoaded", () => {

  let textRed = 0
  let textGreen = 0
  let textBlue = 0

  let bgRed = 0
  let bgGreen = 0
  let bgBlue = 0


  $("#red").slider({
    animate: "slow",
    range: "min",
    value: 0,
    max: 255,
    min: 0,
  });

  $("#green").slider({
    animate: "slow",
    range: "min",
    value: 0,
    max: 255,
    min: 0,
  });


  $("#blue").slider({
    animate: "slow",
    range: "min",
    value: 0,
    max: 255,
    min: 0,
  });



  $("#red").slider({
    slide: () => {
      if ($("#color").hasClass("btn-active")) {
        textRed = $("#red").slider("value");
        $('#userText').css('color', `rgb(${textRed}, ${textGreen}, ${textBlue})`);
      }
      if ($("#bg").hasClass("btn-active")) {
        bgRed = $("#red").slider("value");
        $('#userText').css('background', `rgb(${bgRed}, ${bgGreen}, ${bgBlue})`);
      }
    }
  });

  $("#green").slider({
    slide: () => {
      if ($("#color").hasClass("btn-active")) {
        textGreen = $("#green").slider("value");
        $('#userText').css('color', `rgb(${textRed}, ${textGreen}, ${textBlue})`);
      }
      if ($("#bg").hasClass("btn-active")) {
        bgGreen = $("#green").slider("value");
        $('#userText').css('background', `rgb(${bgRed}, ${bgGreen}, ${bgBlue})`);
      }
    }
  });

  $("#blue").slider({
    slide: () => {
      if ($("#color").hasClass("btn-active")) {
        textBlue = $("#blue").slider("value");
        $('#userText').css('color', `rgb(${textRed}, ${textGreen}, ${textBlue})`);
      }
      if ($("#bg").hasClass("btn-active")) {
        bgBlue = $("#blue").slider("value");
        $('#userText').css('background', `rgb(${bgRed}, ${bgGreen}, ${bgBlue})`);
      }
    }
  });


  $("#color").on('click', function () {
    $("#bg").removeClass('btn-active');
    $(this).addClass('btn-active');
    $("#red").slider("value", textRed);
    $("#green").slider("value", textGreen);
    $("#blue").slider("value", textBlue);
  })

  $("#bg").on('click', function () {
    $("#color").removeClass('btn-active');
    $(this).addClass('btn-active');
    $("#red").slider("value", bgRed);
    $("#green").slider("value", bgGreen);
    $("#blue").slider("value", bgBlue);
  })
})
