// //////////////////////
// HTTP GET request
// //////////////////////

// 1. Select elements
// id: keyword, submit, results
const input = document.querySelector("#keyword");
const submit = document.querySelector("#submit");
const results = document.querySelector("#results");

const displayMovies = (data) => {
  // 3. Change the DOM
  data.Search.forEach((movie) => {
    results.insertAdjacentHTML(
      "beforeend",
      `<li class='list-inline-item'>
        <img src="${movie.Poster}" alt="movie" />
        <p>${movie.Title}</p>
      </li>`
    );
  });
};

const fetchOmdbAPI = (keyword) => {
  const url = `http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`;
  // 2.5. Fetch the API
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      displayMovies(data);
    });
};

// 2. Listen to a click
submit.addEventListener("click", (event) => {
  event.preventDefault();
  fetchOmdbAPI(input.value);
});
