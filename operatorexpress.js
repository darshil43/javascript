let a = prompt("what is your age?");
a = Number.parseInt(a);
if(a<0)
{
    console.log("this is an invalid age");
}
else if(a<9)
{
    console.log("you are a kid and cannot even think of driving");
}
else if(a<18 && a>9)
{
    console.log("you are a kid and can even think of driving");
}
else
{
    console.log("you are eligible to driving");
}

let expr = "notbook";
switch(expr)
{
case 'notbook':
console.log("not book");
break;
case 'radbook':
console.log("not radbook");
break;
default:
    console.log("sorry")
}


let f = 19
let y = f>18?"you acn drive" : "you acn not drive"
console.log(y)

