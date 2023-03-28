const input = document.getElementById("input");
const submitBtn = document.getElementById("submitBtn");
const ul = document.getElementById("ul");

submitBtn.addEventListener("click", addItem);

function addItem(event) {
  event.preventDefault();
  if (input.value != "") {
    const inputText = input.value;
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerHTML = "&#10005;"; // replaced 'x' with html entity cross
    const node = document.createTextNode(inputText + " ");
    
    // added p tag wrapper for easier formatting
    const para = document.createElement("p");
    para.appendChild(node);
    
    li.appendChild(para);
    ul.appendChild(li);
    li.appendChild(btn);
    input.value = "";
    btn.addEventListener("click", function delItem() {
      ul.removeChild(li);
    });
  }
}
