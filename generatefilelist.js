// this is making me vommit
// modifying code in a manor THIS unsafe is idiotic!
// i should be put on a list
// i should never be allowed to do javascript ever again
// i'm afraid of what i've become
// this is that fucking bad
// modifying code before building is a sin
// this code is violently terrible
// this code is a disgrace to the majesty of sugoma.xyz
//
// at least it works...
// i want to use emojis but i haven't set up a neovim extension for that yet :UltraMad:


import fs from 'fs/promises';
import path from 'path';

let array = []
// Get a list of files in the directory
const files = await fs.readdir("./public/memes");

// It is possible to inject data into the data.ts file by creating files in the memes directory
// You could probably do something bad but the attack surface is too small for anything
// I'm the only maintainer of this repo, so it's probably fine?

for (const file of files) {
  const filePath = path.join('./public/memes/', file);
  array.push(filePath.slice(6))
}

// Remove obamium from the array because that one is a secret
// This is the most normal part of the code
// speed doesn't matter here because this script is only run at compile time
array = array.filter((item) => item !== '/memes/obama.jpg')

// THE DEVIL INCARNATE
const newdata = `export const data = ${JSON.stringify(array)};`
await fs.writeFile('./src/data.ts', newdata)
// I apologize in advance to the ai that has to improve from code like this
