function solution(s) {
    var answer = 0;
    var numMap = new Map([
        ['zero', '0'], 
        ['one','1'], 
        ['two','2'], 
        ['three','3'],
        ['four','4'], 
        ['five','5'], 
        ['six','6'], 
        ['seven','7'],
        ['eight','8'],
        ['nine','9']
    ]);

    for(e of numMap)
    {
        if (s.includes(e[0]))
        {
            var reg = new RegExp(`${e[0]}`,'g');
            s = s.replace(reg, e[1]);
        }
    }
    s= parseInt(s);
    return s;
}