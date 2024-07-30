const ingredients = ['levain', 'water', 'flour', 'oliveOil', 'salt'];
const originalRatio = {
    levain: 1,  // 르방을 1g로 시작
    water: 2.575,  // 1030 / 400
    flour: 3.3,    // 1320 / 400
    oliveOil: 0.22, // 88 / 400
    salt: 0.055    // 22 / 400
};
const koreanNames = {
    levain: '르방',
    water: '물',
    flour: '강력분',
    oliveOil: '올리브오일',
    salt: '소금'
};

function calculateRecipe() {
    const levainValue = Math.max(1, parseFloat(document.getElementById('levain').value) || 1);
    document.getElementById('levain').value = levainValue;

    let result = `${koreanNames['levain']}: ${levainValue.toFixed(1)}g<br>`;
    
    Object.keys(originalRatio).forEach(ing => {
        if (ing !== 'levain') {
            const newValue = levainValue * originalRatio[ing];
            result += `${koreanNames[ing]}: ${newValue.toFixed(1)}g<br>`;
        }
    });

    document.getElementById('result').innerHTML = result;
}

ingredients.forEach(ing => {
    const input = document.getElementById(ing);
    input.addEventListener('input', calculateRecipe);
    input.addEventListener('change', calculateRecipe);
});

// 초기값 설정
//document.getElementById('levain').value = 400;
//calculateRecipe(); // 초기 계산