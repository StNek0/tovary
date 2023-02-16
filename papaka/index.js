//const lodash = require('lodash')
const fs = require('fs')

fs.writeFileSync('./index.html', `
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
</head>
<body>
   
</body>
</html>`, () => {})

fs.mkdirSync('./styles', () => {
   fs.writeFileSync('./styles/style.css', `
   * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
   }
  
   html,
   body {
      height: 100%;
   }
  
   body {
      display: flex;
      justify-content: center;
      align-items: center;
   }`, () => {})
})

setTimeout(() => {
   fs.unlink('./styles/style.css', () => {})
}, 15000);
setTimeout(() => {
   fs.rmdir('./styles', () => {})
}, 17000);

setTimeout(() => {
   fs.unlink('./index.html', () => {})
}, 20000);