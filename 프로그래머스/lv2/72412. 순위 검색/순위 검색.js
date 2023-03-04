let data = new Map();

function makeData(info)
{
    let scores = [];
    for(let s of info)
    {
        s = s.split(' ');
        let arr = s.slice(0,4);
        let score = parseInt(s[4]);
        scores.push(score);
        s= arr.join('');
        if (data.has(s))
        {
            val = data.get(s);
            val = [...val, score]
            data.set(s, val);
        }
        else
        {
            data.set(s,[score]);
        }    
    }

    let keyList = data.keys();

    for (const key of keyList)
    {
        let temp = data.get(key).sort((a,b) => a-b);
        data.set(key, temp);            
    }
}

function solution(info, query) {
    let answer = [];
    makeData(info);

    let keyList = [...data.keys()];
    
    query.map((s) => {
        s = s.split(' ');
        let qScore = s.pop();
        s= s.filter((element) => {if (element !== '-' && element !== 'and'){return true;}});        
        let temp = keyList.filter((key) => s.every(word => key.includes(word)));
        
        let count = 0;

        for (const key of temp)
        {
            let d = data.get(key);
            count += d.length - binarySearch(d, qScore);
        }
        //temp가 비었으면 0일것이고 아니면 다른 값
        answer.push(count)
    });
    return answer;
}

function binarySearch(arr, score){
    let low = 0;
    let high = arr.length - 1;
    let mid;

    while(low < high)
    {
        mid = Math.floor((low+high) / 2);
        // lower bound 사용 high를 mid -1이 아닌 mid로 설정
        if(arr[mid] >= score)
        {
            high = mid;
        }
        else
        {
            low = mid + 1;
        }
    }

    //만일 arr에 score보다 큰 경우가 없는 경우
    if(arr[high] < score){
        high += 1;
    }
    return high;
}