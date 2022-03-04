/// get the data to stick in local storage for now
// concatanate the items into list items when submitting
// convert the $ submission into a string so I can put onto html
// style it up
$(document).ready(function () {
  let button = document.getElementById("button");
  button.addEventListener("click", displayText);
  console.log("test");
  function displayText(event) {
    event.preventDefault();
    let msg = document.getElementById("item").value;
    let dollar = document.getElementById("dollar").value;
    localStorage.setItem("item", msg);
    localStorage.setItem("amount", dollar.toString());
    document.getElementById("formData").innerHTML = Number(
      localStorage.getItem("amount")
    );
    //   localStorage.getItem("item") +
    //   "  " +
  }
  displayText();
});
