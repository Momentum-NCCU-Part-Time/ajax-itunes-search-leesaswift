const iTunesUrl = "https://itunes.apple.com/search?term=";
const limit = "&limit=20";
let searchForm = document.getElementById("searchForm");
let searchTerm = document.getElementById("searchField");
let button = document.getElementById("searchButton");
let display = document.getElementById("display");
let preview = document.getElementById("preview");
let previewButton = document.getElementById("previewButton")
searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let term = searchTerm.value;
    console.log({term});
    fetch(iTunesUrl + term + limit, {
        method: "Get",
        headers: {"Content-Type": "application/json"},
}).then((response) => {
    if (response.status === 200) {
        return response.json();
    } else {
        let errorMsg = document.createElement ('h2');
        errorMsg.innerText = "No results found";
        display.appendChild(errorMsg);
    }
}).then((parsedJsonResponse) => {
    console.log(parsedJsonResponse);
    const songClips = parsedJsonResponse.results;
    return songClips.map(results => {
        preview.innerHTML = `
        <figure>
            <figcaption id="previewTrackName">Preview:</figcaption>
            <audio controls src=""></audio>
            </figure>`,
            display.innerHTML += `
            <div class="songTitle">
                <img src=${results.artworkUrl100} />
                <button class="previewButton" data-id=${results.trackID}>${results.trackName}</button>
                <h3>${results.artistName}</h3>
                </div>
            `
    })
})
})
