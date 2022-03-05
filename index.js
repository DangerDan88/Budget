/// got the items to set in local storage need to see if I can get them to stay on page reload
// concatenate the items into list items when submitting
// style it up
$(document).ready(function () {
  let button = document.getElementById("button");
  button.addEventListener("click", displayText);
  console.log("test");
  function displayText(event) {
    event.preventDefault();
    let msg = document.getElementById("item").value;
    let dollar = document.getElementById("dollar").value;
    let numbUSD = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    localStorage.setItem("item", msg);
    localStorage.setItem("amount", dollar);
    document.getElementById("formData").innerHTML =
      msg + "  " + numbUSD.format(dollar);
    //  document.getElementById("formData").innerHTML = Number(
    //    localStorage.getItem("amount")
    //  );
    //   localStorage.getItem("item") +
    //   "  " +
  }
  displayText();
});
