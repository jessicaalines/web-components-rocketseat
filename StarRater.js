class StarRater extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
  }

  build() {}

  styles() {
    const style = document.createElement("style");
    style.textContent = `
        .star-rater {
        }
        `;
  }
}

customElements.define("star-rater", StarRater);
