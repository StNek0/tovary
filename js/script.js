const URL = 'http://localhost:3000/TOVARS';
const BUTTON = document.querySelector('.btn');
const LIST = document.querySelector('.list');

const getDatabase = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

BUTTON.addEventListener('click', async () => {
   let data = await getDatabase(URL);
   LIST.innerHTML = '';
   for (let key in data) {
       LIST.insertAdjacentHTML('beforeend', `
       <li>
           <div class="info">
               <img src="${data[key]["avatar"]}">
               <span class="name">${data[key]["name"]}</span>
           </div>
           <div class="reactions">
               <span class="views">Cost ${data[key]["cost"]}</span>
               <span class="likes">Number ${data[key]["number"]}</span>
           </div>
       </li>`);
   }
   BUTTON.innerHTML = 'Славься J!';
   BUTTON.style.background = 'white';
   BUTTON.style.color = 'black';
   BUTTON.style.cursor = 'auto';
});