const currentTimeEl = document.querySelector("#currentTime");
const timeblockEl = document.querySelectorAll(".time-block");
console.log(timeblockEl);

// Grabs current time, displays it on page
let currentTime = setInterval(function () {
  let time = dayjs().format("hh:mm:ss A");
  currentTimeEl.textContent = time;
}, 1000);

let currentHour = dayjs().hour();

// Displays past, present, future color boxes to times
for (hour = 9, array = 0; hour <= 17, array <= 8; hour++, array++) {
  if (currentHour == hour) {
    timeblockEl[array].children[1].setAttribute(
      "class",
      "col-8 col-md-10 description present"
    );
  } else if (currentHour < hour) {
    timeblockEl[array].children[1].setAttribute(
      "class",
      "col-8 col-md-10 description future"
    );
  } else {
    timeblockEl[array].children[1].setAttribute(
      "class",
      "col-8 col-md-10 description past"
    );
  }
}

console.log(currentHour);

// Displays current time at header
const currentDayEl = document.querySelector("#currentDay");
const timeBlockContainer = document.querySelector("#time-block-container");
const saveBtnEl = document.querySelectorAll("button");
const textareaEl = document.querySelectorAll("textarea");

console.log(textareaEl);

currentDay = dayjs().format("MMM DD, YYYY");
currentDayEl.textContent = currentDay;

// Click event when user clicks on save buttons
timeBlockContainer.addEventListener("click", (event) => {
  target = event.target;
  console.log(target.tagName);

  // if user click is on the save button, text area and time is saved in localstorage
  if (target == target.parentElement.children[2]) {
    console.log(target.parentElement.children[1].value);
    localStorage.setItem(
      target.parentElement.children[0].textContent,
      target.parentElement.children[1].value
    );

  // if user click is on the save button icon, text area and time is saved in localstorage
  } else if (target.tagName == "I") {
    console.log(target.parentElement.parentElement.children[1].value);
    localStorage.setItem(
      target.parentElement.parentElement.children[0].textContent,
      target.parentElement.parentElement.children[1].value
    );
  } else return;
});

// Upon reload, textcontent is updated to values in localstorage
textareaEl[0].textContent = localStorage.getItem("9AM");
textareaEl[1].textContent = localStorage.getItem("10AM");
textareaEl[2].textContent = localStorage.getItem("11AM");
textareaEl[3].textContent = localStorage.getItem("12PM");
textareaEl[4].textContent = localStorage.getItem("1PM");
textareaEl[5].textContent = localStorage.getItem("2PM");
textareaEl[6].textContent = localStorage.getItem("3PM");
textareaEl[7].textContent = localStorage.getItem("4PM");
textareaEl[8].textContent = localStorage.getItem("5PM");
