// see if this works with plain javascript take out the jquery
// make an array to store the local storage items then I can loop them
// need to make function to push to array of local data so I can loop all the items and display them on page
$(document).ready(function () {
  let button = document.getElementById("button");
  let totalArea = document.getElementById("totalArea");
  button.addEventListener("click", displayText);
  let localStorageArray = [];
  let totalArray = 40;
  // this function displays the form submission
  function displayText(event) {
    event.preventDefault();
    const form = document.getElementById("myForm");
    let listItem = document.getElementById("formData");
    let msg = document.getElementById("item").value;
    let dollar = document.getElementById("dollar").value;
    let numbUSD = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    listItem.innerHTML +=
      "<li>" + msg + "  " + numbUSD.format(dollar) + "<li/>";
    // figure out how to add a total to number on submit so it will add total money for all items

    // this sets item in local storage
    localStorage.setItem("item", msg);
    localStorage.setItem("amount", numbUSD.format(dollar));
    // here we regrab from local storage to push to the array for local storage
    // this splits the array into the correct items so each array position has item and price in one so its easier to loop
    localStorageArray.push(
      localStorage.getItem("item", msg) +
        "  " +
        localStorage.getItem("amount", numbUSD.format(dollar))
    );
    localStorage.setItem("item", JSON.stringify(localStorageArray));
    localStorage.setItem("amount", JSON.stringify(localStorageArray));
    // need to add values then attach $ format to get it to add correct
    if (totalArray.length === 0) {
      totalArea.innerHTML = parseInt(dollar) + totalArray;
    } else {
      totalArea.innerHTML = parseInt(dollar) + totalArray;
    }
    form.reset();
    console.log(localStorageArray);
  }
  displayText();
});
