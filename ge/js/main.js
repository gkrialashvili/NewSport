let Uri = "https://api.crocobet.com/rest/promotions/roulette-race-210521";
let UserUri =
  "https://api.crocobet.com/rest/promotions/roulette-race-210521/details";

var tableEgt = [
  { position: "სულ:", prize: "25 000₾" },
  { position: "61 - 80", prize: "50₾" },
  { position: "41 - 60", prize: "100₾" },
  { position: "36 - 40", prize: "150₾" },
  { position: "31 - 35", prize: "200₾" },
  { position: "26 - 30", prize: "250₾" },
  { position: "21 - 25", prize: "300₾" },
  { position: "16 - 20", prize: "350₾" },
  { position: "11 - 15", prize: "400₾" },
  { position: 10, prize: "500₾" },
  { position: 9, prize: "600₾" },
  { position: 8, prize: "700₾" },
  { position: 7, prize: "800₾" },
  { position: 6, prize: "1000₾" },
  { position: 5, prize: "1 200₾" },
  { position: 4, prize: "1 500₾" },
  { position: 3, prize: "2 000₾" },
  { position: 2, prize: "2 500₾" },
  { position: 1, prize: "3 000₾" },
];

createTableValue = () => {
  $.each(tableEgt, function (i) {
    let egtValue = tableEgt[i];
    $("#table-header-egt").after(
      "<tr><td>" +
      egtValue.position +
      "</td><td>" +
      egtValue.prize +
      "</td></tr>"
    );
  });
};

function getLinkId(id, url) {
  if (!url) {
    url = window.location.href;
  }
  const ids = id.replace(/[\[\]]/g, "\\$&");

  const regex = new RegExp(`[?&]${ids}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);

  if (!results) {
    return null;
  }
  if (!results[2]) {
    return "";
  }
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function getLinkToken(tk, url) {
  if (!url) {
    url = window.location.href;
  }
  const ids = tk.replace(/[\[\]]/g, "\\$&");

  const regex = new RegExp(`[?&]${ids}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);

  if (!results) {
    return null;
  }
  if (!results[2]) {
    return "";
  }
  const dec = window.atob(decodeURIComponent(results[2].replace(/\+/g, " ")));
  return dec;
}

const encodedTk = window.btoa(getLinkToken("tk"));
const tk = getLinkToken("tk");
const id = getLinkId("id");

let linklang1 = $(".lang.w-nav-link:nth-of-type(1)").attr("href");
$(".lang.w-nav-link:nth-of-type(1)").attr(
  "href",
  linklang1 + "?id=" + id + "&tk=" + encodedTk
);

let linklang2 = $(".lang.w-nav-link:nth-of-type(2)").attr("href");
$(".lang.w-nav-link:nth-of-type(2)").attr(
  "href",
  linklang2 + "?id=" + id + "&tk=" + encodedTk
);

let linklang3 = $(".lang.w-nav-link:nth-of-type(3)").attr("href");
$(".lang.w-nav-link:nth-of-type(3)").attr(
  "href",
  linklang3 + "?id=" + id + "&tk=" + encodedTk
);

const terms = $(".accordion_item_trigger-t");
$(document).ready(function () {
  $(terms).append("<img class='arow' src='images/wheel/arow.png' alt=''>");
  let arrow = $(".arow");
  arrow.first().css("margin-right", "27px");
  arrow.last().css("margin-right", "27px");
});

$(terms).click(function () {
  $(this).children(".arow").toggleClass("rotateThatBitch");
});

$("#playButton").click(function (e) {
  video.play();
  $("#playButton").fadeOut(250);
});

let counter = 0;
$("#video-rgol").click(function (e) {
  video.pause();
  $("#playButton").fadeIn(250);
  counter++;
});

const todaysDate = new Date();
const currentDay = todaysDate.getDate();
let currentWeek;
let raceDate = "2021-05-21";

getCurrentWeek = () => {
  let startDate = new Date("05/18/2021 00:00:00");
  let diff = Math.abs(todaysDate - startDate);
  currentWeek = Math.floor(diff / 7 / 86400000);
};

let video = document.getElementById("video-rgol");
$(document).ready(function () {
  $(window).on('scroll', function () {
    if (checkVisible($($(".leptop__content")))) {
      btn1();
      $(window).off('scroll');
    } else {
      // do nothing
    }
  });

  function checkVisible(elm, eval) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(), // Viewport Height
      scrolltop = $(window).scrollTop(), // Scroll Top
      y = $(elm).offset().top,
      elementHeight = $(elm).height();

    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
  }
  $(".main-block__btn__wrapper").click(function () {
    $(this).addClass("active")
    $(this).find(".main-block__btn").addClass("active")
    $(this).siblings().removeClass("active")
    $(this).siblings().find(".main-block__btn").removeClass("active")
    $(".leptop__content").hide()
    resetBtn();
    let id = $(this).attr('id');
    switch (id) {
      case "btn1":
        btn1();
        break;
      case "btn2":
        btn2();
        break;
      case "btn3":
        btn3();
        break;
      case "btn4":
        btn4();
        break;
      case "btn5":
        btn5();
        break;
      case "btn6":
        btn6();
        break;
    }
  })

  for (let i = 0; i < $(".main-block__btn__wrapper").length; i++) {
    $(".main-block__btn__wrapper").eq(i).on("click", function () {
      $(".leptop__content").eq(i).show();
    })
  }
  function btn1() {
    $(".pop-up1").animate({
      width: "120%",
      opacity: 1,
    }, 1000)
    setTimeout(function () { $(".content__1 .dot__outer").animate({ opacity: 1 }) }, 1300)
    setTimeout(function () { $(".content__1 .info__right").animate({ opacity: 1 }) }, 1800)

  }

  function btn2() {
    $(".pop-up2").animate({
      width: "120%",
      opacity: 1,
    }, 1000)
    setTimeout(function () { $(".content__2 .dot__outer").animate({ opacity: 1 }) }, 1300)
    setTimeout(function () { $(".content__2 .info__left").animate({ opacity: 1 }) }, 1800)

  }

  function btn3() {
    $(".pop-up3").animate({
      width: "120%",
      opacity: 1,
    }, 1000)
    setTimeout(function () { $(".st3").animate({ opacity: 1 }, 1000) }, 1000)
    setTimeout(function () { $(".st0").animate({ opacity: 1 }, 1000) }, 1200)
    setTimeout(function () { $(".st5").animate({ opacity: 1 }, 1000) }, 1400)
    setTimeout(function () { $(".st2").animate({ opacity: 1 }, 1000) }, 1600)
    setTimeout(function () { $(".st4").animate({ opacity: 1 }, 1000) }, 1800)
    setTimeout(function () { $(".st1").animate({ opacity: 1 }, 1000) }, 2000)
    setTimeout(function () {
      $(".st6").animate({ opacity: 1, deg: 55 }, {
        duration: 1400,
        step: function (now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)' });
        }
      })
    }, 1800)
    setTimeout(function () { $(".pop-up3-text").animate({ width: "100%", opacity: 1, }, 1500) }, 1000)
  }

  function btn4() {
    $(".content__4__popup").animate({
      width: "80%",
      opacity: 1,
    }, 1000)
    setTimeout(function () { $(".content__4__popup .dot__outer").animate({ opacity: 1, }, 1500) }, 1200)
    setTimeout(function () { $(".content__4__popup .info__right").animate({ opacity: 1, }, 1500) }, 1600)
  }

  function btn5() {
    $(".content__5__title").animate({
      width: "120%",
      opacity: 1,
    }, 1300)
    setTimeout(function () { $(".content__5__box").animate({ opacity: 1, }, 1500) }, 1000)
    setTimeout(function () { $(".content__5 .dot__outer").animate({ opacity: 1, }, 1500) }, 1200)
    setTimeout(function () { $(".content__5 .info__left").animate({ opacity: 1, }, 1500) }, 1600)
  }
  function btn6() {
    $(".pop-up6-bg").animate({
      opacity: 1,
    }, 1300)
    linearFade(".pop-up__", ".dot__outer");
    linearFade(".pop-up__", ".info__left");
  }

  function linearFade(parentClass, childClass, fadeStart = 1000, max = 2, animStart = 1000, animGap = 4000, wait = 2500) {
    var fadeEnd = 1000;
    var wait = wait;
    for (let index = 1; index <= max; index++) {
      let block = parentClass + index + " " + childClass;
      let wait = 2500;
      window.timerFadein = setTimeout(function () {
        animateFade(block, fadeStart, false)
      }, animStart);
      window.timerFadeout = setTimeout(function () {
        animateFade(block, fadeEnd)
      }, animStart + wait);
      animStart += animGap;
    }
  }

  function resetTimers() {
    clearTimeout(window.timerFadeout);
    clearTimeout(window.timerFadein);
    window.timerFadeout = null;
    window.timerFadein = null;
  }

  function animateFade(classname, time, out = true) {
    if (out) {
      $(classname).animate({ opacity: 0, }, time)
    } else {
      $(classname).animate({ opacity: 1, }, time)
    }
  }

  function resetBtn() {
    $(".pop-up1").css({ "width": "100%", "opacity": "0" });
    $(".dot__outer").animate({ opacity: 0 })
    $(".info__right").animate({ opacity: 0 })
    $(".info__left").animate({ opacity: 0 })
    $(".pop-up2").css({ "width": "100%", "opacity": "0" });
    $(".pop-up3").css({ "width": "100%", "opacity": "0" });
    $(".pop-up3-text").css({ "width": "100%", "opacity": "0" });
    $(".st6").css({ "opacity": "0", "deg": "270" })
    $(".st3").css({ "opacity": "0" })
    $(".st0").css({ "opacity": "0" })
    $(".st5").css({ "opacity": "0" })
    $(".st2").css({ "opacity": "0" })
    $(".st4").css({ "opacity": "0" })
    $(".st1").css({ "opacity": "0" })
    $(".content__4__popup").css({ "opacity": "0" })
    $(".content__5__title").animate({
      width: "100%",
      opacity: 0,
    })
    $(".content__5__box").css({ "opacity": "0" })
    $(".dot__outer").css({ "opacity": "0" })
    $(".info__left").css({ "opacity": "0" })
    $(".pop-up6-bg").css({ "opacity": "0" })
    $(".pop-up__1 .dot__outer").css({ "opacity": "0" })
    $(".pop-up__1 .info__left").css({ "opacity": "0" })
    $(".pop-up__2 .dot__outer").css({ "opacity": "0" })
    $(".pop-up__2 .info__left").css({ "opacity": "0" })

    $(".pop-up__1 .dot__outer").clearQueue()
    $(".pop-up__1 .info__left").clearQueue()
    $(".pop-up__2 .dot__outer").clearQueue()
    $(".pop-up__2 .info__left").clearQueue()

    $(".pop-up__1 .dot__outer").stop()
    $(".pop-up__1 .info__left").stop()
    $(".pop-up__2 .dot__outer").stop()
    $(".pop-up__2 .info__left").stop()

    $(".pop-up__1 .dot__outer").finish()
    $(".pop-up__1 .info__left").finish()
    $(".pop-up__2 .dot__outer").finish()
    $(".pop-up__2 .info__left").finish()

    resetTimers()
  }
});

