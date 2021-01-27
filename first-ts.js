var btn = document.querySelector("#btn");
var ipt1 = document.getElementById("number1");
var ipt2 = document.getElementById("number2");
/**
 * desc 两数相加
 * @param {*} number1   number
 * @param {*} numer2  number
 * @returns number
 */
function sum(number1, numer2) {
  // const tempNum = number1 || 1
  if (typeof number1 === "number" && typeof numer2 === "number") {
    return number1 + numer2;
  } else {
    return +number1 + +numer2;
  }
}

var evtHandler = function () {
  var val1 = ipt1.value;
  var val2 = ipt2.value;
  console.log(sum(val1, val2));
  // 伪数组 集合
  let domShow = document.getElementsByClassName("show-sum")[0];
  console.log(domShow);
  domShow.innerHTML = sum(val1, val2);
};
btn.addEventListener("click", evtHandler);
