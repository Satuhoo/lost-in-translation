const storage = window.localStorage;

const addToStorage = (inputWord) => {
    let storedTranslations = fetchTranslations();

    //Checks translations from storage and creates new empty array if there is not stored translations
    if (storedTranslations === null) {
        storedTranslations = [];
    }
    storedTranslations.push(inputWord); //Adds new word to translations list

    //Checks if there is more than 10 translations in the list
    if (storedTranslations.length > 10) {
        storedTranslations.shift(); //If yes removes first one
    }
    //Saves changed translations list to local storage
    storage.setItem("translations", JSON.stringify(storedTranslations));
}

//Fetchs translations list from local storage
const fetchTranslations = () => {
    let storedTranslations = JSON.parse(storage.getItem("translations"));
    return storedTranslations;
}

export {storage, addToStorage, fetchTranslations};