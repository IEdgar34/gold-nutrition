window.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".burger");
    const menuNav = document.querySelector(".header-nav");
    const menuNavItems = document.querySelectorAll(".header-nav-menu_item_link");
    const wrapper = document.querySelector(".wrapper");
    menuButton.addEventListener("pointerdown", toggle);
    menuNavItems.forEach((item) => {
        item.addEventListener("click", toggle);
    });

    function toggle(event) {
        if (event.button === 0 && window.innerWidth <= 1199) {
            menuButton.classList.toggle("burger_active");
            menuNav.classList.toggle("header-nav_active");
            document.body.classList.toggle("overflow");
            wrapper.classList.toggle("overflow");
        }
    }
});
