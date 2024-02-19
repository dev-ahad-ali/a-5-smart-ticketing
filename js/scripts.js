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
let totalPrice = 0;
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
      // Ticket Pricing And Discount ----->
      totalPrice = totalPrice + 550;
      setInnerText("total-price", totalPrice);
      setInnerText("grand-total", totalPrice);
      if (seatCount === 4) {
        const couponInput = document.getElementById("coupon-input");
        const couponApply = document.getElementById("coupon-apply");
        couponInput.removeAttribute("disabled");
        couponApply.removeAttribute("disabled");
        document.getElementById("seat-limit").classList.remove("hidden");
        document
          .getElementById("coupon-apply")
          .addEventListener("click", function () {
            const couponCode = document.getElementById("coupon-input").value;
            if (couponCode === "NEW15") {
              discountTotal = totalPrice - (totalPrice * 15) / 100;
              setInnerText("grand-total", discountTotal);
              document.getElementById("coupon-section").classList.add("hidden");
            } else if (couponCode === "Couple 20") {
              discountTotal = totalPrice - (totalPrice * 20) / 100;
              setInnerText("grand-total", discountTotal);
              document.getElementById("coupon-section").classList.add("hidden");
            } else {
              document.getElementById("coupon-input").value = "";
              alert("Enter a valid coupon code");
            }
          });
      }
    }
  });
}

// Form Functions -----------------
const phoneNumber = document.getElementById("phone-number");
phoneNumber.addEventListener("keyup", function (value) {
  let number = parseInt(phoneNumber.value);
  if (
    totalPrice >= 550 &&
    typeof number === "number" &&
    isNaN(number) === false
  ) {
    let formSubmit = document.getElementById("form-submit");
    formSubmit.removeAttribute("disabled");
  } else {
    let formSubmit = document.getElementById("form-submit");
    formSubmit.setAttribute("disabled", true);
  }
});
const formSubmit = document.getElementById("form-submit");
formSubmit.addEventListener("click", function () {
  const modal = document.getElementById("success-modal");
  modal.classList.remove("hidden");
});
const modalClose = document.getElementById("modal-close");
modalClose.addEventListener("click", function () {
  const modal = document.getElementById("success-modal");
  modal.classList.add("hidden");
  location.reload();
});
