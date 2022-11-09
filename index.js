const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("big-black-box"),
  points: document.querySelectorAll(".point"),
};

function backgroundAndText(back, text) {
  back.style.backgroundColor = "red"; 
  text.textContent = "this is now a real big red box, now go look at console"; 
  text.style.fontSize = "40px";

DOMSelectors.button.addEventListener("click", function () {
  backgroundAndText(DOMSelectors.box, DOMSelectors.text);
});


function changeLi() {
  let i = 0;
  DOMSelectors.points.forEach((el) => {
    el.addEventListener("click", function () {
      el.innerHTML = `${i}`; 
      i++;

      console.log(i);
    });
  });
}

changeLi();