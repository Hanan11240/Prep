// Example 1

// const shadowHostEl = document.getElementById('host');
// const shadow = shadowHostEl.attachShadow({ mode: 'open' });
// const el = document.createElement('span');
// el.textContent = "Shadow element";
// shadow.appendChild(el);



// Example 2

// const host = document.getElementById('host');
// const shadow = host.attachShadow({ mode: 'open' });
// const spanEl = document.createElement('span');
// spanEl.textContent = "Shadow element";

// shadow.appendChild(spanEl);


// const uBtn = document.getElementById('upper')
// const rBtn = document.getElementById('reload')


// rBtn.addEventListener('click', () => document.location.reload())

// uBtn.addEventListener('click', () => {
//     // const spans = Array.from(document.querySelectorAll('span'));
//     const spans = Array.from(host.shadowRoot.querySelectorAll('span'));

//     for (let span of spans) {
//         span.textContent = span.textContent.toUpperCase();
//     }
// })



// Example 3

class FilledCircle extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // Create a shadow root
    // The custom element itself is the shadow host
    const shadow = this.attachShadow({ mode: "open" });

    // create the internal implementation
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle",
    );
    circle.setAttribute("cx", "50");
    circle.setAttribute("cy", "50");
    circle.setAttribute("r", "50");
    circle.setAttribute("fill", this.getAttribute("color"));
    svg.appendChild(circle);

    shadow.appendChild(svg);
  }
}

customElements.define("filled-circle", FilledCircle);
