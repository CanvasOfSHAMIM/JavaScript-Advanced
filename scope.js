let bonus = 20;

function sum(first, second){
    let result = first + second + bonus;
    console.log(result);
    if(result>9){
        let mod = "happy";
        mod = "fishy";
        mod = "funky";
        mod = "cranky";
        console.log(mod);
    }
    return result;
}
const output = sum(3, 7);
console.log(output)