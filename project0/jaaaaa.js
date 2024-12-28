document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");

    // Переход на страницу при выборе "Да"
    yesButton.addEventListener("click", () => {
        window.open("timontozavr_bio.html", "_blank"); // Открыть новую вкладку
    });

});
