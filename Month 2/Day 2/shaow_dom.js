const shadowHostEl = document.getElementById('host');
const shadow = shadowHostEl.attachShadow({ mode: 'open' });
const el = document.createElement('span');
el.textContent = "Shadow element";
shadow.appendChild(el);
