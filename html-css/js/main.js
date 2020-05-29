const headerbar = document.querySelector(".header-bg");

const rem = parseInt(getComputedStyle(document.documentElement).fontSize);

scrollCheck = () => {
  let y = window.scrollY;
  console.log(y);
  if (y > 5 * rem) {
    console.log("yep");
    headerbar.style.backgroundColor = "var(--background-color)";
  } else {
    headerbar.style.backgroundColor = "transparent";
  }
};

window.addEventListener("scroll", scrollCheck);
