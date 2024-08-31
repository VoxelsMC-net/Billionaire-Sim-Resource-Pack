const fs = require('fs');
const path = require('path');

function createJsonFiles() {
  for (let height = 11; height >= -489; height--) {
    // Content for height<height>.json
    const content = {
      "providers": [
        {
          "type": "space",
          "advances": {
            " ": 4
          }
        },
        {
          "type": "bitmap",
          "file": "height:retro.png",
          "ascent": height,
          "height": 11,
          "chars": [
            "\u0020\u0021\u0022\u0023\u0024\u0025\u0026\u0027\u0028\u0029\u002a\u002b\u002c\u002d\u002e\u002f",
            "\u0030\u0031\u0032\u0033\u0034\u0035\u0036\u0037\u0038\u0039\u003a\u003b\u003c\u003d\u003e\u003f",
            "\u0040\u0041\u0042\u0043\u0044\u0045\u0046\u0047\u0048\u0049\u004a\u004b\u004c\u004d\u004e\u004f",
            "\u0050\u0051\u0052\u0053\u0054\u0055\u0056\u0057\u0058\u0059\u005a\u005b\u005c\u005d\u005e\u005f",
            "\u0060\u0061\u0062\u0063\u0064\u0065\u0066\u0067\u0068\u0069\u006a\u006b\u006c\u006d\u006e\u006f",
            "\u0070\u0071\u0072\u0073\u0074\u0075\u0076\u0077\u0078\u0079\u007a\u007b\u007c\u007d\u007e\u0000",
            "\uAAAA\uAAAB\uAAAC\uAAAD\uAAAE\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
          ]
        }
      ]
    };

    // Content for height<height>small.json
    const smallContent = {
      "providers": [
        {
          "type": "space",
          "advances": {
            " ": 4
          }
        },
        {
          "type": "bitmap",
          "file": "height:retro.png",
          "ascent": height - 2,
          "height": 8,
          "chars": [
            "\u0020\u0021\u0022\u0023\u0024\u0025\u0026\u0027\u0028\u0029\u002a\u002b\u002c\u002d\u002e\u002f",
            "\u0030\u0031\u0032\u0033\u0034\u0035\u0036\u0037\u0038\u0039\u003a\u003b\u003c\u003d\u003e\u003f",
            "\u0040\u0041\u0042\u0043\u0044\u0045\u0046\u0047\u0048\u0049\u004a\u004b\u004c\u004d\u004e\u004f",
            "\u0050\u0051\u0052\u0053\u0054\u0055\u0056\u0057\u0058\u0059\u005a\u005b\u005c\u005d\u005e\u005f",
            "\u0060\u0061\u0062\u0063\u0064\u0065\u0066\u0067\u0068\u0069\u006a\u006b\u006c\u006d\u006e\u006f",
            "\u0070\u0071\u0072\u0073\u0074\u0075\u0076\u0077\u0078\u0079\u007a\u007b\u007c\u007d\u007e\u0000",
            "\uAAAA\uAAAB\uAAAC\uAAAD\uAAAE\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
          ]
        }
      ]
    };

    // Define file paths
    const filePath = path.join(__dirname, `height_${height}.json`);
    const smallFilePath = path.join(__dirname, `height_${height}_small.json`);

    // Write the files
    fs.writeFileSync(filePath, JSON.stringify(content));
    fs.writeFileSync(smallFilePath, JSON.stringify(smallContent));

    console.log(`Created files: height${height}.json and height${height}small.json`);
  }
}

createJsonFiles();