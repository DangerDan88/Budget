// see if this works with plain javascript take out the jquery
// make an array to store the local storage items then I can loop them
// need to make function to push to array of local data so I can loop all the items and display them on page
$(document).ready(function () {
  let storageArea = document.getElementById("storageArea");
  storageArea.addEventListener("load", getLocalData);

  // this function display the items already in local storage
  let localArray = [];
  // fix this function so it loads local list and then we loop over in another function to get the local data stored onto page
  function getLocalData() {
    let storageItem = localStorage.getItem("item");
    let itemPrice = localStorage.getItem("amount");
    // this grabs what is already in local storage and push it into the array
    localArray.push(storageItem + itemPrice);
    document.getElementById("storageArea").innerHTML =
      storageItem + "  " + itemPrice;
    // this is pulling an array of the items so we need to loop them here to have the array syntax removed and leave just the strings
    // or we can try looping it when we set the item which in turn would make it easier to grab the item from local storage and loop it
    console.log(storageItem + itemPrice);
    console.log(localArray);
  }
  getLocalData();

  let button = document.getElementById("button");
  button.addEventListener("click", displayText);
  let testArray = [];
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
    // this splits the array into the correct items so each array position has item and price in one so its easier to loop
    testArray.push(
      localStorage.getItem("item", msg) +
        "  " +
        localStorage.getItem("amount", numbUSD.format(dollar))
    );
    localStorage.setItem("item", JSON.stringify(testArray));
    localStorage.setItem("amount", JSON.stringify(testArray));
    form.reset();
    console.log(testArray);
  }
  displayText();
});
