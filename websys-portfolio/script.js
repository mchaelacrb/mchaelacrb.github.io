function toggleCards() {
    var hiddenCards = document.querySelectorAll('.work-card.hidden');
    hiddenCards.forEach(function(card) {
      card.classList.toggle('hidden');
    });
  }
  