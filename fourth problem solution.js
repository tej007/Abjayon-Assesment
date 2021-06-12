function maximum_path_sum(mat, M, N) {
    let output = -1
    for (let i = 0; i < M; i++) {
        output = Math.max(output, mat[0][i]);

    }
    for (let i = 1; i < N; i++) {
        output = -1
        for (let j = 0; j < M; j++) {
            if (j > 0 && j < M - 1)
                mat[i][j] += Math.max(mat[i - 1][j],
                    Math.max(mat[i - 1][j - 1],
                        mat[i - 1][j + 1]));

            else if (j > 0)
                mat[i][j] += Math.max(mat[i - 1][j],
                    mat[i - 1][j - 1]);
            else if (j < M - 1)
                mat[i][j] += Math.max(mat[i - 1][j],
                    mat[i - 1][j + 1]);
            output = Math.max(mat[i][j], output);
        }
    }

    console.log(output)
}



let mat = [
    [10, 10, 2, 0, 20, 4],
    [1, 0, 0, 30, 2, 5],
    [0, 10, 4, 0, 2, 0],
    [1, 0, 2, 20, 0, 4]
];


let N = (mat.length)
let M = ((mat[0]).length)


maximum_path_sum(mat, M, N)