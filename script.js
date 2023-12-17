const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Aaaaa, I love you too kanayaaaaa";
  gif.src =
    "https://media.tenor.com/cWrVaANWYxEAAAAi/peach-goma-peach-and-goma.gif";
    yesBtn.style.opacity = 0.3;
    yesBtn.style.cursor = "not-allowed";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  noBtn.style.opacity = 0.0;
    noBtn.style.cursor = "not-allowed";
});
