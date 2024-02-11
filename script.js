var _3rdTaskStatus = false;

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
      1000
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
      1000
    );
});

$("button#3").on("click", function () {
  if (_3rdTaskStatus === false) {
    $(".obj")
      .animate(
        {
          opacity: 0,
        },
        1
      )
      .animate(
        {
          width: 400,
          height: 400,
          opacity: 1,
        },
        1000
      )
      .fadeIn();
    _3rdTaskStatus = true;
  } else if (_3rdTaskStatus === true) {
    $(".obj").animate(
      {
        width: 100,
        height: 100,
      },
      1000
    );
    _3rdTaskStatus = false;
  }
});
