const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("site-navigation");

function setMenuOpen(open) {
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "关闭导航" : "打开导航");
  navigation.classList.toggle("is-open", open);
}

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});
navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuToggle.getAttribute("aria-expanded") === "true"
  ) {
    setMenuOpen(false);
    menuToggle.focus();
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) setMenuOpen(false);
});
window
  .matchMedia("(max-width: 680px)")
  .addEventListener("change", () => setMenuOpen(false));
document.getElementById("current-year").textContent = new Date().getFullYear();

if ("IntersectionObserver" in window) {
  const links = [...navigation.querySelectorAll("a")];
  const visibleSections = new Set();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visibleSections.add(entry.target.id);
        else visibleSections.delete(entry.target.id);
      });
      const current = links.find((link) =>
        visibleSections.has(link.hash.slice(1)),
      );
      links.forEach((link) => {
        const active = link === current;
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    },
    { rootMargin: "-20% 0px -35% 0px", threshold: 0 },
  );
  links.forEach((link) => observer.observe(document.querySelector(link.hash)));
}
