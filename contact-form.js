const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const values = ['name', 'company', 'subject', 'message'].map((key) => contactForm.elements.namedItem(key));
  values.forEach((field) => field.setCustomValidity(field.value.trim() ? '' : 'Please complete this field.'));
  if (!contactForm.reportValidity()) return;
  const [name, company, subject, message] = values.map((field) => field.value.trim());
  const body = `Name: ${name}\r\nCompany: ${company}\r\n\r\n${message}`;
  const url = `mailto:contact@cornerstonebiomedical.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
  document.getElementById('contact-form-status').textContent = 'Your email app has been requested. If no draft opens, email contact@cornerstonebiomedical.com directly.';
});
contactForm.addEventListener('input', (event) => {
  if (typeof event.target.setCustomValidity === 'function') event.target.setCustomValidity('');
});

const prayerForm = document.getElementById('prayer-form');
prayerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const fields = ['name', 'message'].map((key) => prayerForm.elements.namedItem(key));
  fields.forEach((field) => field.setCustomValidity(field.value.trim() ? '' : 'Please complete this field.'));
  if (!prayerForm.reportValidity()) return;
  const [name, message] = fields.map((field) => field.value.trim());
  const body = `Name: ${name}\r\n\r\nPrayer request:\r\n${message}`;
  window.location.href = `mailto:prayer@cornerstonebiomedical.com?subject=Prayer%20Request&body=${encodeURIComponent(body)}`;
  document.getElementById('prayer-form-status').textContent = 'Your email app has been requested. If no draft opens, email prayer@cornerstonebiomedical.com directly.';
});
prayerForm.addEventListener('input', (event) => {
  if (typeof event.target.setCustomValidity === 'function') event.target.setCustomValidity('');
});
