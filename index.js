let DOMSelectors = {
 tsAlbum: document.getElementById("tsAlbum"),
  songTitle: document.getElementById("songTitle"),
 imageUrl: document.getElementById("imageUrl"),
  set: document.getElementById("enter"),
  body: document.getElementById("body"),
  temp: document.querySelector(".enters"),
  clearForm: document.getElementById("clear"),
  form: document.getElementById("form"),
  clear: document.querySelectorAll("#clear"),
};

DOMSelectors.form.addEventListener("enter", function (e) {
  e.preventDefault();
  let album = DOMSelectors.tsAlbum.value;
  let song = DOMSelectors. songTitle.value;
  let image = DOMSelectors.imageUrl.value;

  DOMSelectors.body.insertAdjacentHTML(
    "afterbegin",
    `<div class="enters">
        <image src></image>
        <h1 class="alb">${album}</h1>
        <h2 class="son">${song}</h2>
        <img src="${image}" class="imageUrl"alt="">
        <br>
        <button id="clear" >Delete</button>
    </div>`
  );

  DOMSelectors.clear = document.querySelectorAll("#clear");
  DOMSelectors.clear.forEach((button) =>
    button.addEventListener("click", function () {
      this.parentElement.clear();
    })
  );
  clear();
});

function clear() {
  DOMSelectors.tsAlbum.value = "";
  DOMSelectors.songTitle.value = "";
  DOMSelectors.imageUrl.value = "";
}
