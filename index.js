// Add JS to get form info from submission of from and display on page
// find a plain js way to get the form info to get stored into localStorage
// run jquery document.ready in meantime so we can test this

$(document).ready(function () {
  let button = document.getElementById("button");
  button.addEventListener("click", displayText);
  console.log("test");
  function displayText(event) {
    event.preventDefault();
    let msg = document.getElementById("item").value;
    console.log(msg);
  }

  displayText();
});
