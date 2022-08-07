class AppRoot extends HTMLElement {
    static css = `
    *{
      margin: 0;
      padding: 0;
    }
  
    .para1{
      color: purple;
      font-size: 24px;
    }
  
    .para1::selection{
      color: blue;
      background: lightgray;
    }
    `;
    constructor() {
      super();
  
      this.attachShadow({ mode: "open" });
  
      let style = document.createElement("style");
      style.textContent = AppRoot.css;
  
      this.shadowRoot.innerHTML = "<p class=\"para1\">This is a custom html element generated using javascript.";
      this.shadowRoot.append(style);
    }
  }
  
  customElements.define('app-root', AppRoot);