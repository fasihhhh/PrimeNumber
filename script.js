let input = document.getElementById('input')
let btn = document.getElementById('button')
let result = document.getElementsByClassName('result')[0]

let res = ""
let DisplayResult = (res) =>
{
    result.innerHTML = `${res}`
}
let primeCheck = () =>
{
    let sum =0;
    num = parseInt(input.value)
    if (isNaN(num) || num < 2) 
    {
        DisplayResult("Please enter a valid NUMBER greater than 1");
        return;
    }
    for (let i =2 ; i<num ; i++) {
        if(num%i==0){
            sum += i;
        }
    }
    console.log(sum)
    if(sum==0)
    {
        res = `"${num}"` +"  IS PRIME A NUMBER"
        DisplayResult(res)
    }
    if(sum>0)
    {
        res = `"${num}"` + "  IS NOT A PRIME NUMBER"
        DisplayResult(res)
    }
}
btn.addEventListener('click' , primeCheck)