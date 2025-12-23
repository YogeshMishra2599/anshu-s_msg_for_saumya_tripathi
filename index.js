let cover = document.getElementById("cover");
let clickHere = document.getElementsByClassName("clickHere")[0];
let letterSheet = document.getElementById("letterSheet");
let letter = document.getElementById("letter");
let shadowLetter = document.getElementById("shadowLetter");
let hintText = document.getElementById("hintText");

let isOpen = false;

function openLetter() {

  /* ================= OPEN ================= */
  if (!isOpen) {
    isOpen = true;

    cover.classList.add("open");
    hintText.classList.add("hide");

    setTimeout(() => {
      letterSheet.style.zIndex = "2";
      clickHere.style.display = "none";
      letter.style.animationIterationCount = "1";
      shadowLetter.style.animationIterationCount = "1";
      letterSheet.classList.remove("zoomOut");
      letterSheet.classList.add("zoomIn");
    }, 1500);

    setTimeout(() => {
      hintText.textContent = "😄😄";
      hintText.classList.remove("hide");
    }, 2300);
  }

  /* ================= CLOSE ================= */
  else {
    isOpen = false;

    // Start reverse animation
    letterSheet.classList.remove("zoomIn");
    letterSheet.classList.add("zoomOut");

    hintText.classList.add("hide");

    // After letter fully goes inside → close flap
    setTimeout(() => {
      cover.classList.remove("open");

      hintText.textContent = "Sommo, letter k upar click karo...";
      hintText.classList.remove("hide");

      letterSheet.style.zIndex = "1";
    }, 1600); // slightly longer than zoomOut
  }
}
