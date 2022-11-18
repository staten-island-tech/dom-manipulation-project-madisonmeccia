let DOMSelectors = {
  title: document.getElementById("title"),
  songTitle: document.getElementById("songTitle"),
  imageUrl: document.getElementById("imageUrl"),
  set: document.getElementById("enter"),
  body: document.getElementById("body"),
  temp: document.querySelector(".enters"),
  clearForm: document.getElementById("clear"),
  form: document.getElementById("form"),
  clear: document.querySelectorAll("#clear"),
};

DOMSelectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
  let album = DOMSelectors.title.value;
  let song = DOMSelectors.songTitle.value;
  let image = DOMSelectors.imageUrl.value;

  document.querySelector("#display").insertAdjacentHTML(
    "beforeend",
    `<div class="enter">
       
        <h3 class="alb">${album}</h3>
        <h4 class="son">${song}</h4>
        <img src="${image}" class="imageUrl"alt=""> 
        <br>
        <button id="clear">Delete</button>
    </div>`
  );

  DOMSelectors.clear = document.querySelectorAll("#clear");
  DOMSelectors.clear.forEach((button) =>
    button.addEventListener("click", function () {
      this.parentElement.remove();
    })
  );
  clear();
});

function clear() {
  DOMSelectors.title.value = "";
  DOMSelectors.songTitle.value = "";
  DOMSelectors.imageUrl.value = "";
}
