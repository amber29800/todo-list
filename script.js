const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("please write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

inputBox.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    // 13 is the keycode for "Enter"
    event.preventDefault();
    addTask();
  }
});

listContainer.addEventListener(
  "click",
  function (e) {
    const element = e.target;
    if (element.tagName === "LI") {
      element.classList.toggle("checked");
      saveData();
    } 
    else if (element.tagName === "SPAN") {
        element.parentElement.remove();
        saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showData();
