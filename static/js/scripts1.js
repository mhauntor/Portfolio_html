const theme = {
  dark: {
    icon: "fas fa-moon",
    background: "#2C3545",
    color: "#FFF"
  },
  light: {
    icon: "fas fa-sun",
    background: "#FFF",
    color: "#CC5D03"
  }
};

const change = () => {
  const body = document.body;
  const tgl = document.getElementById("tgl");
  const currentTheme = body.classList.contains("dark") ? "light" : "dark";

  // Add rotate class to the icon
  tgl.classList.add("rotate");

  // Update theme and transform mode over 2 seconds
  body.style.transitionDuration = "2s";
  body.style.backgroundColor = theme[currentTheme].background;
  tgl.style.transitionDuration = "2s";
  tgl.style.color = theme[currentTheme].color;
  body.classList.remove("dark", "light");
  body.classList.add(currentTheme);

  // Update icon after 2 seconds
  setTimeout(() => {
    tgl.className = theme[currentTheme].icon;
    tgl.classList.remove("rotate");
  }, 600);
};
