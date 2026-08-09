let inputBox = document.querySelector("#searchbar");
let list = document.querySelector("#list");

inputBox.addEventListener("keyup", function(event){
    if(event.key == "Enter") {
        addItem(this.value);
        this.value = "";
    }
});

let addItem = (inputBox) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inputBox}<i><i>`;
    list.appendChild(listItem);
}