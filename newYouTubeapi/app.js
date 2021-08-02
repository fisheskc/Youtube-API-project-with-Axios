const api = 'Your personal API goes here for youtube';
const form = document.querySelector('#searchForm');
const searchUl = document.querySelector('#items');

form.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchTerm = form.elements.query.value
    const config = {headers: {Accept:'application/json'}}
    const res = await axios.get('https://www.googleapis.com/youtube/v3/search/?part=snippet&key=' + api, config);
    console.log(res.data.items[0].snippet.title)
    let searchVal = res.data.items[0].snippet.title
    // console.log(res.data.items[0].snippet.channeltitle);
    let newLi = document.createElement('li');
    newLi.innerHTML = searchVal
    document.body.append.newli
    searchUl.append(newLi);
})
