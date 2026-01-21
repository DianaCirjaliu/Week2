//https://api.agify.io?name=michael

const searchInput = document.querySelector('#searchInput');
const result = document.querySelector('#result');


const renderAge = function (data, className = ''){
    const age = data?.age ?? '—';

    result.innerHTML = `<div class="large-text"${className} style="font-size: 80px; align-self: center;">${age} years</div>  `;
   result.style.opacity = 1;


}

const displayAge = function(name){
   fetch(`https://api.agify.io?name=${encodeURIComponent(name)}`)
    .then (response => response.json())
    .then (data =>renderAge(data));
}

function handleSearch()
{
    const name = searchInput.value.trim();

    if(name){
        displayAge(name);
    }
}

//press enter -> result
searchInput.addEventListener('keydown', function(event){
    if(event.key === 'Enter')
    {
        handleSearch();
    }

});

