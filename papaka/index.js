const fs = require('fs')
const zlib = require('zlib')

/* const read = fs.createReadStream('./lorem.txt')
const write = fs.createWriteStream('./new.txt') */

//? №1
/* read.on('data', (chunk) => {
    write.write('\n************\n')
    write.write(chunk)
    write.write('\n************\n')
}) */

//? №2
/* let a = 1;
read.on('data', (chunk) => {
    write.write(`\nЧасть №${a} началась\n`)
    write.write(chunk)
    write.write(`\nЧасть №${a} закончилась\n`)
    a++;
}) */

//? №3
/* const compress = () => {
    const gzip = zlib.createGzip();
    const input = fs.createReadStream('./index.html');
    const output = fs.createWriteStream('./indexCompress.html.gz');
    input.pipe(gzip).pipe(output);
}

setTimeout(() => {compress()},3000); */

//? №4
/* const decompress = () => {
    const unzip = zlib.createUnzip();
    const inputdecom= fs.createReadStream('./indexCompress.html.gz')
    const outputdecom = fs.createWriteStream('./indexDecompress.html')
    inputdecom.pipe(unzip).pipe(outputdecom);
}

setTimeout(() => {decompress()},3000); */