function solution(lottos, win_nums)
{
    let answer = []
    let zeroCount = 0
    let base = 0

    for(num of lottos)
    {   
        let check = false
        if (num === 0)
        {
            zeroCount += 1 
        }
        else
        {
            for (let i =0; i < win_nums.length; i++)
            {
                if (num === win_nums[i])
                {
                    base += 1
                    break;
                }
            }
        }
    }
    
    max_score = zeroCount + base;
    min_score = base;

    answer = [max_score, min_score].map(score=>{
        if (score === 6)
        {
            return 1;
        }
        else if (score === 5)
        {
            return 2;
        }
        else if (score === 4)
        {
            return 3;
        }
        else if (score === 3)
        {
            return 4;
        }
        else if (score === 2)
        {
            return 5;
        }
        else
        {
            return 6;
        }
    })

    return answer;
}