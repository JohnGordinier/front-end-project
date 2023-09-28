const anyJokeBtn = document.createElement("button");
anyJokeBtn.textContent = "Any";
anyJokeBtn.id = "anyJoke";

const dirtyJokeBtn = document.createElement("button");
dirtyJokeBtn.textContent = "Dark";
dirtyJokeBtn.id = "dirtyJoke";

const programmingJokeBtn = document.createElement("button");
programmingJokeBtn.textContent = "Programming";
programmingJokeBtn.id = "programmingJoke";

const punJokeBtn = document.createElement("button");
punJokeBtn.textContent = "Pun";
punJokeBtn.id = "punJoke";

const spookyJokeBtn = document.createElement("button");
spookyJokeBtn.textContent = "Spooky";
spookyJokeBtn.id = "spookyJoke";

const christmasJokeBtn = document.createElement("button");
christmasJokeBtn.textContent = "Christmas";
christmasJokeBtn.id = "christmasJoke";

const resultsContainer = document.createElement("div");
const myAudio = document.createElement("audio");
document.body.appendChild(anyJokeBtn);
document.body.appendChild(dirtyJokeBtn);
document.body.appendChild(programmingJokeBtn);
document.body.appendChild(punJokeBtn);
document.body.appendChild(spookyJokeBtn);
document.body.appendChild(christmasJokeBtn);
document.body.appendChild(resultsContainer);
document.body.appendChild(myAudio);

function playSound(soundURL) {
  setTimeout(() => {
    myAudio.src = soundURL;
    myAudio.play();
  }, 3000); // 3000 milliseconds (3 seconds)
}

anyJokeBtn.addEventListener("click", function () {
  // Use the fetch API to make the HTTP request
  fetch("https://v2.jokeapi.dev/joke/Any")
    .then((response) => response.json())
    .then((data) => {
      const anyJokeData = data;
      resultsContainer.innerHTML = "";
      console.log(anyJokeData);

      if (data.type === "single") {
        const jokeResult = document.createElement("div");
        jokeResult.classList.add("results");
        jokeResult.textContent = data.joke;
        resultsContainer.appendChild(jokeResult);
      } else if (data.type === "twopart") {
        const setupResult = document.createElement("div");
        setupResult.classList.add("results");
        setupResult.textContent = data.setup;
        resultsContainer.appendChild(setupResult);

        const deliveryResult = document.createElement("div");
        deliveryResult.classList.add("results");
        deliveryResult.textContent = data.delivery;
        resultsContainer.appendChild(deliveryResult);
      }
      playSound(
        "https://v1.cdnpk.net/videvo_files/audio/premium/audio0125/watermarked/LaughterCrowd%20AR02_22_2_preview.mp3"
      );
    });
});

dirtyJokeBtn.addEventListener("click", function () {
  fetch("https://v2.jokeapi.dev/joke/Dark")
    .then((response) => response.json())
    .then((data) => {
      const dirtyJokeData = data;
      resultsContainer.innerHTML = "";
      console.log(dirtyJokeData);

      if (data.type === "single") {
        const jokeResult = document.createElement("div");
        jokeResult.classList.add("results");
        jokeResult.textContent = data.joke;
        resultsContainer.appendChild(jokeResult);
      } else if (data.type === "twopart") {
        const setupResult = document.createElement("div");
        setupResult.classList.add("results");
        setupResult.textContent = data.setup;
        resultsContainer.appendChild(setupResult);

        const deliveryResult = document.createElement("div");
        deliveryResult.classList.add("results");
        deliveryResult.textContent = data.delivery;
        resultsContainer.appendChild(deliveryResult);
      }
      playSound(
        "https://audio-previews.elements.envatousercontent.com/files/85975072/preview.mp3?response-content-disposition=attachment%3B+filename%3D%22QM84A6S-shocked-gasp-from-female-studio-audience.mp3%22"
      );
    });
});

programmingJokeBtn.addEventListener("click", function () {
  fetch("https://v2.jokeapi.dev/joke/Programming")
    .then((response) => response.json())
    .then((data) => {
      const programmingJokeData = data;
      resultsContainer.innerHTML = "";
      console.log(programmingJokeData);

      if (data.type === "single") {
        const jokeResult = document.createElement("div");
        jokeResult.classList.add("results");
        jokeResult.textContent = data.joke;
        resultsContainer.appendChild(jokeResult);
      } else if (data.type === "twopart") {
        const setupResult = document.createElement("div");
        setupResult.classList.add("results");
        setupResult.textContent = data.setup;
        resultsContainer.appendChild(setupResult);

        const deliveryResult = document.createElement("div");
        deliveryResult.classList.add("results");
        deliveryResult.textContent = data.delivery;
        resultsContainer.appendChild(deliveryResult);
      }
      playSound(
        "https://assets.mixkit.co/active_storage/sfx/424/424-preview.mp3"
      );
    });
});

punJokeBtn.addEventListener("click", function () {
  fetch("https://v2.jokeapi.dev/joke/Pun")
    .then((response) => response.json())
    .then((data) => {
      const punJokeData = data;
      resultsContainer.innerHTML = "";
      console.log(punJokeData);

      if (data.type === "single") {
        const jokeResult = document.createElement("div");
        jokeResult.classList.add("results");
        jokeResult.textContent = data.joke;
        resultsContainer.appendChild(jokeResult);
      } else if (data.type === "twopart") {
        const setupResult = document.createElement("div");
        setupResult.classList.add("results");
        setupResult.textContent = data.setup;
        resultsContainer.appendChild(setupResult);

        const deliveryResult = document.createElement("div");
        deliveryResult.classList.add("results");
        deliveryResult.textContent = data.delivery;
        resultsContainer.appendChild(deliveryResult);
      }
      playSound(
        "https://assets.mixkit.co/active_storage/sfx/2882/2882-preview.mp3"
      );
    });
});

spookyJokeBtn.addEventListener("click", function () {
  fetch("https://v2.jokeapi.dev/joke/Spooky")
    .then((response) => response.json())
    .then((data) => {
      const spookyJokeData = data;
      resultsContainer.innerHTML = "";
      console.log(spookyJokeData);

      if (data.type === "single") {
        const jokeResult = document.createElement("div");
        jokeResult.classList.add("results");
        jokeResult.textContent = data.joke;
        resultsContainer.appendChild(jokeResult);
      } else if (data.type === "twopart") {
        const setupResult = document.createElement("div");
        setupResult.classList.add("results");
        setupResult.textContent = data.setup;
        resultsContainer.appendChild(setupResult);

        const deliveryResult = document.createElement("div");
        deliveryResult.classList.add("results");
        deliveryResult.textContent = data.delivery;
        resultsContainer.appendChild(deliveryResult);
      }
      playSound(
        "https://assets.mixkit.co/active_storage/sfx/421/421-preview.mp3"
      );
    });
});

christmasJokeBtn.addEventListener("click", function () {
  fetch("https://v2.jokeapi.dev/joke/Christmas")
    .then((response) => response.json())
    .then((data) => {
      const christmasJokeData = data;
      resultsContainer.innerHTML = "";
      console.log(christmasJokeData);

      if (data.type === "single") {
        const jokeResult = document.createElement("div");
        jokeResult.classList.add("results");
        jokeResult.textContent = data.joke;
        resultsContainer.appendChild(jokeResult);
      } else if (data.type === "twopart") {
        const setupResult = document.createElement("div");
        setupResult.classList.add("results");
        setupResult.textContent = data.setup;
        resultsContainer.appendChild(setupResult);

        const deliveryResult = document.createElement("div");
        deliveryResult.classList.add("results");
        deliveryResult.textContent = data.delivery;
        resultsContainer.appendChild(deliveryResult);
      }
      playSound(
        "http://soundfxcenter.com/holiday-and-festive/christmas/8d82b5_Santa_Claus_Laugh_Sound_Effect.mp3"
      );
    });
});
