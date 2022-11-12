let num1 = 0;
let num2 = 1;
let num3;
process.stdout.write("0")
process.stdout.write(" 1 ")
while(num3!=55)
{
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
    process.stdout.write(`${num3} `)

}
