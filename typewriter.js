const sentence = "hello there from lighthouse labs"; 

let countTime = 0;
const timeInterval = 50; 
for (const char of sentence) { 
  setTimeout(()=>{
    process.stdout.write(char);
  }, countTime);
  countTime += timeInterval;
  if (countTime === timeInterval*sentence.length) {
    setTimeout(()=>{
      console.log(" ");
    }, countTime);
  }
}

