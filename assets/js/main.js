document.addEventListener("DOMContentLoaded", function () {
  var type = document.querySelector(".calculation_type > select");
  var field_1 = document.querySelector(".calculator_field_1");
  var field_2 = document.querySelector(".calculator_field_2");

  type.addEventListener("click", function (e) {
    if (e.target.value == 1) {
      field_1.style.display = "flex";
      field_2.style.display = "none";
    } else {
      field_1.style.display = "none";
      field_2.style.display = "flex";
    }
  });

  // Clear Action
  document
    .querySelector(".calculator_action > button:nth-child(1)")
    .addEventListener("click", function () {
      document
        .querySelectorAll(".calculator_field_1 input")
        .forEach((input) => {
          input.value = "";
        });
      document
        .querySelectorAll(".calculator_field_2 input")
        .forEach((input) => {
          input.value = "";
        });
      document.querySelector(
        ".calculator_answer > span:nth-child(2)"
      ).innerHTML = "";
      document.querySelector(".inner_box").style.display = "none";
    });

  // Run Action
  document
    .querySelector(".calculator_action > button:nth-child(2)")
    .addEventListener("click", function () {
      if (type.value == 1) {
        var inputs = document.querySelectorAll(".calculator_field_1 input");
        var res = Number(inputs[0].value) * Number(inputs[1].value);
        document.querySelector(
          ".calculator_answer > span:nth-child(2)"
        ).innerHTML = res / 100;
        document.querySelector(".inner_box").style.display = "block";
        document.querySelector(".inner_box").style.width =
          "" + 300 * (inputs[0].value / 100) + "px";
      } else {
        var inputs = document.querySelectorAll(".calculator_field_2 input");
        var res = Number(inputs[0].value) / Number(inputs[1].value);
        document.querySelector(
          ".calculator_answer > span:nth-child(2)"
        ).innerHTML = res * 100 + "%";
        document.querySelector(".inner_box").style.display = "block";
        document.querySelector(".inner_box").style.width =
          "" + 300 * res + "px";
      }
    });
});
