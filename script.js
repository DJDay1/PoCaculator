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
    let changedIngredient = '';
    
    ingredients.forEach(ing => {
        const input = document.getElementById(ing);
        const value = parseFloat(input.value);
        if (!isNaN(value) && value > 0) {
            const ratio = value / originalRatio[ing];
            if (Math.abs(ratio - 1) > 0.0001) {  // 작은 변화도 감지
                changedRatio = ratio;
                changedIngredient = ing;
            }
        }
        // 입력값이 비어있으면 원래 값으로 설정
        if (input.value === '') {
            input.value = originalRatio[ing];
        }
    });

    let result = '';
    ingredients.forEach(ing => {
        let newValue;
        if (ing === changedIngredient) {
            newValue = parseFloat(document.getElementById(ing).value);
        } else {
            newValue = originalRatio[ing] * changedRatio;
        }
        result += `${koreanNames[ing]}: ${newValue.toFixed(1)}g<br>`;
    });

    document.getElementById('result').innerHTML = result;
}

ingredients.forEach(ing => {
    const input = document.getElementById(ing);
    input.addEventListener('input', calculateRecipe);
    input.addEventListener('change', calculateRecipe);  // change 이벤트 추가
});

calculateRecipe(); // 초기 계산