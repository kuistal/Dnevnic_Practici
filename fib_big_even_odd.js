function fib_eo(n) {
    // Проверяем, что n находится в допустимом диапазоне
    if (n < 1 || n > 1000000) {
        console.log("Введите число от 1 до 10^6");
        return;
    }

    // Начальные значения для последних цифр F(1) и F(2)
    let a = 0; // F(0)
    let b = 1; // F(1)

    // Если n равно 1, возвращаем четность
    if (n === 1) {
        return "even"; // F(1) = 1 (нечетное)
    }

    // Вычисляем последние цифры Фибоначчи до n
    for (let i = 2; i <= n; i++) {
        let c = (a + b) % 10; // Последняя цифра F(i)
        a = b;                
        b = c;                
    }

    // Проверяем четность последней цифры
    return b % 2 === 0 ? "even" : "odd";
}

const n = 841645; 
const result = fib_eo(n);
console.log(`fib_eo(${n}) = ${result}`);
// Время выполнения - 64 мс
// Сложность - O(n)