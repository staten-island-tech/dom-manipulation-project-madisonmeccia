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
  }

  changeLi();
  DOMSelectors.button.addEventListener("click", function () {
  let input = document.querySelectorAll(`#input`);
  let inputs = Array.from(input);
  const recipe = {};
  recipe.name = inputs[0].value;
  recipe.ingredients = inputs[1].value;
  recipe.instructions = inputs[2].value;
  DOMSelectors.display.insertAdjacentHTML("beforeend", `<p> Recipe For ${recipe.name}</p>`);
  DOMSelectors.display.insertAdjacentHTML("beforeend", `<p> Ingredients:
  ${recipe.ingredients}</p>`);
  DOMSelectors.display.insertAdjacentHTML("beforeend", `<p> Instructions:
  ${recipe.instructions}</p>`);
  console.log(inputs)
  inputs.forEach((el)=>{
    el.value="";
  })
 
  /* inputs.forEach((element) => {
    DOMSelectors.display.insertAdjacentHTML("beforeend", `<p> ${element.value} </p>`);
   
  }) */
  /* DOMSelectors.allInputsArray.forEach((input) => {
    console.log(input)
      DOMSelectors.box.insertAdjacentHTML("beforeend", `<p> ${input}</p>`);
      DOMSelectors.input.value = "";
  });   */
}); // when "enter" button is clicked, name of food will be printed at the bottom
 
DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.imageURL.value;
  DOMSelectors.box.insertAdjacentHTML("beforeend", `<img src="${input}"></img>`);
  DOMSelectors.imageURL.value = "";
}); // when "enter" button is clicked, image of food will be shown at the bottom
 
  DOMSelectors.button.insertAdjacentHTML(
  "afterend",
  `<h2>full entry here: <h2>`
); // heading separates results from entries
 
DOMSelectors.clearButton.addEventListener("click", function() {
  location.reload();
  return false;
}); // when "clear" button is clicked, page is refreshed/ new objects are cleared

}
