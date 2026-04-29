const navItems = document.querySelectorAll(".nav-item");
const panels = document.querySelectorAll(".tab-panel");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    const target = item.dataset.tab;

    navItems.forEach((navItem) => navItem.classList.remove("active"));
    panels.forEach((panel) => panel.classList.remove("active"));

    item.classList.add("active");
    document.getElementById(target)?.classList.add("active");
  });
});

document.querySelectorAll('input[type="range"]').forEach((range) => {
  const label = range.closest(".slider-control")?.querySelector("strong");
  const originalPrecision = label?.textContent.split(".")[1]?.length ?? 0;

  const updateFill = () => {
    const min = Number(range.min || 0);
    const max = Number(range.max || 100);
    const value = Number(range.value);
    const percent = ((value - min) / (max - min)) * 100;
    range.style.background = `linear-gradient(90deg, var(--purple) 0 ${percent}%, rgba(255,255,255,.18) ${percent}%)`;

    if (label) {
      label.textContent = value.toFixed(originalPrecision);
    }
  };

  range.addEventListener("input", updateFill);
  updateFill();
});
