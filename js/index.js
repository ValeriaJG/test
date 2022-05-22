var menu_burger = document.getElementById("menu_burger");
var screenWidth = window.screen.width

function tick2() {
    if (active) {
        menu_burger.style.backgroundColor = "#fff";
    }
}

click();

// function click() {
//     this.menu_burger.addEventListener("click", function () {
//         if (document.getElementById("all_menu").style.display == 'none') {
//             document.getElementById("all_menu").style.display = 'block';
//             document.getElementById("menu_burger").style.backgroundColor = "#477a92";
//             console.log("1");
//         } else if (document.getElementById("all_menu").style.display = 'block') {
//             document.getElementById("all_menu").style.display = 'none';
//             document.getElementById("menu_burger").style.backgroundColor = "rgba(0,0,0,0)";
//             console.log("2");
//         }
//     });
// }

var elem = document.querySelector("#all_menu")
var burgerSelector = document.querySelector("#menu_burger");

function click() {
    this.menu_burger?.addEventListener("click", function () {
        elem.classList.toggle("animate");
        burgerSelector.classList.toggle("animate");
        // if (document.getElementById("all_menu").style.display == 'grid') {
        //     document.getElementById("all_menu").style.display = 'block';
        //     menu_burger.style.backgroundColor = "rgba(0,0,0,0)";
        // } else {
        //     document.getElementById("all_menu").style.display = 'grid';
        //     menu_burger.style.backgroundColor = "#477a92";
        // }
    });
}



