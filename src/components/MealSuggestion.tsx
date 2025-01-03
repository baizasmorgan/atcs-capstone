import React from 'react';

interface MealSuggestionProps {
    text: string;
  }

const MealSuggestion: React.FC<MealSuggestionProps> = ({ text }) => {
    const suggestMeal = (text: string) => {
        // Simple meal suggestion logic based on keywords
        if (text.toLowerCase().includes('beef')) {
            return 'How about a Beef Steak? You need to include more protein into your diet today. You have eaten a lot of carbs, but protein helps with building muscles!';
        } else if (text.toLowerCase().includes('steak')) {
            return 'How about a Beef Steak? You need to include more protein into your diet today. You have eaten a lot of carbs, but protein helps with building muscles!';
        } else if (text.toLowerCase().includes('beef steak')) {
            return 'How about a Beef Steak? You need to include more protein into your diet today. You have eaten a lot of carbs, but protein helps with building muscles!';
        } else if (text.toLowerCase().includes('salmon')) {
            return 'Both the Pan Roasted Salmon and Bone-in Prime Ribeye are great options for building muscle! If you want an option that will help with maintaining a healthier balance of fats, or you prefer leaner cuts of meat, choose the Pan-Roasted Salmon! If you want an option that has a higher protein content per serving, especially if you are following a bulking phase and looking to mazimize muscle growth through a calorie surplus, choose the Bone-In Ribeye!';
        } else if (text.toLowerCase().includes('ribeye')) {
            return 'Both the Pan Roasted Salmon and Bone-in Prime Ribeye are great options for building muscle! If you want an option that will help with maintaining a healthier balance of fats, or you prefer leaner cuts of meat, choose the Pan-Roasted Salmon! If you want an option that has a higher protein content per serving, especially if you are following a bulking phase and looking to mazimize muscle growth through a calorie surplus, choose the Bone-In Ribeye!';
        } else {
            return 'Both the Pan Roasted Salmon and Bone-in Prime Ribeye are great options for building muscle! If you want an option that will help with maintaining a healthier balance of fats, or you prefer leaner cuts of meat, choose the Pan-Roasted Salmon! If you want an option that has a higher protein content per serving, especially if you are following a bulking phase and looking to mazimize muscle growth through a calorie surplus, choose the Bone-In Ribeye!';
        }
    };

    const mealSuggestion = suggestMeal(text);

    return (
        <div>
            <h2>Meal Suggestion</h2>
            <p>{mealSuggestion}</p>
        </div>
    );
};

export default MealSuggestion;