function solution(expression) {
    var orders = [
        ['*', '+', '-'],
        ['*', '-', '+'],
        ['+', '-', '*'],
        ['+', '*', '-'],
        ['-', '+', '*'],
        ['-', '*', '+'],
    ];
    let answer = -1;
    for (const order of orders){
        var res = parseInt(recursive(order,0,expression));

        res= Math.abs(res);
        
        if (res > answer)
        {
            answer = res;
        }
    }


    return answer;
}

function recursive(order,n, expr)
{
    if (n == 2)
    {
        return eval(expr);
    }
    else
    {
        if (order[n] == '*')
        {
            let temp = expr.split('*');
            let val = [];
            for (const e of temp)
            {
                val.push(recursive(order, n + 1, e));        
            }
            return eval(val.join('*'));
        }
        else if(order[n] == '-')
        {   
            let temp = expr.split('-');
            let val = [];
            for (const e of temp)
            {
                val.push(recursive(order, n + 1, e));        
            }
            return eval(val.join('-'));
        }
        else if(order[n] == '+')
        {
            let temp = expr.split('+');
            let val = [];
            for (const e of temp)
            {
                val.push(recursive(order, n + 1, e));        
            }
            return eval(val.join('+'));
        }
    }
    return temp;
}