const storage = window.localStorage;

const addToStorage = (inputWord) => {
    let storedTranslations = fetchTranslations();
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

const fetchTranslations = () => {
    let storedTranslations = JSON.parse(storage.getItem("translations"));
    return storedTranslations;
}

export {storage, addToStorage, fetchTranslations};