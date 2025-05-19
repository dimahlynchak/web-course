/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import * as fs from 'node:fs';


const answer = await inquirer.prompt([
    {
        type: "input",
        name: "url",
        message: "What is the URL of the project?",
    }
])

console.log(answer)

const data = answer.url
fs.writeFile('userInput.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

const qr_svg = qr.image(answer.url, { type: 'png' });
qr_svg.pipe(fs.createWriteStream('i_love_qr.png'));