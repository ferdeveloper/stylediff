//defines a "CSS Diff" sidebar pane and sets its height
chrome.devtools.panels.elements.createSidebarPane(
  "Style Diff",
  function (sidebar) {
    "use strict";
    sidebar.setPage("sideBar.html");
    sidebar.setHeight("350px");
  }
);
