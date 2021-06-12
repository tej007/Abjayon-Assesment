function findMax(arr) {
    let row = 0,
        i, j;
    for (i = 0, j = N - 1; i < N; i++) {

        while (arr[i][j] == 1 && j >= 0) {
            row = i;
            j--;
        }
    }
    console.log((row));

}


let arr = [
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 1, 1, 0],
];
let N = arr.length
findMax(arr, N);