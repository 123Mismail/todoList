#!/usr/bin/env node
import inquirer from "inquirer";

let todos=[];

let condition:boolean=true;
while(condition)
{

let addItem=await inquirer.prompt(
    [
        {
            name:"todo",
            type:"input",
            message:"what you want to add in your todo ?"
        },
        {
            name:"addMore",
            type:"confirm",
            message:"do you want to add more ?",
            default:"false"
        }
    ]
);
todos.push(addItem.todo);
condition=addItem.addMore;
console.log(todos);

};
