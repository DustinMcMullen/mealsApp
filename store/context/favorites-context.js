import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
});

export const FavoritesContextProvider = ({children}) => {
    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    function addFavorite (id) {
        setFavoriteMealIds( prevState => [...prevState, id] );
    }

    function removeFavorite (id) {
        setFavoriteMealIds( prevState =>
            prevState.filter( (mealId) => mealId !== id )
        );
    }

    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    };

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}