document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".research-home").forEach((root) => {
    root.querySelectorAll(".rh-highlight-groups").forEach((group, groupIndex) => {
      if (group.dataset.enhanced === "true") return;

      const details = Array.from(group.children).filter((item) =>
        item.matches("details.rh-highlight-group")
      );
      if (!details.length) return;

      const tabs = document.createElement("div");
      const panels = document.createElement("div");
      tabs.className = "rh-highlight-tabs";
      panels.className = "rh-highlight-panels";
      tabs.setAttribute("role", "group");
      tabs.setAttribute(
        "aria-label",
        root.lang.startsWith("zh") ? "代表工作分类" : "Research highlight categories"
      );

      details.forEach((detail, index) => {
        const summary = detail.querySelector(":scope > summary");
        const list = detail.querySelector(":scope > .rh-project-list");
        if (!summary || !list) return;

        const language = root.lang.startsWith("zh") ? "zh" : "en";
        const key = `rh-highlight-${language}-${groupIndex}-${index}`;
        const button = document.createElement("button");
        const panel = document.createElement("section");

        button.type = "button";
        button.className = "rh-highlight-tab";
        button.id = `${key}-tab`;
        button.innerHTML = summary.innerHTML;
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-controls", `${key}-panel`);

        panel.className = "rh-highlight-panel";
        panel.id = `${key}-panel`;
        panel.hidden = true;
        panel.setAttribute("role", "region");
        panel.setAttribute("aria-labelledby", button.id);
        panel.appendChild(list);

        button.addEventListener("click", () => {
          const shouldOpen = button.getAttribute("aria-expanded") !== "true";

          tabs.querySelectorAll(".rh-highlight-tab").forEach((tab) => {
            tab.setAttribute("aria-expanded", "false");
          });
          panels.querySelectorAll(".rh-highlight-panel").forEach((item) => {
            item.hidden = true;
          });

          if (shouldOpen) {
            button.setAttribute("aria-expanded", "true");
            panel.hidden = false;
          }
        });

        tabs.appendChild(button);
        panels.appendChild(panel);
      });

      group.replaceChildren(tabs, panels);
      group.dataset.enhanced = "true";
    });
  });
});
