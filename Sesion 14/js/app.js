$( document ).ready(function(){
   $("#myModal").click();
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

$(".btn-secondary").click(function(){
    let id = getRandomInt(1,151);
    let _this = $(this);
        $(this).text("POKEMON CATCHED!!!...").attr("disabled", true);

    $.get(`https://pokeapi.co/api/v2/pokemon/${id}`, 
        function(data) {
            console.log('Pokemon Catched!!!');
            console.log(data);

            const pokemon = {
                img: data.sprites.other.dream_world.front_default,
                name: data.name,
                hp: data.stats[0].base_stat,
                xp: data.base_experience,
                attack: data.stats[1].base_stat,
                special: data.stats[3].base_stat,
                defense: data.stats[2].base_stat,
                thumbnail: data.sprites.back_default
            }
            
            drawCard(pokemon);
            drawPokemon(pokemon);

            $(".pokedex").css('display', 'none');
            $(".pokeball").css('display', 'none');
        }
    )
});

const drawPokemon = (pokemon) => {
    const modal = document.querySelector('.modal-body');
    const templatePokemon = document.querySelector('#template-pokemon').content;
    const clone = templatePokemon.cloneNode(true);
    const fragment = document.createDocumentFragment();

    clone.querySelector('.card-pokemon').setAttribute('src', pokemon.thumbnail);

    fragment.appendChild(clone);
    modal.appendChild(fragment);
}

const drawCard = (pokemon) => {
    const flex = document.querySelector('.flex');
    const template = document.querySelector('#template-card').content;
    const clone = template.cloneNode(true);
    const fragment = document.createDocumentFragment();

    clone.querySelector('.card-body-img').setAttribute('src', pokemon.img);
    clone.querySelector('.card-body-title').innerHTML = `${pokemon.name} <span>${pokemon.hp} hp</span>`;
    clone.querySelector('.card-body-text').textContent = pokemon.xp + ' Exp';
    clone.querySelectorAll('.card-footer-social h3')[0].textContent = pokemon.attack + 'K';
    clone.querySelectorAll('.card-footer-social h3')[1].textContent = pokemon.special + 'K';
    clone.querySelectorAll('.card-footer-social h3')[2].textContent = pokemon.defense + 'K';

    fragment.appendChild(clone);
    flex.appendChild(fragment);
}