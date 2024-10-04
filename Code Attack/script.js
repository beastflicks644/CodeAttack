document.getElementById('fashionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const bodyType = document.getElementById('bodyType').value;
    const skinColor = document.getElementById('skinColor').value;
    const height = document.getElementById('height').value;
    const colorPalette = document.getElementById('colorPalette').value;
    const age = document.getElementById('age').value;

    const suggestions = generateSuggestions(bodyType, skinColor, height, colorPalette, age);
    
    document.getElementById('suggestions').innerHTML = `<p>${suggestions}</p>`;
});

function generateSuggestions(bodyType, skinColor, height, colorPalette, age) {
    // Basic AI logic to generate suggestions
    let suggestions = "";

    if (bodyType === "pear") {
        suggestions += "A-line dresses and high-waisted skirts are great for balancing your silhouette. ";
    } else if (bodyType === "apple") {
        suggestions += "Opt for empire waist tops and straight-leg pants to create a longer look. ";
    } else if (bodyType === "rectangle") {
        suggestions += "Try belted dresses and ruffled tops to create curves. ";
    } else if (bodyType === "hourglass") {
        suggestions += "Fitted dresses and wrap tops will enhance your curves beautifully. ";
    }

    if (skinColor === "light") {
        suggestions += "Soft pastel colors will complement your skin tone. ";
    } else if (skinColor === "medium") {
        suggestions += "Earth tones and vibrant colors will look stunning on you. ";
    } else if (skinColor === "dark") {
        suggestions += "Bright colors and bold patterns will shine against your skin. ";
    }

    if (age < 20) {
        suggestions += "Trendy and playful styles like crop tops and mini skirts are perfect for your age. ";
    } else if (age < 40) {
        suggestions += "Chic and sophisticated outfits like tailored blazers are a great choice. ";
    } else {
        suggestions += "Elegant and timeless pieces like wrap dresses will suit you well. ";
    }

    return suggestions;
}