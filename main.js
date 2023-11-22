const iTunesUrl = "https://itunes.apple.com/search?term=";
let searchForm = document.getElementById("searchForm");
let searchTerm = document.getElementById("searchField");
let button = document.getElementById("searchButton");
let display = document.getElementById("display");
// let preview = document.getElementById("preview");
let resultsCard = document.querySelectorAll(".resultsCard");
let previewButton = document.getElementById("previewButton");


    searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let term = []
    term = searchTerm.value 
    console.log({term});

    fetch(iTunesUrl + term + "&media=music").then((response) => {
    if (response.status === 200) {
        return response.json();
    } else {
        throw new Error("No results found")
    }

    }).then((parsedJsonResponse) => {
    console.log(parsedJsonResponse);
    const songs = parsedJsonResponse.display;
    display.innerHTML = []
    // if (songClips.length === 0) {
    //     let errorMsg = document.createElement("h2")
    //     errorMsg.innerText = "No results found"
    //     display.appendChild(errorMsg)
    // }


        return songs?.map(display => {
            const resultsCard = document.createElement('div');
            artist = document.createElement('h3');
            trackList = document.createElement('p');
            album = document.createElement('img');
            let audioPlay = document.createElement('button');

            audioPlay.innerText = "Play Preview";

            audioPlay.addEventListener('click', (event) => {
                event.preventDefault();
                previewButton.src = display.previewUrl
            });

            artist.innerHTML = display.artistName;
            trackList.innerHTML = display.trackName;
            ablbum.src = display.artworkUrl100;

            resultsCard.appendChild(album);
            resultsCard.appendChild(artist);
            resultsCard.appendChild(trackList);
            resultsCard.appendChild(playButton);

            results.appendChild(resultsCard);

        
            
        });
})
})

    // return songClips.map(results => {
    //     preview.innerHTML = `
    //     <figure>
    //         <figcaption id="previewTrackName">Preview:</figcaption>
    //         <audio controls src=""></audio>
    //         </figure>`,
    //         display.innerHTML += `
    //         <div class="songTitle">
    //             <img src=${results.artworkUrl100} />
    //             <button class="previewButton" data-id=${results.trackID}>${results.trackName}</button>
    //             <h3>${results.artistName}</h3>
    //             </div>
    //         `
            // // document.querySelectorAll(".previewButton").forEach(button =>{
            // //     button.addEventListener("click",function(){
            // //         const previewUrl = this.getAttribute("data-preview-Url")
            // //         const audioPlayer = document.getElementById("audioPlayer")
            // //         audioPlayer.src = previewUrl
            // //         audioPlayer.play()
            //     })
            // })

