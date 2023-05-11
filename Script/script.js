const target = document.getElementById("mySidebar");
function openNav() {
  target.style.width = "53%";
  document.body.style.overflow = "hidden";
}

function closeNav() {
  target.style.width = "0";
  document.body.style.overflow = "auto";
}

$(document).ready(function () {
  $(".carousel").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          centerMode: true,
          centerPadding: "40px",

          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          centerMode: true,
          centerPadding: "40px",

          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
