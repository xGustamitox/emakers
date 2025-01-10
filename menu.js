document.addEventListener("DOMContentLoaded", () => {
    const openMenu = document.getElementById("openMenu");
    const closeMenu = document.getElementById("closeMenu");
    const menu = document.getElementById("menu");

    // Abre o menu
    openMenu.addEventListener("click", () => {
        menu.classList.add("active");
    });

    // Fecha o menu
    closeMenu.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});
