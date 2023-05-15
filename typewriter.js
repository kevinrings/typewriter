const sentence = "hello there from lighthouse labs";
const addedLine = sentence + '\n';

for (let i = 0; i < addedLine.length; i++) {
  setTimeout(() => {
    process.stdout.write(addedLine[i]);
  }, 50 * i);
}

