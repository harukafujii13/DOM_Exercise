//Adding
const form = document.querySelector("#add");
const input = document.querySelector("add-input");
const list = document.querySelector("#list");

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    //prevent from submitting if input is empty
    const inputValue = evt.target[0].value
    if (!inputValue) return;


    //Solution1
    // const newEl = document.createElement("li")
    // newEl.innerHTML = `<p>${inputValue}Third Note</p>
    // <p><i class="..."></i><i class="..."></i></p>
    // <input type="text" class="..." />`;
    // list.appendChild(newEl)


    //Solution2
    const li = document.createElement("li");
    const firstP = document.createElement("p");
    const secondP = document.createElement("p");
    const firstIcon = document.createElement("i");
    const secondIcon = document.createElement("i");
    const input = document.createElement("input");

    firstIcon.className = "fa fa-pencil-square-o";
    firstIcon.className = "fa fa-times";
    input.className = "edit-note";
    input.setAttribute("type", "text")

    firstP.textContent = inputValue;
    
    secondP.appendChild(firstIcon);
    secondP.appendChild(secondIcon);
    li.appendChild(firstP);
    li.appendChild(secondP);
    li.appendChild(input);
    list.appendChild(li);


    evt.target[0].value = " ";
});