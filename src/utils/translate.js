const translate = (inputWord) => {
    //Changes input word to lowercase and split it to list of characters
    let characters = inputWord.toLowerCase().split("");
    let signs = [];
    for (let char in characters) {
        //Checks if character is a letter
        if (characters[char].match(/[a-z]/)) {
            //If yes, creates path to image by same letter and save it to the list
            signs.push(require(`../assets/individial_signs/${characters[char]}.png`).default);
        } else {
            //If not, adds empty path
            signs.push("#");
        }
    }
    return signs;
}

export default translate;