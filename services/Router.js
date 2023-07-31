const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        const url = event.target.getAttribute("href");
        Router.go(url);
      });
    });
    //Event handler for URL changes
    window.addEventListener("popstate", (event) => {
      Router.go(event.state.route, false);
    });

    //check initial path
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    console.log(
      `%c Going to route ->${route}`,
      "color: blue; background-color: lightgreen; font-weight: bold"
    );
    if (addToHistory) {
      history.pushState({ route }, "", route);
    }
    let pageEl = null;
    switch (route) {
      case "/":
        pageEl = document.createElement("menu-page");
        break;

      case "/order":
        pageEl = document.createElement("order-page");
        break;

      default:
        if (route.startsWith("/product/")) {
          pageEl = document.createElement("detail-page");
          const paramId = route.substring(route.lastIndexOf("/") + 1);
          pageEl.dataset.id = paramId;
        }
    }
    if (pageEl) {
      const cache = document.querySelector("main");
      cache.innerHTML = "";
      cache.appendChild(pageEl);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  },
};

export default Router;
