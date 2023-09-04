//네트워크_dfs()
function solution(n, computers) {
    let count = 0;
    let isVisited = Array(n).fill(false);
    let graph = Array.from({ length: n }, () => []);

    const dfs = (num) => {
        isVisited[num] = true;

        for (let item of graph[num]) {
            if (isVisited[item]) continue;
            isVisited[item] = true;
            dfs(item);
        }
    };

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < computers[i].length; j++) {
            if (i !== j && computers[i][j] === 1) {
                graph[i].push(j);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (isVisited[i]) continue;
        dfs(i);
        count++;
    }

    return count;
}
