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
            return 'Both the Pan Roasted Salmon and Bone-in Prime Ribeye are great options for building muscle! If you want an option that will help with maintaining a healthier balance of fats, or you prefer leaner cuts of meat, choose the Pan-Roasted Salmon! If you want an option that has a higher protein content per serving, especially if you are following a bulking phase and looking to maximize muscle growth through a calorie surplus, choose the Bone-In Ribeye!';
        } else if (text.toLowerCase().includes('ribeye')) {
            return 'Both the Pan Roasted Salmon and Bone-in Prime Ribeye are great options for building muscle! If you want an option that will help with maintaining a healthier balance of fats, or you prefer leaner cuts of meat, choose the Pan-Roasted Salmon! If you want an option that has a higher protein content per serving, especially if you are following a bulking phase and looking to maximize muscle growth through a calorie surplus, choose the Bone-In Ribeye!';
        } else {
            return 'Both the Pan Roasted Salmon and Bone-in Prime Ribeye are great options for building muscle! If you want an option that will help with maintaining a healthier balance of fats, or you prefer leaner cuts of meat, choose the Pan-Roasted Salmon! If you want an option that has a higher protein content per serving, especially if you are following a bulking phase and looking to maximize muscle growth through a calorie surplus, choose the Bone-In Ribeye!';
        }
    };

    const mealSuggestion = suggestMeal(text);

    return (
        <div style={styles.container}>
            <p style={styles.mealText}>{mealSuggestion}</p>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',               // Use flexbox to center
        justifyContent: 'center',      // Horizontally center the content
        alignItems: 'center',          // Vertically center the content
        height: '50vh',               // Take up full viewport height
        textAlign: 'center',           // Ensure text inside <p> is centered as well
        padding: '20px',               // Add some padding for better spacing (optional)
    },
    mealText: {
        fontSize: '18px',              // Adjust font size as needed
        lineHeight: '1.5',             // Improve readability
        maxWidth: '600px',             // Optional: Limit the width of the text
        margin: '10px 0',              // Reduce the margin space above and below the text
    },
};

export default MealSuggestion;
