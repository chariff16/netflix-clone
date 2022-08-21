let Buttons = document.querySelectorAll(".cont button");
for (let button of Buttons) {
  button.addEventListener("click", () => {
    let allContent = document.querySelectorAll(".content");
    for (let content of allContent) {
      if (
        content.getAttribute("data-number") ===
        button.getAttribute("data-number")
      ) {
        if (content.style.display != "block") {
          content.style.display = "block";
        } else {
          content.style.display = "none";
        }
      } else {
        content.style.display = "none";
      }
    }
  });
}