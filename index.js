let cover = document.getElementById("cover");
let clickHere = document.getElementsByClassName("clickHere")[0];
let letterSheet = document.getElementById("letterSheet");
let letter = document.getElementById("letter");
let shadowLetter = document.getElementById("shadowLetter");

function openLetter() {
  cover.classList.add("open");
  setTimeout(() => {
    letterSheet.style.zIndex = "2";
    clickHere.style.display = "none";
    letter.style.animationIterationCount = "1";
    shadowLetter.style.animationIterationCount = "1";
    letterSheet.classList.add("zoomIn");
  }, 1500);
}
