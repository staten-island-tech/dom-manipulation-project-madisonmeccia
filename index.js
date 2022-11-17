const DOMSelectors = {
  formid: document.getElementById("form"),
  text: document.querySelector("#text"),
  box: document.getElementById("big-black-box"),
  points: document.querySelectorAll(".point"),
};

function backgroundAndText(back, text) {
  back.style.backgroundColor = "red";
  text.textContent = "this is now a real big red box, now go look at console";
  text.style.fontSize = "40px";

  DOMSelectors.formid.addEventListener("submit", function (backgroundAndText) {
    backgroundAndText.preventDefault();
    backgroundAndText(DOMSelectors.backgroundColor, DOMSelectors.textContent);
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
  } }
