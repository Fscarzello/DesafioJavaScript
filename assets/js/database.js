const dataBaseA = (newJSON) => {

    fetch(newJSON)
    .then((response) => response.json())
    .then((data) => {

        initializationA(data);

    })
    .catch((er) => alertError(er))
    .finally(() => alertLoading());

}

const dataBaseB = (offerJSON) => {

    fetch(offerJSON)
    .then((response) => response.json())
    .then((data) => {

        initializationB(data);

    })
    .catch((er) => alertError(er))
    .finally(() => alertLoading());

}

document.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {

        dataBaseA(newJSON);
        dataBaseB(offerJSON);

    }, 500);

});