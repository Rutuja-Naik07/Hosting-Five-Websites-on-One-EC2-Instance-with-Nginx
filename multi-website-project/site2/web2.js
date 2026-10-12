const searchInput = document.getElementById('searchInput');
const cards = [...document.querySelectorAll('.card')];
const statusMessage = document.getElementById('statusMessage');
const resultCount = document.getElementById('resultCount');
const emptyState = document.getElementById('emptyState');
const isShop = document.body.classList.contains('theme-amazon') || document.body.classList.contains('theme-flipkart');
let activeFilter = 'all';
let cartCount = 0;

function updateCards() {
  const query = (searchInput?.value || '').trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const matchesText = card.dataset.name.includes(query);
    const category = (card.dataset.category || '').toLowerCase();
    const matchesFilter = activeFilter === 'all' || category.includes(activeFilter);
    const show = matchesText && matchesFilter;
    card.hidden = !show;
    if (show) visible++;
  });
  if (resultCount) resultCount.textContent = `${visible} item${visible === 1 ? '' : 's'}`;
  if (emptyState) emptyState.hidden = visible !== 0;
}

searchInput?.addEventListener('input', updateCards);
document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    activeFilter = button.dataset.filter;
    updateCards();
  });
});

cards.forEach(card => {
  card.querySelector('.card-action')?.addEventListener('click', () => {
    const title = card.querySelector('h3')?.textContent || 'Item';
    if (isShop) {
      cartCount++;
      const counter = document.getElementById('cartCount');
      if (counter) counter.textContent = cartCount;
      statusMessage.textContent = `${title} added to your demo cart. Cart items: ${cartCount}.`;
    } else {
      statusMessage.textContent = `${title} selected. This is a front-end demo; video playback is not connected.`;
    }
  });
});

document.getElementById('surpriseButton')?.addEventListener('click', () => {
  const visibleCards = cards.filter(card => !card.hidden);
  const choices = visibleCards.length ? visibleCards : cards;
  const chosen = choices[Math.floor(Math.random() * choices.length)];
  const title = chosen?.querySelector('h3')?.textContent || 'Featured item';
  statusMessage.textContent = isShop ? `Deal spotlight: ${title}. Prices are sample demo prices.` : `Featured pick: ${title}. Explore the card to learn more.`;
  chosen?.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

document.getElementById('headerAction')?.addEventListener('click', () => {
  if (isShop) {
    statusMessage.textContent = `Your demo cart has ${cartCount} item${cartCount === 1 ? '' : 's'}. Checkout is not connected.`;
  } else {
    statusMessage.textContent = 'Welcome! This portfolio demo does not use real accounts or subscriptions.';
  }
  document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
});
