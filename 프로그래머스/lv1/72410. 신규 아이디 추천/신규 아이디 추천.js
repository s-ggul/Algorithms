function solution(new_id) 
{
    let answer = '';
    const yesMask = '~!@#$%^&*()=+[{]}:?,<>/</>'.split('');

    // 1단계
    new_id = new_id.toLowerCase();
    
    // 2단계
    new_id = [...new_id].filter(c => !yesMask.includes(c)).join('');
    
    // includes는 배열이나 문자열에 사용가능 => 내가 선언한 배열이 이차원은 아닌지 문자열이 맞는지 확인하자

    // 3
    while (true) 
    {
        if (!new_id.includes('..'))
        {
            break;
        }

        new_id = new_id.replace('..', '.');
    }
    
    // 4
    if (new_id[0] == '.')
    {
        new_id = new_id.substring(1,new_id.length);
    }
    if (new_id[new_id.length - 1] == '.')
    {
        new_id = new_id.substring(0,new_id.length - 1);
    }

    // 5
    if (new_id === '')
    {
        new_id = 'a';
    }

    // 6
    if (new_id.length > 15)
    {
        new_id = new_id.substring(0,15);
    }
    //주의 substring의 두번째 인자는 열린구간이다.
    
    if (new_id[14] == '.')
    {
        new_id = new_id.substring(0,14);
    }

    // 7
    if (new_id.length <= 2)
    {
        let word = new_id[new_id.length - 1];
        while (new_id.length < 3)
        {
            new_id = new_id.concat(word);
        }
    }

    return new_id;
}