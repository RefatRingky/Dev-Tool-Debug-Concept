const elementById = (id) =>{
    // console.log(id);
   return document.getElementById(id);
};


const handleSearch = () =>{
 const keyword = elementById("keyword");
 const url = `https://theaudiodb.com/api/v1/json/2/search.php?s=${keyword.value}`;
  console.log(url);
  fetch(url)
  .then((res)=> res.json())
  .then((data) => showArtist(data));
};
const showArtist = ({artists}) =>{
  const artistContainer = elementById("artists")
  artists.forEach(artist => {
    const div = document.createElement('div');
    div.innerHTML =  `
        <p>${artist.strArtist}</p>
    `
    artistContainer.appendChild(div);
  });
  
};