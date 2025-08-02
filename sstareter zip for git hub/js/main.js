// Simple tag filtering logic
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('#filter-bar button');
  const videos = document.querySelectorAll('.video-card');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const tag = button.dataset.tag;
      videos.forEach(card => {
        card.style.display = tag === 'all' || card.dataset.tag === tag ? 'block' : 'none';
      });
    });
  });
});
