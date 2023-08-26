const breedName = document.querySelector('#breed-name');
const catNames = document.querySelector('#alias-name');
const description = document.querySelector('#description')
const temperament = document.querySelector('#temperament')
const lifeSpan = document.querySelector('#life-span')
const origin = document.querySelector('#origin')
const source = document.querySelector('#source')
const btn = document.querySelector('.refresh-btn')
const img = document.querySelector('.image');

const url = 'https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1'

async function randomCats(){
    const request = new Request(
        url,
        {
            headers :{
                'x-api-key':'live_pXDy3ndbRf4EGGUg6hpFJtQex0JLUdYYUnaouIx5PG0jrMK2dtLQgno2jfqtL4Rt'
            }
        }
    )
    const res = await fetch(request)
    const data = await res.json()
    const breed = await data[0]
    const breedInfo = await breed.breeds[0]
    img.src = breed.url
    breedName.innerHTML = breedInfo.name 
    catNames.innerHTML = breedInfo.alt_names ?? 'yawa'
    description.innerHTML = breedInfo.description
    temperament.innerHTML = breedInfo.temperament
    lifeSpan.innerHTML = breedInfo.life_span
    origin.innerHTML = breedInfo.origin
    source.href = breedInfo.wikipedia_url
}


randomCats();

btn.addEventListener('click', function(){
    randomCats()
})