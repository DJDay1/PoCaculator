const ingredients = ['levain', 'water', 'flour', 'oliveOil', 'salt'];
const originalRatio = {
    levain: 400,
    water: 1030,
    flour: 1320,
    oliveOil: 88,
    salt: 22
};
const koreanNames = {
    levain: '르방',
    water: '물',
    flour: '강력분',
    oliveOil: '올리브오일',
    salt: '소금'
};

function calculateRecipe() {
    let changedRatio = 1;
    
    ingredients.forEach(ing => {
        const value = parseFloat(document.getElementById(ing).value) || 0;
        const ratio = value / originalRatio[ing];
        if (ratio !== 0 && ratio < changedRatio) changedRatio = ratio;
    });

    let result = '';
    ingredients.forEach(ing => {
        const newValue = (originalRatio[ing] * changedRatio).toFixed(1);
        result += `${koreanNames[ing]}: ${newValue}g<br>`;
    });

    document.getElementById('result').innerHTML = result;
}

ingredients.forEach(ing => {
    const input = document.getElementById(ing);
    input.addEventListener('input', calculateRecipe);
    input.addEventListener('blur', calculateRecipe);
});

calculateRecipe(); // 초기 계산