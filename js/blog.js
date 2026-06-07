/* ═══════════════════════════════════════════════════════════
   BLOG JS — category filter for blog/index.html
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  const filterBtns  = document.querySelectorAll('.filter-btn');
  const articles    = document.querySelectorAll('#articleGrid .blog-card');
  const featured    = document.querySelector('.blog-featured');
  const emptyState  = document.getElementById('blogEmpty');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter grid cards
      let visibleCount = 0;
      articles.forEach(card => {
        const category = card.dataset.category || '';
        const show = filter === 'all' || category === filter;
        card.dataset.hidden = show ? 'false' : 'true';
        if (show) visibleCount++;
      });

      // Handle featured article
      if (featured) {
        const featuredCategory = featured.dataset.category || '';
        const showFeatured = filter === 'all' || featuredCategory === filter;
        featured.dataset.hidden = showFeatured ? 'false' : 'true';
        if (showFeatured) visibleCount++;
      }

      // Show/hide empty state
      if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    });
  });

})();
