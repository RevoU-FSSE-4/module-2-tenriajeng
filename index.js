document
    .getElementById("hamburger-icon")
    .addEventListener("click", function () {
        document.querySelector(".menu").classList.toggle("show-menu");
    });

document.addEventListener("DOMContentLoaded", function () {
    const gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach(function (item) {
        item.addEventListener("mouseenter", function () {
            gridItems.forEach(function (otherItem) {
                if (otherItem !== item) {
                    otherItem.classList.add("blur-filter");
                }
            });
        });

        item.addEventListener("mouseleave", function () {
            gridItems.forEach(function (otherItem) {
                otherItem.classList.remove("blur-filter");
            });
        });
    });
});