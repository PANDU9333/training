const cards = document.querySelectorAll(".card");
let first = null;

cards.forEach(card => {
  card.addEventListener("click", () => {
    if (card.textContent || card === first) return;

    card.textContent = card.dataset.emoji;

    if (!first) {
      first = card;
    } else {
      if (first.dataset.emoji !== card.dataset.emoji) {
        setTimeout(() => {
          first.textContent = "";
          card.textContent = "";
          first = null;
        }, 200);
      } else {
        first = null;
      }
    }
  });
});
