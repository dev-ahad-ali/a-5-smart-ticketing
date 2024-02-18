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
