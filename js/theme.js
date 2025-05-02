document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("theme-toggle-btn")
    const htmlElement = document.documentElement
  
    // Verificar se há um tema salvo no localStorage
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      htmlElement.className = savedTheme
    }
  
    // Alternar entre temas
    themeToggleBtn.addEventListener("click", () => {
      if (htmlElement.classList.contains("dark")) {
        htmlElement.classList.remove("dark")
        htmlElement.classList.add("light")
        localStorage.setItem("theme", "light")
      } else {
        htmlElement.classList.remove("light")
        htmlElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
      }
    })
  })