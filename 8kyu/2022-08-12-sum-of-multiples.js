// Find the sum of all multiples of n below m
// Keep in Mind

//     n and m are natural numbers (positive integers)
//     m is excluded from the multiples

// Examples

// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

function sumMul(n, m) {
    let sum = 0;

    if (n < 1 || m < 1) {
        return 'INVALID';
    }

    for (let i = n; i < m; i++) {
        if (i % n === 0) {
            sum += i;
        }
    }

    return sum;
}