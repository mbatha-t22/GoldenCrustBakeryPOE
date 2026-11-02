document.addEventListener('DOMContentLoaded', () => {
  // Product search, category-independent sorting and visible result count.
  const search = document.querySelector('#product-search');
  const grid = document.querySelector('#product-grid');
  const sort = document.querySelector('#product-sort');
  const count = document.querySelector('#product-count');
  if (grid) {
    const cards = [...grid.querySelectorAll('.product-card')];
    const updateProducts = () => {
      const term = (search?.value || '').trim().toLowerCase();
      const mode = sort?.value || 'default';
      cards.forEach(card => card.hidden = !(`${card.dataset.product} ${card.dataset.name}`.toLowerCase().includes(term)));
      const visible = cards.filter(card => !card.hidden);
      visible.sort((a,b) => {
        if (mode === 'name') return a.dataset.name.localeCompare(b.dataset.name);
        if (mode === 'price-low') return Number(a.dataset.price)-Number(b.dataset.price);
        if (mode === 'price-high') return Number(b.dataset.price)-Number(a.dataset.price);
        return cards.indexOf(a)-cards.indexOf(b);
      }).forEach(card => grid.appendChild(card));
      if (count) count.textContent = `Showing ${visible.length} of ${cards.length} products`;
    };
    search?.addEventListener('input', updateProducts);
    sort?.addEventListener('change', updateProducts);
    updateProducts();
  }

  // Accessible image lightbox for gallery and product images.
  const lightboxTriggers = document.querySelectorAll('[data-lightbox="true"]');
  if (lightboxTriggers.length) {
    const dialog = document.createElement('dialog');
    dialog.className = 'lightbox-dialog';
    dialog.innerHTML = '<button type="button" class="lightbox-close" aria-label="Close image">×</button><img alt=""><p class="lightbox-caption"></p>';
    document.body.appendChild(dialog);
    const image = dialog.querySelector('img');
    const caption = dialog.querySelector('.lightbox-caption');
    const close = () => dialog.close();
    dialog.querySelector('.lightbox-close').addEventListener('click', close);
    dialog.addEventListener('click', event => { if (event.target === dialog) close(); });
    lightboxTriggers.forEach(trigger => trigger.addEventListener('click', () => {
      const source = trigger.querySelector('img');
      if (!source) return;
      image.src = source.currentSrc || source.src;
      image.alt = source.alt;
      caption.textContent = source.alt;
      dialog.showModal();
    }));
  }

  // FAQ accordion with keyboard-operable native buttons.
  document.querySelectorAll('.faq-question').forEach(button => button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    answer.hidden = expanded;
    button.querySelector('span').textContent = expanded ? '＋' : '−';
  }));

  // Enquiry forms: browser validation, then open a pre-addressed email draft.
  const bindMailForm = (formId, statusId, subjectPrefix) => {
    const form = document.getElementById(formId);
    const status = document.getElementById(statusId);
    if (!form) return;
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const lines = [...data.entries()].map(([key,value]) => `${key}: ${value}`);
      const subject = `${subjectPrefix} - ${data.get('Full name') || data.get('name') || 'Website visitor'}`;
      const body = lines.join('\n');
      const href = `mailto:info@goldencrustbakery.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      if (status) status.textContent = 'Your details passed the form checks. Your email application should open with a prepared message; please review and press Send there.';
      window.location.href = href;
    });
  };
  bindMailForm('enquiry-form','enquiry-status','Bakery enquiry');
  bindMailForm('contact-form','contact-status','General contact message');

  // Populate the product field when an enquiry is started from a product card.
  const params = new URLSearchParams(window.location.search);
  const product = params.get('product');
  const message = document.getElementById('message');
  if (product && message && !message.value) message.value = `I would like to enquire about: ${product}. Please provide availability and ordering details.`;

  // Leaflet map centred on Pretoria city centre: location is approximate, not a claimed shop address.
  const mapNode = document.getElementById('bakery-map');
  if (mapNode && window.L) {
    const map = L.map(mapNode, {scrollWheelZoom:false}).setView([-25.7479, 28.2293], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', maxZoom: 19
    }).addTo(map);
    L.marker([-25.7479, 28.2293]).addTo(map).bindPopup('<strong>Pretoria, Gauteng</strong><br>Approximate city-centre marker; confirm the bakery street address before visiting.').openPopup();
  } else if (mapNode) {
    mapNode.innerHTML = '<p>Interactive map could not load. <a href="https://www.google.com/maps/search/?api=1&query=Pretoria%2C%20Gauteng">Open Pretoria in Google Maps</a>.</p>';
  }
});
