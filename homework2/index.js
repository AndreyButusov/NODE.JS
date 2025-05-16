// Функция возведения в степень (Exponentiation function)

function pow(number, degree) {
    if (!Number.isInteger(degree)) throw new Error('Показатель должен быть целым числом');
    let result = 1;
    for (let i = 0; i < Math.abs(degree); i++) {
        result *= number;
    }
    return degree >= 0 ? result : 1 / result;
}


// Функция вычисления корня из числа (Calculating the root of a number)

function root(number, degree) {
    if (degree <= 0 || !Number.isInteger(degree)) {
        throw new Error('Показатель должен быть положительным числом');
    }
    if (number < 0) {
        throw new Error('Нельзя извлечь корень из отрицательного числа');
    }
    return number ** (1 / degree);
}

module.exports = { pow, root };