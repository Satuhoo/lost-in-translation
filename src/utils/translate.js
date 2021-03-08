const translate = (inputWord) => {
    let characters = inputWord.toLowerCase().split("");
    let signs = [];
    for (let char in characters) {
        if (characters[char].match(/[a-z]/)) {
            signs.push(require(`../assets/individial_signs/${characters[char]}.png`).default);
        } else {
            signs.push("#");
        }
    }
    return signs;
}

export default translate;