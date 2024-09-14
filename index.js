function showAnswer(response) {
  let jokeElement = document.querySelector("#joke");
  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 40,
  });
}

function generateJoke(event) {
  event.preventDefault();
  let apiKey = "09te212a1c952dfb01916b44eoad6c23";
  let context =
    "you are an intelligent AI Assistant, who provides funny jokes about cheese";
  let prompt = "tell me a joke about cheese";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let jokeElement = document.querySelector("#joke");
  jokeElement.innerHTML = "Generating a joke for you...";
  axios.get(apiUrl).then(showAnswer);
}

let jokeButton = document.querySelector("#joke-button");
jokeButton.addEventListener("click", generateJoke);
