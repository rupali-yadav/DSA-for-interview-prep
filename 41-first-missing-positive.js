function solution(A) {
    // Implement your solution here
    const arr = A.filter(num => num > 0).sort((a, b) => a - b);
    counter = 1;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === counter) {
            counter++;
        } 
        
    }

    return counter;

}

solution([-1, -3])

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.