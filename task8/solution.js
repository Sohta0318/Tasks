const addValue = document.querySelector("#add-input");
const addButton = document.querySelector("#add-btn");
const list = document.querySelector("#list");

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  const value = addValue.value;
  const addElement = document.createElement("li");
  addElement.innerHTML = `<p>${value}</p>
  <p>
              <i class="fa fa-pencil"></i>
              <i class="fa fa-times"></i>
            </p>`;
  list.insertAdjacentElement("beforeend", addElement);
});
