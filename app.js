let btn = document.querySelector("#btn");
let bg = document.querySelector("#container");
let txt = document.querySelector("#quote");

function randomColor() {
    function colorNum() {
        return Math.round(Math.random(0,1)*255);
    }
    let r = colorNum();
    let g = colorNum();
    let b = colorNum();
    color = `rgb(${r},${g},${b})`;

    btn.style.backgroundColor = color;
    txt.style.color = color;
    bg.style.backgroundColor = color;
}

function randomQuote() {
    let punchlines = [
        "Chuck Norris ne sait pas à quoi ressemble Nicolas Sarkozy, en effet Chuck Norris ne baisse jamais les yeux.",
        "Un jour Chuck Norris a eu un zéro en latin, depuis c'est une langue morte.",
        "L'avenir se demande parfois ce que Chuck Norris lui réserve.",
        "Une seule Tortue Ninja a osé défier Chuck Norris. Maintenant on l'appelle Franklin.",
        "Chuck Norris n'a pas de père. On ne nique pas la mère de Chuck Norris.",
        "Un jour un mec a refusé de filer une clope à Chuck Norris. Depuis, on prévient sur tous les paquets que \"Fumer tue\".",
        "Chuck Norris n'est pas égal à lui-même, il est meilleur.",
        "Quand Chuck Norris va a la plage , le soleil met de la crème solaire.",
        "Chuck Norris a déja frôlé la mort....elle ne s'en est jamais remise.",
        "Quand Chuck Norris frappe, les bleus sont héréditaires."
    ]
    let i = Math.floor(Math.random(0, 1)*punchlines.length);
    txt.innerHTML =punchlines[i];
}

function getRandom() {
    randomQuote();
    randomColor();
}

getRandom();
btn.addEventListener("click", getRandom);