const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-tasks");

inputBox.addEventListener("keydown", function(event) {
    if(event.key==="Enter"){
        addTask();
    }
});

function addTask() {
    if (inputBox.value === '') {
        alert("enter the text!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        let cross = document.createElement("span");
        cross.innerHTML = "\u00d7";
        cross.className = "cross";
        li.appendChild(cross);
        listContainer.appendChild(li);
        inputBox.value = '';
        saveData();
    }
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.classList.contains("cross")) {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
    const storedData = localStorage.getItem("data");
    if (storedData) {
        listContainer.innerHTML = storedData;
    }
}

document.addEventListener('DOMContentLoaded', showData);