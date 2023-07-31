const API = {
  url: "/data/menu.json",
  fetchMenu: async () => {
    const result = await fetch(API.url);
    return result.json();
  },
};

export default API;
