const accessKey = "SvBxOs0JM_Eg3-QYCpI53_DH7smVALe5gdjUxZe8pws";
const secretKey = "uwJTnrnJhEf6dB1bZuy-uz3IRk2P7QW6LenG2uCzza4";

const searchForm = document.querySelector('#search-form');
const searchBox = document.querySelector('#search-box');
const searchResult = document.querySelector('#search-result');
const showhMoreBtn = document.querySelector('#show-more-btn');

let keyword = "";
let per_page = 12;
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=${per_page}`

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    const results = data.results;

    results.map((result) => {
        const image = document.createElement('img');
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_";
        imageLink.append(image);
        searchResult.append(imageLink);
    })
    showhMoreBtn.style.display = "block"
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showhMoreBtn.style.display = "none"
    searchResult.innerHTML = '';
    page = 1;
    searchImages();
})

showhMoreBtn.addEventListener('click', (e) => {
    page++;
    searchImages();
})