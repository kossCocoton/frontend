import React, { createContext, useContext } from 'react';

const EmotionList = createContext();

const emotions = {
    yellow: { color: '#FFD700', emoji: '😁' },
    green: { color: '#28A745', emoji: '😐' },
    blue: { color: '#007BFF', emoji: '😫' },
    red: { color: '#FF5733', emoji: '😠' },
};

export const EmotionProvider = ({ children }) => {
    return (
        <EmotionList.Provider value={emotions}>
            {children}
        </EmotionList.Provider>
    );
};

export const useEmotions = () => {
    return useContext(EmotionList);
};
