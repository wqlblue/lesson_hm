arr = [1, 2, 3, 4, 5];
const hasEvenNumber = (arr) => {
    return arr.some((num) => num % 2 === 0);
};


console.log(hasEvenNumber(arr));
