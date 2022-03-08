/// got the items to set in local storage need to see if I can get them to stay on page reload
// style it up
// see if this works with plain javascript take out the jquery

$(document).ready(function () {
  let storageArea = document.getElementById("storageArea");
  storageArea.addEventListener("load", getLocalData);
  // this function display the items already in local storage
  function getLocalData() {
    let storageItem = localStorage.getItem("amount");
    // document.getElementById("test").innerHTML = user;
    console.log(storageItem);
  }
  getLocalData();

  let button = document.getElementById("button");
  button.addEventListener("click", displayText);
  // this function displays the form submission
  function displayText(event) {
    event.preventDefault();
    let msg = document.getElementById("item").value;
    let dollar = document.getElementById("dollar").value;
    let numbUSD = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    let listItem = document.getElementById("formData");
    listItem.innerHTML +=
      "<li>" + msg + "  " + numbUSD.format(dollar) + "<li/>";
    localStorage.setItem("item", msg);
    localStorage.setItem("amount", numbUSD.format(dollar));
  }
  displayText();
});
