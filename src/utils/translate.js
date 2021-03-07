const translate = (inputWord) => {
    let characters = inputWord.toLowerCase().split("");
    let signs = [];
    for (let char in characters) {
        signs.push(require(`../assets/individial_signs/${characters[char]}.png`).default)
    }
    return signs;
}

export default translate;