const fromSelected = document.getElementById("from-select");
const toSelected = document.getElementById("to-select");
const from = document.getElementById("from-input");
const to = document.getElementById("to-input");
const error = document.getElementById("error");

let fromNS = "Bináris", toNS = "Bináris";

fromSelected.addEventListener("change", function () {
   fromNS = fromSelected.options[fromSelected.selectedIndex].text;
   from.placeholder = fromNS + " szám";
});

toSelected.addEventListener("change", function () {
   toNS = toSelected.options[toSelected.selectedIndex].text;
   to.placeholder = toNS + " szám";
});

from.addEventListener("input", function () {
   error.style.display = "none";
});

let fromValue;
document.getElementById("convert-button").addEventListener("click", function () {
   switch (fromNS) {
      case fromNS = "69":
         window.location.href = "mucsi.html";
      case "Bináris":
         fromValue = from.value;
         if (/^[01]*$/.test(fromValue)) {
            switch (toNS) {
               case "Decimális": to.value = parseInt(fromValue, 2);
                  break;
               case "Hexadecimális": to.value = parseInt(fromValue, 2).toString(16).toUpperCase();
                  break;
               case "Oktális": to.value = parseInt(fromValue, 2).toString(8);
                  break;
               default: to.value = fromValue;
            }
         } else {
            error.style.display = "inherit";
            error.innerText = "Érvénytelen " + fromNS + " szám";
            to.value = "";
         }
         break;

      case "Decimális":
         fromValue = from.value;
         if (/^[0-9]*$/.test(fromValue)) {
            switch (toNS) {
               case "Bináris": to.value = Math.abs(fromValue).toString(2);
                  break;
               case "Hexadecimális": to.value = Math.abs(fromValue).toString(16).toUpperCase();
                  break;
               case "Oktális": to.value = Math.abs(fromValue).toString(8);
                  break;
               default: to.value = fromValue;
            }
         } else {
            error.style.display = "inherit";
            error.innerText = "Invalid " + fromNS + " szám";
            to.value = "";
         }
         break;

      case "Hexadecimális":
         fromValue = from.value;
         if (/^[0-9a-fA-F]*$/.test(fromValue)) {
            switch (toNS) {
               case "Bináris": to.value = parseInt(fromValue, 16).toString(2);
                  break;
               case "Decimális": to.value = parseInt(fromValue, 16);
                  break;
               case "Oktális": to.value = parseInt(fromValue, 16).toString(8);
                  break;
               default: to.value = fromValue;
            }
         } else {
            error.style.display = "inherit";
            error.innerText = "Invalid " + fromNS + " szám";
            to.value = "";
         }
         break;

      case "Oktális":
         fromValue = from.value;
         if (/^[0-7]*$/.test(fromValue)) {
            switch (toNS) {
               case "Bináris": to.value = parseInt(fromValue, 8).toString(2);
                  break;
               case "Decimális": to.value = parseInt(fromValue, 8);
                  break;
               case "Hexadecimális": to.value = parseInt(fromValue, 8).toString(16).toUpperCase();
                  break;
               default: to.value = fromValue;
            }
         } else {
            error.style.display = "inherit";
            error.innerText = "Invalid " + fromNS + " szám";
            to.value = "";
         }
         break;
   }
});
