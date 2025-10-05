class RyanCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.classList.add('card');

    wrapper.innerHTML = `
      <div class="card-img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Ryan_Reynolds_2022.jpg" alt="Ryan Reynolds">
      </div>
      <div class="card-info">
        <h2>Ryan Reynolds</h2>
        <p>Actor • Producer • Entrepreneur</p>
        <p class="bio">Known for his sharp humor and iconic performances in <em>Deadpool</em>, <em>Free Guy</em>, and <em>The Proposal</em>.</p>
        <button id="fact-btn">Show Fun Fact</button>
        <p id="fact"></p>
      </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
      .card {
        background: linear-gradient(135deg, #f7971e, #ffd200);
        color: #222;
        width: 320px;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        text-align: center;
        transition: transform 0.4s, box-shadow 0.4s;
      }

      .card:hover {
        transform: scale(1.05);
        box-shadow: 0 20px 40px rgba(0,0,0,0.4);
      }

      .card-img img {
        width: 100%;
        height: auto;
      }

      .card-info {
        padding: 1.5rem;
      }

      h2 {
        margin: 0.5rem 0;
        font-size: 1.8rem;
      }

      p {
        margin: 0.5rem 0;
        font-size: 0.95rem;
      }

      .bio {
        color: #333;
        font-style: italic;
        margin-bottom: 1rem;
      }

      button {
        background: #ff416c;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 25px;
        cursor: pointer;
        font-weight: 600;
        transition: background 0.3s, transform 0.3s;
      }

      button:hover {
        background: #ff4b2b;
        transform: scale(1.1);
      }

      #fact {
        margin-top: 1rem;
        font-weight: 500;
        color: #111;
      }
    `;

    shadow.append(style, wrapper);

    const facts = [
      "Ryan owns Aviation Gin and Mint Mobile.",
      "He was once voted People’s Sexiest Man Alive.",
      "Ryan’s first big break was on the sitcom 'Two Guys and a Girl'.",
      "He loves Canadian football and once aspired to be a cop!",
      "Ryan often writes witty tweets that go viral."
    ];

    wrapper.querySelector('#fact-btn').addEventListener('click', () => {
      const fact = facts[Math.floor(Math.random() * facts.length)];
      wrapper.querySelector('#fact').textContent = fact;
    });
  }
}

customElements.define('ryan-card', RyanCard);
