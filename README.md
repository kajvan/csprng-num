this code generates a cryptographic secure random number in the range 0 and 1 and prints it to the console.
if you give it some paramaters it will generate a random number in the range of the first parameter and the second parameter.
it contains an async function that will do exactly the same thing but it will wait for the result.

you can set more or less bytes by callin the funtion setBytes(n) where n is the number of bytes you want to use.

when wanting a number call Random or RandomAsync and give it the range you want to have the number in or leave it empty for a number between 0 and 1.