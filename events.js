"use strict";

window.addEventListener("load", function () {
  let button_menu = document.getElementById("button_menu");
  let bar_1 = document.querySelector("#bar_1");
  let bar_2 = document.querySelector("#bar_2");
  let bar_3 = document.querySelector("#bar_3");
  let menu_check = false;
  let menu = document.querySelector("#menu");
  let link_1 = document.querySelector("#link_1");
  let link_2 = document.querySelector("#link_");
  button_menu.addEventListener("click", function () {
    if (menu_check === false) {
      menu.style.animation = "menu_expand 1s forwards";
      bar_1.style.animation = " menu_1 1s forwards";
      bar_2.style.animation = "menu_2 1s forwards";
      bar_3.style.animation = "menu_3 1s forwards";
      menu_check = true;
    } else {
      menu.style.animation = "menu_contract 1s forwards";
      bar_1.style.animation = " menu_1_return 1s forwards";
      bar_2.style.animation = "menu_2_return 1s forwards";
      bar_3.style.animation = "menu_3_return 1s forwards";
      menu_check = false;
    }
  });
});
