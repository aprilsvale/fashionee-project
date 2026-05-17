import React, { createContext, useContext } from 'react';
import useLocalStorage from './useLocalStorage';

const FavoritesContext = createContext();

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;
};

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useLocalStorage('favorites', []);


    const favoritesCount = favorites.length;

    const addToFavorites = (product) => {
        setFavorites(prev => {
            const exists = prev.some(item => item.id === product.id);
            if (!exists) {
                return [...prev, product];
            }
            return prev;
        });
    };

    const removeFromFavorites = (productId) => {
        setFavorites(prev => prev.filter(item => item.id !== productId));
    };

    const toggleFavorite = (product) => {
        const isFavorite = favorites.some(item => item.id === product.id);
        if (isFavorite) {
            removeFromFavorites(product.id);
        } else {
            addToFavorites(product);
        }
    };

    const isFavorite = (productId) => {
        return favorites.some(item => item.id === productId);
    };

    return (
        <FavoritesContext.Provider value={{
            favorites,
            favoritesCount,
            addToFavorites,
            removeFromFavorites,
            toggleFavorite,
            isFavorite
        }}>
            {children}
        </FavoritesContext.Provider>
    );
};
