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

function calculateRecipe(changedIngredient) {
    const changedValue = parseFloat(document.getElementById(changedIngredient).value);
    if (isNaN(changedValue) || changedValue <= 0) return;

    const ratio = changedValue / originalRatio[changedIngredient];

    ingredients.forEach(ing => {
        if (ing !== changedIngredient) {
            const newValue = (originalRatio[ing] * ratio).toFixed(1);
            document.getElementById(ing).value = newValue;
        }
    });
}

ingredients.forEach(ing => {
    const input = document.getElementById(ing);
    input.addEventListener('input', () => calculateRecipe(ing));
    input.addEventListener('change', () => calculateRecipe(ing));
    
    // 레이블 추가
    const label = document.createElement('label');
    label.htmlFor = ing;
    label.textContent = `${koreanNames[ing]} (g): `;
    input.parentNode.insertBefore(label, input);
});

// 초기값 설정
ingredients.forEach(ing => {
    document.getElementById(ing).value = originalRatio[ing];
});