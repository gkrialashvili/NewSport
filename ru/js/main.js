let Uri = "https://api.crocobet.com/rest/promotions/roulette-race-210521";
let UserUri =
  "https://api.crocobet.com/rest/promotions/roulette-race-210521/details";

var tableEgt = [
  { position: "Всего:", prize: "25 000₾" },
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

$(".selectors").click(function () {
  if ($(this).hasClass("click-me")) {
    $(this).addClass("active");
    if ($(this).is("#0")) {
      Uri = raceUnoUri;
      UserUri = raceUnoUriUser;
      raceDate = "2021-05-18";
    } else if ($(this).is("#1")) {
      Uri = raceDosUri;
      UserUri = raceDosUriUser;
      raceDate = "2021-05-21";
    }
    let rect = this.offsetLeft;
    $(".selector-container").scrollLeft(rect);
    $(".selectors").not(this).removeClass("active");
    $(".data-container > .table-rectangle").remove();
    getRaceLeaderBoard();
  } else return;
});

const raceUnoUri =
  "https://api.crocobet.com/rest/promotions/roulette-race-180521";
const raceDosUri =
  "https://api.crocobet.com/rest/promotions/roulette-race-210521";

const raceUnoUriUser =
  "https://api.crocobet.com/rest/promotions/roulette-race-180521/details";
const raceDosUriUser =
  "https://api.crocobet.com/rest/promotions/roulette-race-210521/details";

getRaceLeaderBoard = function () {
  $("#my-position").text("-");
  $("#my-point").text("0");
  $("#my-prize").text("-");
  $.ajax({
    type: "GET",
    url: Uri,
    dataType: "json",
    async: false,
    data: {
      pageSize: 80,
      date: raceDate,
    },
    success: function (response) {
      if (response.success) {
        $.each(response.items, function (i) {
          let playUser = response.items[i];
          $(".data-container").append(
            "<div class='table-rectangle'><div class='position'>" +
              playUser.place +
              "</div><div class='user pos'>" +
              playUser.loginName +
              "</div><div class='score pos'>" +
              Math.floor(playUser.points) +
              "</div><div class='prize pos'>" +
              playUser.prize +
              "</div></div>"
          );
        });
        if (tk != null) {
          $.ajax({
            type: "GET",
            url: UserUri,
            crossDomain: true,
            beforeSend: function (xhr) {
              xhr.setRequestHeader("X-ODDS-SESSION", tk);
            },
            data: {
              date: raceDate,
            },
            success: function (userResonsePlay) {
              let detailplay = userResonsePlay.items[0];
              if (detailplay.place <= 80 && detailplay.place !== undefined)
                $("#my-position").text(detailplay.place);
              else $("#my-position").text("-");
              if (detailplay.points !== undefined)
                $("#my-point").text(Math.floor(detailplay.points));
              if (detailplay.place <= 80 && detailplay.prize !== undefined)
                $("#my-prize").text(detailplay.prize);
              else $(".my-prize").text("-");
            },
            error: function () {
              console.log("user details failed");
            },
          });
        }
      }
    },
    error: function () {
      console.log("get play call failed");
    },
  });
};

activateCurrentDate = () => {
  $(".selectors").each(function () {
    if (this.id <= currentDay) {
      $(this).addClass("click-me");
      if (this.id == currentWeek) $(this).trigger("click");
    }
  });
};

const todaysDate = new Date();
const currentDay = todaysDate.getDate();
let currentWeek;
let raceDate = "2021-05-21";

getCurrentWeek = () => {
  let startDate = new Date("05/18/2021 00:00:00");
  let diff = Math.abs(todaysDate - startDate);
  currentWeek = Math.floor(diff / 7 / 86400000);
};

$(document).ready(function () {
  getCurrentWeek();
  getRaceLeaderBoard();
  createTableValue();
});
