function solution(numbers) {
    let answer = 45;
    
    numbers.map(num => answer -= num)

    return answer;
}