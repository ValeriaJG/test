var menu_services_menu = document.getElementById("menu_services_menu");

this.menu_services_menu.addEventListener("click", function () {
    document.getElementById("services_menu").classList.toggle("active");
    document.getElementById("all_services_menu").classList.toggle("active");
    document.getElementById("menu_services_menu").classList.toggle("active");
});
