/// got the items to set in local storage need to see if I can get them to stay on page reload
// concatenate the items into list items when submitting
// style it up
// see if this works with plain javascript take out the jquery
$(document).ready(function () {
  let button = document.getElementById("button");
  button.addEventListener("click", displayText);

  function displayText(event) {
    event.preventDefault();
    let msg = document.getElementById("item").value;
    let dollar = document.getElementById("dollar").value;
    let numbUSD = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    let listItem = document.createElement("li");
    let whatIsThis = (document.getElementById("formData").innerHTML =
      listItem.appendChild(
        document.createTextNode(msg + " " + numbUSD.format(dollar))
      ));
    console.log(whatIsThis);
    // why is this showing as an object text but in console its just a string?
  }
  displayText();
});

//localStorage.setItem("item", msg);
//localStorage.setItem("amount", dollar);
