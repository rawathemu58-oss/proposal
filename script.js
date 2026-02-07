let noBtn = document.getElementById("no");
let yesBtn = document.getElementById("yes");
let result = document.getElementById("result");

noBtn.addEventListener("mouseover", function () {
  let x = Math.random() * (window.innerWidth - noBtn.clientWidth);
  let y = Math.random() * (window.innerHeight - noBtn.clientHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", function () {
  result.innerHTML = "Yaaayyy ❤️😍 I love youuu!";
});
setInterval(() => {
  let heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "0px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}, 300);
