// see if this works with plain javascript take out the jquery
// make an array to store the local storage items then I can loop them
// need to make function to push to array of local data so I can loop all the items and display them on page
$(document).ready(function () {
  let storageArea = document.getElementById("storageArea");
  storageArea.addEventListener("load", getLocalData);

  // this function display the items already in local storage
  // need to make local storage array and loop over to display all the items
  let localArray = [];
  // fix this function so it loads local list and then we loop over in another function to get the local data stored onto page
  function getLocalData() {
    let storageItem = localStorage.getItem("item");
    let itemPrice = localStorage.getItem("amount");
    // this grabs what is already in local storage and push it into the array
    localArray = storageItem + itemPrice;
    //document.getElementById("storageArea").innerHTML =
    //  storageItem + "  " + itemPrice;

    // console.log(storageItem + itemPrice);
    console.log(localArray);
  }
  getLocalData();

  let button = document.getElementById("button");
  button.addEventListener("click", displayText);
  // this function displays the form submission
  function displayText(event) {
    event.preventDefault();
    const form = document.getElementById("myForm");
    let msg = document.getElementById("item").value;
    let dollar = document.getElementById("dollar").value;
    let numbUSD = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    let listItem = document.getElementById("formData");
    listItem.innerHTML +=
      "<li>" + msg + "  " + numbUSD.format(dollar) + "<li/>";
    // this sets item in local storage
    localStorage.setItem("item", msg);
    localStorage.setItem("amount", numbUSD.format(dollar));
    // here we regrab from local storage to push to the array for local storage
    let storageItem = localStorage.getItem("item");
    let itemPrice = localStorage.getItem("amount");
    // maybe I just need to make the grabbing of the data an array then I push the data from my submission to array?
    // localArray.push(storageItem + itemPrice);
    form.reset();
    console.log(storageItem + itemPrice);
  }
  displayText();
});
