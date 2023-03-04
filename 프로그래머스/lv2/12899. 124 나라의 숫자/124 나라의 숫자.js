function solution(n) {
    const nums = ['4', '1', '2'];
    let answer = '';
    
    
    while(n > 0){
        const remainder = n % 3;    
        if(remainder === 0){
            n = n/3 - 1;
        }else{
           n = Math.floor(n / 3); 
        }
        
        answer = nums[remainder] + answer;
    }
    return answer;
}