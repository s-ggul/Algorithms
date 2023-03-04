function combination(arr, num){
    let temp = [];
    if (num === 1) return arr.map(v => [v]);
    else{
        arr.forEach((fixed, index, origin) => {
            let rest = origin.slice(index+1);
            let comb = combination(rest, num-1);
            let attached = comb.map((c) => [fixed, ...c]);
            temp.push(...attached);
        })
    }

    return temp;
}

function checkPrime(num){
    let index = 2;
    while (index <= Math.sqrt(num)){
        if (num % index === 0){
            return false;
        }
        index += 1;
    }
    return true;
}

function solution(nums) {
    var answer = 0;
    
    const comb = combination(nums, 3);
    comb.map((numArr) => {
        let sum = numArr.reduce((acc, cur) => acc + cur, 0);
        
        if(checkPrime(sum)){
            answer+=1;
        }
    })

    return answer;
}