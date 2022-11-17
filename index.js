const DOMSelectors = {
  formid: document.getElementById("btn"),
  text: document.querySelector("#imageURL"),
  box: document.getElementById("entries"),
  points: document.querySelector(".display"),
  points: document.querySelector("#clear"),
};

function changeLi() {
  changeLi();
  DOMSelectors.button.addEventListener("click", function () {
    let input = document.querySelectorAll(`#input`);
    let inputs = Array.from(input);
    const tsalbum = {};
    tsalbum.name = inputs[0].value;
    tsalbum.songtitle = inputs[1].value;
    recipe.imageurl = inputs[2].value;
    DOMSelectors.display.insertAdjacentHTML(
      "beforeend",
      `<p> T.S album For ${tsalbum.name}</p>`
    );
    DOMSelectors.display.insertAdjacentHTML(
      "beforeend",
      `<p> songtitle:${tsalbum.songtitle}</p>`
    );
    DOMSelectors.display.insertAdjacentHTML(
      "beforeend",
      `<p> albumurl:${tsalbum.albumurl}</p>`
    );
    console.log(inputs);
    inputs.forEach((el) => {
      el.value = "";
    });
  });

  DOMSelectors.button.addEventListener("click", function () {
    let input = DOMSelectors.imageURL.value;
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<img src="${input}"></img>`
    );
    DOMSelectors.imageURL.value = "";
  }); // when "enter" button is clicked, image of food will be shown at the bottom

  DOMSelectors.button.insertAdjacentHTML(
    "afterend",
    `<h2>full entry here: <h2>`
  ); // heading separates results from entries

  DOMSelectors.clearButton.addEventListener("click", function () {
    location.reload();
    return false;
  }); // when "clear" button is clicked, page is refreshed/ new objects are cleared
}
