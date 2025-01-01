let lower = document.getElementById("lower");
let upper = document.getElementById("upper");
let dotstate = false;
let opstate = false;

function Solve(val) {
  lower.value += val;
  upper.classList.remove("animation");
  navigator.vibrate(58);
}

function point() {
  if (dotstate === true) {
    lower.value = lower.value;
  } else {
    var last = lower.value.slice(-1);
    if (last === ".") {
      lower.value = lower.value;
    } else if (
      last === "" ||
      last === "/" ||
      last === "+" ||
      last === "-" ||
      last === "*"
    ) {
      lower.value += "0.";
      upper.classList.remove("animation");
      navigator.vibrate(58);
      dotstate = true;
    } else {
      lower.value += ".";
      upper.classList.remove("animation");
      navigator.vibrate(58);
      dotstate = true;
    }
  }
}

function Result() {
  let str = lower.value;
  let len = str.length;
  for (let i = 0; i <= len + 1; i++) {
    let x = str[i];
    if (x === "*" || x === "/" || x === "+" || x === "-") {
      opstate = true;
      break;
    }
  }

  if (opstate === true) {
    var last = lower.value.slice(-1);
    if (
      last === "/" ||
      last === "+" ||
      last === "-" ||
      last === "*" ||
      last === "." ||
      last === ""
    ) {
      lower.value = lower.value;
    } else {
      navigator.vibrate(58);
      var num1 = lower.value;
      upper.textContent = num1;
      var num2 = eval(num1);
      lower.value = num2;
      upper.classList.add("animation");
    }
  }
}

function Clear() {
  navigator.vibrate(58);
  var inp = lower;
  upper.textContent = "";
  inp.value = "";
  upper.classList.remove("animation");
  dotstate = false;
}

function Back() {
  var last = lower.value.slice(-1);
  if (last === ".") {
    dotstate = false;
    navigator.vibrate(58);
    var ev = lower;
    upper.textContent = "";
    ev.value = ev.value.slice(0, -1);
    upper.classList.remove("animation");
  } else {
    navigator.vibrate(58);
    ev = lower;
    upper.textContent = "";
    ev.value = ev.value.slice(0, -1);
    upper.classList.remove("animation");
  }
}

function operator(val) {
  var last = lower.value.slice(-1);
  if (last === "." || last === "") {
    lower.value = lower.value;
  } else if (
    last === "+" ||
    last === "-" ||
    last === "*" ||
    last === "/" ||
    last === "%"
  ) {
    var ev = lower;
    ev.value = ev.value.slice(0, -1);
    lower.value += val;
    navigator.vibrate(58);
    dotstate = false;
  } else {
    lower.value += val;
    navigator.vibrate(58);
    dotstate = false;
  }
}

function handleButtonClick(buttonId) {
  switch (buttonId) {
    case "btn1":
      let btn1 = document.getElementById("btn1");
      btn1.classList.add("clicked");
      btn1.addEventListener(
        "animationend",
        function () {
          btn1.classList.remove("clicked");
        },
        {
          once: true,
        }
      );
      break;
    case "btn2":
      let btn2 = document.getElementById("btn2");
      btn2.classList.add("clicked");
      btn2.addEventListener(
        "animationend",
        function () {
          btn2.classList.remove("clicked");
        },
        {
          once: true,
        }
      );
      break;
    case "btn3":
      let btn3 = document.getElementById("btn3");
      btn3.classList.add("clicked");
      btn3.addEventListener(
        "animationend",
        function () {
          btn3.classList.remove("clicked");
        },
        {
          once: true,
        }
      );
      break;
    case "btn4":
      let btn4 = document.getElementById("btn4");
      btn4.classList.add("clicked");
      btn4.addEventListener(
        "animationend",
        function () {
          btn4.classList.remove("clicked");
        },
        {
          once: true,
        }
      );
      break;
    case "btn5":
      let btn5 = document.getElementById("btn5");
      btn5.classList.add("clicked");
      btn5.addEventListener(
        "animationend",
        function () {
          btn5.classList.remove("clicked");
        },
        {
          once: true,
        }
      );
      break;
    case "btn6":
      let btn6 = document.getElementById("btn6");
      btn6.classList.add("clicked");
      btn6.addEventListener(
        "animationend",
        function () {
          btn6.classList.remove("clicked");
        },
        {
          once: true,
        }
      );
      break;
    case "btn7":
      let btn7 = document.getElementById("btn7");
      btn7.classList.add("clicked");
      btn7.addEventListener(
        "animationend",
        function () {
          btn7.classList.remove("clicked");
        },
        {
          once: true,
        }
      );
      break;
    case "btn8":
      let btn8 = document.getElementById("btn8");
      btn8.classList.add("clicked");
      btn8.addEventListener(
        "animationend",
        function () {
          btn8.classList.remove("clicked");
        },
        {
          once: true,
        }
      );
      break;
    case "btn9":
      let btn9 = document.getElementById("btn9");
      btn9.classList.add("clicked");
      btn9.addEventListener(
        "animationend",
        function () {
          btn9.classList.remove("clicked");
        },
        {
          once: true,
        }
      );
      break;
    case "btn10":
      let btn10 = document.getElementById("btn10");
      btn10.classList.add("clicked");
      btn10.addEventListener(
        "animationend",
        function () {
          btn10.classList.remove("clicked");
        },
        {
          once: true,
        }
      );
      break;
    case "btn11":
      let btn11 = document.getElementById("btn11");
      btn11.classList.add("clicked");
      btn11.addEventListener(
        "animationend",
        function () {
          btn11.classList.remove("clicked");
        },
        {
          once: true,
        }
      );
      break;
    case "btn12":
      let btn12 = document.getElementById("btn12");
      btn12.classList.add("clicked");
      btn12.addEventListener(
        "animationend",
        function () {
          btn12.classList.remove("clicked");
        },
        {
          once: true,
        }
      );
      break;
    case "btn13":
      let btn13 = document.getElementById("btn13");
      btn13.classList.add("clicked");
      btn13.addEventListener(
        "animationend",
        function () {
          btn13.classList.remove("clicked");
        },
        {
          once: true,
        }
      );
      break;
    case "btn14":
      let btn14 = document.getElementById("btn14");
      btn14.classList.add("clicked");
      btn14.addEventListener(
        "animationend",
        function () {
          btn14.classList.remove("clicked");
        },
        {
          once: true,
        }
      );
      break;
    case "btn15":
      let btn15 = document.getElementById("btn15");
      btn15.classList.add("clicked");
      btn15.addEventListener(
        "animationend",
        function () {
          btn15.classList.remove("clicked");
        },
        {
          once: true,
        }
      );
      break;
    case "btn16":
      let btn16 = document.getElementById("btn16");
      btn16.classList.add("clicked");
      btn16.addEventListener(
        "animationend",
        function () {
          btn16.classList.remove("clicked");
        },
        {
          once: true,
        }
      );
      break;
    case "btn17":
      let btn17 = document.getElementById("btn17");
      btn17.classList.add("clicked");
      btn17.addEventListener(
        "animationend",
        function () {
          btn17.classList.remove("clicked");
        },
        {
          once: true,
        }
      );
      break;
    case "btn18":
      let btn18 = document.getElementById("btn18");
      btn18.classList.add("clicked");
      btn18.addEventListener(
        "animationend",
        function () {
          btn18.classList.remove("clicked");
        },
        {
          once: true,
        }
      );
      break;
    case "btn19":
      let btn19 = document.getElementById("btn19");
      btn19.classList.add("clicked");
      btn19.addEventListener(
        "animationend",
        function () {
          btn19.classList.remove("clicked");
        },
        {
          once: true,
        }
      );
      break;
  }
}

document.getElementById("btns").addEventListener("click", function (event) {
  if (event.target) {
    handleButtonClick(event.target.id);
  }
});
