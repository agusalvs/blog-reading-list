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
            // favoritos:["Luke","Leia"]
            favorites: [],
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

            getcharacterInfo: (id) => {
                fetch("https://www.swapi.tech/api/people/" + id)
                    .then(res => res.json())
                    // .then(data => console.log(data))
                    .then((data) => setStore({
                        characterInfo: data.result
                    }))
                // .catch(err => console.error(err))
            },



            agregarFavorito: (name) => {
                console.log(name);
                const store = getStore();
                setStore({
                    favorites: [...store.favorites, name]
                })
            }
        },

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