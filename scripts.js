// Non-functional Code

document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementById("change-theme");
  button.onclick = function() {
    changeTheme();
  };
});

function changeTheme() {
  let colors = document.querySelector(".color-change");
  colors.style.color = '#ffffff';
}
