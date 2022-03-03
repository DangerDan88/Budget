/// get the data to stick in local storage for now
// style it up
$(document).ready(function () {
  let button = document.getElementById("button");
  button.addEventListener("click", displayText);
  console.log("test");
  function displayText(event) {
    event.preventDefault();
    let dollar = document.getElementById("dollar").value;
    let msg = document.getElementById("item").value;
    document.getElementById("formData").innerHTML = msg + dollar;
  }
  displayText();
});
