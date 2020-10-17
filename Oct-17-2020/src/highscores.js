function createClass(elementName, className) {
    let tag = document.createElement(elementName);
    if (className) {
        tag.classList.add(className);
    }
    return tag;
}

const highScoresList = document.querySelector("#highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");