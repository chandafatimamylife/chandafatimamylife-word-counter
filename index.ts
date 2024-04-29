
//#!/usr/bin/env node

import inquirer from "inquirer"

const answers:{
    Sentence:string
} = await inquirer.prompt([
{
    name:"Sentence",
    type:"input",
    message:"Enter your sentence to count the world",
}
 ])
//trim cut na//space hata tha is k bhagir  spce count hota hy
//split aray bana raha tha
//(" ") space jo hy wo words /("")leters with space 
//print the array  of words to the console

const words = answers.Sentence.trim().split(" ")
console.log(words)

// print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length} `);