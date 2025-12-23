let cover = document.getElementById("cover");
let clickHere = document.getElementsByClassName("clickHere")[0];
let letterSheet = document.getElementById("letterSheet");
let letter = document.getElementById("letter");
let shadowLetter = document.getElementById("shadowLetter");
let hintText = document.getElementById("hintText");

function openLetter() {
  cover.classList.add("open");

  // First: fade the text away
  hintText.classList.add("hide");

  setTimeout(() => {
    letterSheet.style.zIndex = "2";
    clickHere.style.display = "none";
    letter.style.animationIterationCount = "1";
    shadowLetter.style.animationIterationCount = "1";
    letterSheet.classList.add("zoomIn");
  }, 1500);

  // AFTER the letter is fully out → show emojis
  setTimeout(() => {
    hintText.textContent = "😄😄";
    hintText.classList.remove("hide");
  }, 2300); // slightly after zoom starts (tweak if needed)
}
