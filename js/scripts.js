// Seat Letter Style -------------------
function seatLetterStyle() {
  const seats = document.getElementsByClassName("seat-letter");
  for (const seat of seats) {
    seat.classList.add(
      "font-medium",
      "text-lg",
      "opacity-50",
      "text-center",
      "py-4"
    );
  }
}
seatLetterStyle();

// Seat Serial Style -------------------
function seatSerialStyle() {
  const seats = document.getElementsByClassName("seat-serial");
  for (const seat of seats) {
    seat.classList.add(
      "font-medium",
      "text-lg",
      "opacity-50",
      "px-11",
      "py-4",
      "bg-[#F7F8F8]",
      "rounded-xl",
      "text-center",
      "cursor-pointer"
    );
  }
}
seatSerialStyle();

// Click to Scroll Function -----------------------
document
  .getElementById("buy-ticket-btn")
  .addEventListener("click", function () {
    const ticketArea = document.getElementById("buy-ticket-area");
    ticketArea.scrollIntoView({ behavior: "smooth" });
  });

// Set inner text Function ---------------------
function setInnerText(elementId, value) {
  document.getElementById(elementId).innerText = value;
}

// Buying Ticket Function ------------------------
const seats = document.getElementsByClassName("seat-serial");
let seatCount = 0;
let totalSeatLeft = parseInt(document.getElementById("seat-left").innerText);
for (const seat of seats) {
  seat.addEventListener("click", function () {
    // Seat Added ---->
    seatCount = seatCount + 1;
    setInnerText("seat-added", seatCount);
    // Seat Left ---->
    totalSeatLeft = totalSeatLeft - 1;
    setInnerText("seat-left", totalSeatLeft);
  });
}
