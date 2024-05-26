#! /usr/bin/env node
import inquirer from "inquirer";
let condition = true;
let todos = [];
while (condition) {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "todo",
            message: "what do you want to add in your todos: ",
        },
        {
            type: "confirm",
            name: "Add_more",
            message: "Do you want to add more todo: ",
            default: false,
            when(answer) {
                return answer.todo;
            }
        },
    ]);
    condition = answer.Add_more;
    todos.push(answer.todo);
}
console.log(todos);
