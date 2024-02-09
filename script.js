$("button#1").on("click", function () {
  $(".obj")
    .animate(
      {
        left: 500,
        top: 0,
      },
      1000
    )
    .animate(
      {
        left: 500,
        top: 300,
      },
      1000
    )
    .animate(
      {
        left: 0,
        top: 300,
      },
      1000
    )
    .animate(
      {
        left: 0,
        top: 0,
      },
      1000,
      function () {
        console.log("Animation is complete");
      }
    );
});

$("button#2").on("click", function () {
  $(".obj")
    .animate(
      {
        left: 300,
        top: 0,
      },
      1000
    )
    .animate(
      {
        left: 150,
        top: -300,
      },
      1000
    )
    .animate(
      {
        left: 0,
        top: 0,
      },
      1000,
      function () {
        console.log("Animation is complete");
      }
    );
});

$("button#3").on("click", function () {
  if (_3rdTaskStatus === false) {
    $(".obj").css("opacity", "0%");
    $(".obj").animate(
      {
        width: 400,
        height: 400,
        opacity: 100,
      },
      1000,
      function () {
        console.log("Animation is complete");
      }
    );
    _3rdTaskStatus = true;
  } else if (_3rdTaskStatus === true) {
    $(".obj").animate(
      {
        width: 100,
        height: 100,
      },
      1000,
      function () {
        console.log("Animation is complete");
      }
    );
    _3rdTaskStatus = false;
  }
});
var _3rdTaskStatus = false;
