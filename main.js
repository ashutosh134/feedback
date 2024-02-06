let form = document.querySelector("form");

let ul = document.querySelector("ul");

let select = document.querySelector("select");

let textarea = document.querySelector("textarea");

const saveFeedback = (e) => {
  e.preventDefault();

  let li = document.createElement("li");

  li.className = "list-group-item rounded-0";

  let h1 = document.createElement("h1");
  h1.innerText = `Rating : ` + select.value;
  h1.className = "display-3";

  let h2 = document.createElement("h2");
  h2.innerText = `Review : ` + textarea.value;
  h2.className = "display-4";

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.className = "btn btn-danger btn-sm rounded-0 float-end";

  li.appendChild(h1);
  li.appendChild(h2);
  li.appendChild(delBtn);

  ul.appendChild(li);

  form.reset();
};

form.addEventListener("submit", saveFeedback);

const dltFeedback = (e) => {
  if (e.target.className.includes("btn-danger")) {
    if (window.confirm("Are you Sure!!")) {
      ul.removeChild(e.target.parentElement);
    }
  }
};

ul.addEventListener("click", dltFeedback);

let clearBtn = document.querySelector("#clearBtn");


clearBtn.addEventListener("click", () => {
  let allListitems = document.querySelectorAll("li");

  allListitems.forEach((item) => {
    ul.removeChild(item);
  });
});


