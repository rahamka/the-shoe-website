let burger_icon = document.getElementById("burger-icon");
let links = document.getElementById("links");
let right_arrow = document.getElementById("right-arrow");

burger_icon.addEventListener("click", () => {
  links.classList.toggle("hidden");
  burger_icon.classList.add("hidden");
});

right_arrow.addEventListener("click", () => {
  links.classList.toggle("hidden");
  burger_icon.classList.remove("hidden");
});

let hidden_para = document.querySelectorAll(".visible-para");

if (window.innerWidth < 768) {
  hidden_para.forEach((val) => {
    val.remove();
  });
}

window.addEventListener("resize", (e) => {
  if (window.innerWidth > 768) {
    hidden_para.forEach((val) => {
      val.classList.add("block");
      val.classList.remove("hidden");
    });
  } else if (window.innerWidth < 768) {
    hidden_para.forEach((val) => {
      val.classList.add("hidden");
      val.classList.remove("block");
    });
  }
});
