/*
 * WORLD MAP VISUALIZER
 * Author: Marc Rufeis
 * ---------------------------
 *
 * Visualizing the world!
 *
 * A list of ressources you used, for example links:
 * [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference).
 */

/*
 *  Aufgabe 2.0: Das Script soll eine Weltkarte auf der Konsole als ASCII-Art zeichnen.
 *  Dafür muss jeder Pixel eines Bild einer Weltkarte gelesen und geprüft werden (world.jpg).
 *  Ist der Pixel schwarz, soll ein Zeichen (z.B. "#") an die richtige Stelle der Konsole 
 *  gesetzt werden. Dafür braucht ihr zwei Funktionen:
 *
 *  getPixelColor(x,y) - kann mit map_image-Objekt benutzt werden (also map_image.getPixelColor(x,y))
 *  writeCharacterToConsole(char, x, y) - Schreibt ein Zeichen an eine Position x/y auf die Konsole
 *
 *  Aufgabe 2.1: Farbe! Schaut euch das npm-Modul "chalk" an, und versucht die Zeichen in Farbe auszugeben
 *
 */

const rl = require('readline')
const chalk = require('chalk');
// const jimp = require('jimp')

clearConsole()

/*
jimp.read('prag.jpg', (err, map_image) => {
  if (err) throw err;

  const terminal_width = process.stdout.columns;
  const terminal_height = process.stdout.rows;
  map_image.resize(terminal_width, terminal_height);

  for (let x = 0; x <= terminal_width; x++) {
    for (let y = 0; y <= terminal_height; y++) {
      const color = jimp.intToRGBA(map_image.getPixelColor(x, y))
      writeCharacterToConsole(chalk.rgb(color.r, color.g, color.b)('■'), x, y);
    }
  }
});
*/


//Vorerst nur ein Platzhalter
setInterval(function () {

  clearConsole()
  const xpos = Math.floor(Math.random() * 150);
  const ypos = Math.floor(Math.random() * 70);
  generateInvader(6, 4, xpos, ypos);
  //generateInvader(6, 14, xpos, ypos);
  rl.cursorTo(process.stdout, 0, 0);
  console.log(xpos, ypos);

}, 1000);

/*
 * HELPER FUNCTIONS - DO NOT CHANGE
 */
function clearConsole () {
  const blank = '\n'.repeat(process.stdout.rows)
  console.log(blank)

  rl.cursorTo(process.stdout, 0, 0)
  rl.clearScreenDown(process.stdout)
}

function writeCharacterToConsole (char, x, y) {
  rl.cursorTo(process.stdout, x, y)
  process.stdout.write(char)
}

function generateInvader (width, height, xpos, ypos) {

  let invader = [];
  //const printChar = '#';
  const printChar = '■';
  //const printChar = '👾';

  for (let x = 0; x < width; x++) {

    for (let y = 0; y < height; y++) {

      const rand = Math.random();
      const color_r = Math.random() * 255;
      const color_g = Math.random() * 255;
      const color_b = Math.random() * 255;

      const hue = Math.random() * 360;

      if (rand > 0.5) {

        const colorCharRGB = chalk.rgb(color_r, color_g, color_b)(printChar);
        const colorCharHSV = chalk.hsv(hue, 100, 100)(printChar);
        /*
        rl.cursorTo(process.stdout, 0, height + 1);
        console.log(color_r, color_g, color_b);
        */


        writeCharacterToConsole((colorCharHSV), x + xpos, y + ypos);
        writeCharacterToConsole((colorCharHSV), width * 2 - x + xpos, y + ypos);

        if (!Array.isArray(invader[x])) {
          invader[x] = [];
          invader[x][y] = 1;
        } else {
          invader[x][y] = 1;
        }


      } else {


        if (!Array.isArray(invader[x])) {
          invader[x] = [];
          invader[x][y] = 0;

        } else {
          invader[x][y] = 0;

        }

      }

    }

  }

  /*
  rl.cursorTo(process.stdout, 0, height + 2);
  console.log(invader);
  */


}