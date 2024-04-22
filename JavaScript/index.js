let hello = "Hello, World";
console.log(hello);
hello = 10;
console.log(hello);
hello = ["Hello", 10, 20, true];
console.log(hello);

const final = "This is the only declaration";
console.log(final);
// final = 10;
// console.log(final);

for (let i = 0; i < hello.length; i++) {
    if(typeof(hello[i]) == Number) {
        console.log(hello[i]);
    }
}



while(true) {
}