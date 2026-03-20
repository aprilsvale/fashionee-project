import React, { createContext, useState, useContext, useEffect } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;
};

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
    try {
        return JSON.parse(localStorage.getItem('favorites')) || [];
    } catch {
        return [];
    }
});

    useEffect(() => {
        try {
            localStorage.setItem('favorites', JSON.stringify(favorites));
        } catch (error) {
            console.error('Error saving favorites to localStorage:', error);
        }
    }, [favorites]);


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
