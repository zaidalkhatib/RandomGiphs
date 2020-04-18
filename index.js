function random() {
    randomNumber = Math.floor(Math.random() * 18) + 1;
    image = "Giphs/giphy" + randomNumber + ".gif";
    document.querySelectorAll("img")[0].setAttribute("src", image);
}