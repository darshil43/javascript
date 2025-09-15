let fact = 1
let n= prompt( "Enter to you have to find fectorial: ")
n =  Number.parseInt(n)
for(let i=0;i<=n;i++)
{
    fact *= (n)*(n-1)
}
console.log(fact)