

const numeros = [2,4,6,8,10,12];


numeros.forEach(function(ele, i, arr) {
    arr[i] = Math.pow(ele,2);
})

console.log(numeros);