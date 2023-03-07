import {
    useParams
} from "react-router";

const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            characters: [],
            characterInfo: {},
            planets: [],
            planetInfo: {},
            starships: [],
            starshipInfo: {},
            favorites: [],
            auth: false,
        },

        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            // loadSomeData: () => {
            // 	/**
            // 		fetch().then().then(data => setStore({ "foo": data.bar }))
            // 	*/
            // 	fetch("https://www.swapi.tech/api/people/")
            // 	.then(res => res.json())
            // 	// .then(data => console.log(data))
            // 	.then((data) => setStore({characters:data.results}));
            // 	// .catch(err => console.error(err))
            // },

            // FETCH CHARACTERS
            charactersInfo: () => {
                /**
                	fetch().then().then(data => setStore({ "foo": data.bar }))
                */
                fetch("https://www.swapi.tech/api/people/")
                    .then(res => res.json())
                    // .then(data => console.log(data))
                    .then((data) => setStore({
                        characters: data.results
                    }));
                // .catch(err => console.error(err))
            },

            // FETCH SINGLE CHARACTER
            getcharacterInfo: (id) => {
                fetch("https://www.swapi.tech/api/people/" + id)
                    .then(res => res.json())
                    // .then(data => console.log(data))
                    .then((data) => setStore({
                        characterInfo: data.result
                    }))
                // .catch(err => console.error(err))
            },

            // FETCH PLANETS
            planetsInfo: () => {
                /**
                fetch().then().then(data => setStore({ "foo": data.bar }))
                */
                fetch("https://www.swapi.tech/api/planets/")
                    .then(res => res.json())
                    // .then(data => console.log(data))
                    .then((data) => setStore({
                        planets: data.results
                    }));
                // .catch(err => console.error(err))
            },

            // FETCH SINGLE PLANET
            getPlanetInfo: (id) => {
                fetch("https://www.swapi.tech/api/planets/" + id)
                    .then(res => res.json())
                    .then((data) => setStore({
                        planetInfo: data.result
                    }))
            },

            // FETCH STARSHIPS
            starshipsInfo: () => {
                fetch("https://www.swapi.tech/api/starships/")
                    .then(res => res.json())
                    // .then(data => console.log(data))
                    .then((data) => setStore({
                        starships: data.results
                    }));
                // .catch(err => console.error(err))
            },

            // FETCH SINGLE STARSHIP
            getStarshipInfo: (id) => {
                fetch("https://www.swapi.tech/api/starships/" + id)
                    .then(res => res.json())
                    .then((data) => setStore({
                        planetInfo: data.result
                    }))
            },

            // ADD TO FAVORITES
            agregarFavorito: (name) => {
                console.log(name);
                const store = getStore();
                setStore({
                    favorites: [...store.favorites, name]
                })
            },

            // REMOVE FROM FAVORITES
            removeFav: (index) => { //el index viene del map
                const store = getStore();
                const newList = store.favorites; //newList copia favorites
                newList.splice(index, 1); //splice le quita lo que está en el lugar index
                setStore({ //setStore({favorites:newList}) guarda la newList en favorites
                    favorites: newList
                });
                // console.log(store.favorites)
            },
        },

        // CHANGE COLOR
        changeColor: (index, color) => {
            //get the store
            const store = getStore();

            //we have to loop the entire demo array to look for the respective index
            //and change its color
            const demo = store.demo.map((elm, i) => {
                if (i === index) elm.background = color;
                return elm;
            });

            //reset the global store
            setStore({
                demo: demo
            });
        }


    }
};

export default getState;