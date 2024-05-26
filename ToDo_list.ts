#! /usr/bin/env node

import inquirer from "inquirer"

let condition=true

let  todos:string[]=[]
interface answers_types{
    todo:string,
    Add_more:boolean,
    
}
while(condition){
const answer:answers_types=await inquirer.prompt([
    {   
    type:"input",
    name:"todo",
    message:"what do you want to add in your todos: ",
    },
    {
    type:"confirm",
    name:"Add_more",
    message:"Do you want to add more todo: ",
    default:false,
    when(answer){
        return answer.todo
    }
    },
    
]   
)   
    condition=answer.Add_more
    todos.push(answer.todo)

       
}

console.log(todos)

    






