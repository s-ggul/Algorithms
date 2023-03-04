function solution(N, stages) {
    var answer = [];
    var result = new Map();

    for (num of stages)
    {
        if (num > N)
        {
            continue;
        }
        result.set(num, result.get(num) + 1 || 1);
    }


    var count = stages.length;

    for (var i = 1; i <= N; i++)
    {
        var data = result.get(i)
        if (isNaN(data))
        {
            result.set(i,0);
            continue;
        }
        result.set(i,(data / count));
        count -= data;
    }

    const sortedMap = new Map([...result.entries()].sort((a,b) => {
        if (b[1] > a[1])
        {
            return 1;
        }
        else if (b[1] == a[1])
        {
            if (a[0] > b[0])
            {
                return 1;
            }
            else{
                return -1;
            }
        }
        else{
            return -1;
        }
    }));
    answer = [...sortedMap.keys()];
    return answer;
}