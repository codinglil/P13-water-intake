const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const remainder = document.getElementById("remainder");
const percentage = document.getElementById("percentage");
let congrats = document.querySelector("h3");

updateBigCup();

smallCups.forEach((cup, index) => {
  cup.addEventListener("click", () => highlightCups(index));
});

function highlightCups(index) {
  if (
    smallCups[index].classList.contains("full") &&
    !smallCups[index].nextElementSibling.classList.contains("full")
  ) {
    index--;
  }

  smallCups.forEach((cup, index2) => {
    if (index2 <= index) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  updateBigCup();
}
function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remainder.style.visibility = "hidden";
    remainder.style.height = 0;
    congrats.innerText = `Congratulations, you've reached your goal!`;
  } else {
    remainder.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
