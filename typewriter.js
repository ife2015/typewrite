const sentence = "hello there from lighthouse labs"; 

let countTime = 0;

for (const char of sentence) { 
  setTimeout(()=>{
    process.stdout.write(char);
  }, countTime);
  countTime += 50;
}
 console.log(`\n`); 
