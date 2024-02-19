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
      "cursor-pointer",
      "duration-300"
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
  seat.addEventListener("click", function ticket() {
    seat.classList.add("clicked");
    // Only add ticket ones ---->
    if (seat.classList.contains("clicked") === true) {
      seat.removeEventListener("click", ticket);
    }
    // Seat Count ---->
    seatCount = seatCount + 1;
    // Seat Left ---->
    totalSeatLeft = totalSeatLeft - 1;
    // Adding seat number and seat list ---->
    if (seatCount <= 4) {
      // Show Seat count
      setInnerText("seat-added", seatCount);
      // Show Seat Left
      setInnerText("seat-left", totalSeatLeft);
      // Seat style ---->
      seat.style.backgroundColor = "#22c55e";
      seat.style.opacity = "1";
      seat.style.color = "#ffffff";
      // Seat Listing ----->
      const seatName = seat.innerText;
      const seatList = document.getElementById("seat-list");
      const seatInfo = document.createElement("li");
      seatInfo.classList.add(
        "opacity-60",
        "flex",
        "justify-between",
        "items-center"
      );
      seatInfo.innerHTML = `
      <span id="seat-name">${seatName}</span><span>Economy</span
      ><span>550</span>`;
      seatList.appendChild(seatInfo);
    }
  });
}
