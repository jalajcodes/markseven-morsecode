const translateBtn = document.querySelector("#translate-btn");

const input = document.querySelector("#input");

const divOutput = document.querySelector("#output");

const url = "https://api.funtranslations.com/translate/morse.json";

const constructURL = (inputText) => {
    return `${url}?text=${inputText}`;
};

const translator = () => {
    const text = input.value;

    fetch(constructURL(text))
        .then((response) => response.json())
        .then((translatedInput) => {
            console.log(translatedInput);
            divOutput.innerText = translatedInput.contents.translated;
        })
        .catch((error) => {
            console.log(error);
            alert("Please try again after some time");
        });
};

translateBtn.addEventListener("click", translator);
