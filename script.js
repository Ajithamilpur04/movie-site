const APILINK= 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=58787eac49199bf6a9080ff207871aae&page=1';
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=58787eac49199bf6a9080ff207871aae&query=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMoives(APILINK)
function returnMoives(url){
  fetch(url).then(res => res.json())
  .then(function(data){
    console.log(data.results);
    data.results.forEach(element => {
      const div_card = document.createElement('div');
      div_card.setAttribute('class', 'card');
      
      const div_row = document.createElement('div');
      div_row.setAttribute('class', 'row');
      
      const div_column = document.createElement('div');
      div_column.setAttribute('class', 'column');
      
      const image = document.createElement('img');
      image.setAttribute('class', 'thumbnail');
      image.setAttribute('id', 'image');
      
      const title = document.createElement('h3');
      title.setAttribute('id', 'title');
      title.setAttribute('class','ajit');
      
      const center = document.createElement('center');
      title.innerHTML = `${element.title}`;
      image.src = IMG_PATH + element.poster_path;
      center.appendChild(image);
      div_card.appendChild(center);
      div_column.onclick = function(){
        window.location.href= 'https://www.google.com/search?q='+element.title;
      }
      div_column.appendChild(div_card);
      div_column.appendChild(title);
      div_row.appendChild(div_column);
      main.appendChild(div_row);
    });
    
  });
  
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = '';
  
  const searchItem = search.value;
  
  if(searchItem){
    returnMoives(SEARCHAPI + searchItem);
    search.value = "";
  }
});

