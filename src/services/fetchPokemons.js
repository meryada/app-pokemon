const ENDPOINT = 'https://raw.githubusercontent.com/Adalab/m3-evaluacion-intermedia-oneeyedman/componentbranch/pokemons.json'

const fetchPokemones = () => {
    return fetch(ENDPOINT).then(res => res.json())
}

export { fetchPokemones };