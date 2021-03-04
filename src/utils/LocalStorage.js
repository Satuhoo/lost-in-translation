const storage = window.localStorage;

const addToStorage = (inputWord) => {
    let storedTranslations = JSON.parse(storage.getItem("translations"));
    if (storedTranslations === null) {
        storedTranslations = [];
    }
    storedTranslations.push(inputWord);

    if (storedTranslations.length > 10) {
        storedTranslations.shift();
    }
    storage.setItem("translations", JSON.stringify(storedTranslations));
    console.log(storedTranslations)
}

export {storage, addToStorage};