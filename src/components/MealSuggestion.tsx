import React from 'react';

interface MealSuggestionProps {
    text: string;
  }

const MealSuggestion: React.FC<MealSuggestionProps> = ({ text }) => {
    const suggestMeal = (text: string) => {
        // Simple meal suggestion logic based on keywords
        if (text.toLowerCase().includes('chicken')) {
            return 'How about a Chicken Salad?';
        } else if (text.toLowerCase().includes('pasta')) {
            return 'You could make a Pasta Primavera!';
        } else if (text.toLowerCase().includes('salad')) {
            return 'A fresh Garden Salad would be great!';
        } else if (text.toLowerCase().includes('soup')) {
            return 'How about a warm Tomato Soup?';
        } else {
            return 'Try making a Stir-fry with whatever you have!';
        }
    };

    const mealSuggestion = suggestMeal(text);

    return (
        <div>
            <h2>OCR Result:</h2>
            <p>{text}</p>
            <h2>Meal Suggestion</h2>
            <p>{mealSuggestion}</p>
        </div>
    );
};

export default MealSuggestion;