document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.level-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Toggle the 'expanded' class on the clicked card
            card.classList.toggle('expanded');
        });
    });
});