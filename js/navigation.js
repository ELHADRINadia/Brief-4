window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("aside .icon");
  const pages = ["products-page", "statistics-page", "add-product-page"];
  const navigate = (name) => {
    tabs.forEach((tab) =>
      tab.id === name
        ? tab.classList.add("active-tab")
        : tab.classList.remove("active-tab")
    );
    pages.forEach((page) => {
      page != name
        ? document
            .querySelectorAll(`.${page}`)
            .forEach((p) => (p.style.display = "none"))
        : document
            .querySelectorAll(`.${page}`)
            .forEach((p) => (p.style.display = "flex"));
    });
  };
  tabs.forEach((tab) => (tab.onclick = () => navigate(tab.id)));
});
