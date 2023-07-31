export class MenuPage extends HTMLElement {
  constructor() {
    super();
    // this.root = this.attachShadow({ mode: "open" });
    const styles = document.createElement("style");
    // this.root.appendChild(styles);

    async function loadCSS() {
      const req = await fetch("/components/MenuPage.css");
      const css = await req.text();
      styles.textContent = css;
    }
    loadCSS();
  }

  //When component is attached to DOM
  connectedCallback() {
    const template = document.getElementById("menu-page-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);

    window.addEventListener("appmenuchanged", () => {
      this.render();
    });
  }

  render() {
    if (app.store.menu) {
      for (let cat of app.store.menu) {
        const liCat = document.createElement("li");
        liCat.innerHTML = `
         <h3>${cat.name}</h3>
         <ul class = "category"></ul>
         `;
      }
    } else {
      this.root.querySelector("#menu").innerHTML = "Loading...";
    }
  }
}

customElements.define("menu-page", MenuPage);
