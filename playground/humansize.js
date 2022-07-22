console.log(Math.log10(1000));
//10^3 = 1000

const filesize = 5758575; //bytes
const units = "BKMGT";

//...1000(bytes)...100000(kilobytes)..1000000000(Mb)
//using log10 for the above...3....6....9...
//log10(filesize/3)
//0.....1.......2.......3......

const index = Math.floor(Math.log10(filesize)/3);

//700bytes -> 700
//10000bytes -> 10000/1000^1
//10000000->10000/1000/1000^2

const filesizeHuman = (filesize/Math.pow(1000, index)).toFixed(2);
console.log(`${filesizeHuman}${units[index]}`);
