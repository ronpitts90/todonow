document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please enter a task");
  } else {
    document.querySelector("#tasks").innerHTML += ` 
    <div class= "tasks">
        <span id="taskname">
            ${document.querySelector("#newtask input").value}
        </span>
    `;
  }
};
