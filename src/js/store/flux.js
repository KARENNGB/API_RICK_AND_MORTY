const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters : [], 
			locations : [],
			episodes : [],
			favorites : [],
			character : [],
		},
		actions: {
			getCharacters : async() => {
				const response = await fetch("https://rickandmortyapi.com/api/character")
				const data = await response.json();
				setStore({characters: data.results
				})
			},
			getLocations : async() => {
				const response = await fetch("https://rickandmortyapi.com/api/location")
				const data = await response.json();
				setStore({locations: data.results
				})
			},
			getEpisodes : async() => {
				const response = await fetch("https://rickandmortyapi.com/api/episode")
				const data = await response.json();
				setStore({episodes: data.results
				})
			},
			handleFav: (addFav) => {
				const store = getStore()
				setStore({favorites: [...store.favorites, addFav] 
				})
				console.log(store.favorites)
			},
			handleDel: (deleteFav) => {
				const store = getStore()
				const newList = store.favorites.filter( (item) =>item !== deleteFav)
				setStore({favorites: newList 
				})
				console.log(store.favorites)
			},
			getSingleCharacter : async(id) => {
				const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
				const data = await response.json();
				setStore({character: data
				})
			},
	}
}
};


export default getState;
