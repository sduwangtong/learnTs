
/**
import { ShoppingCart } from "./shoppingCart";


// boolean
//let b: boolean = true;

//let num: number = 1;

// const hello: string = 'Hello';
// const world: string = "World";

// const helloWorld = `${hello}${world}`;

// let n: null = null;
// let u: undefined = undefined;

// let someNumber: number = 3;
const myObject: object = [];
let tuple: [string, number] = ['str', 1];

enum Color {
    Red,
    Green
}

let color: Color = Color.Green;
console.log(myObject, tuple, color, Color.Red);


// let ANY: any;
// ANY = 'a string';

// Type Asserstion
// xxx as TypeName

function uppercaseFirstLetter(str: string | null) {
    if (str === null) {
        return;
    }
    return str[0].toUpperCase() + str.substring(1);
}

console.log(uppercaseFirstLetter('hello'));
uppercaseFirstLetter(null);

// Interface
interface A {
    someProp: number;
}

interface B {
    readonly someProp: number;
    age?: number;
}

let a: A = { someProp : 2};
let b: B = a;
console.log(b);

// Index Signature, can have lots of attributes 
interface I {
    someProp: string;
    [key: string]: number | string;
}
const testIndexSignature: I = {someProp: 'test'};
testIndexSignature.x = 2;
testIndexSignature.b = '';

// Call Signature
interface ISum{
    (a:number, b:number) : number;
}

const sum: ISum = (a, b) => a + b;
console.log(sum(1,2));


// Extending interfaces
interface Parent {
    x: string;
}

interface Parent2 {
    y: string;
}

interface Child extends Parent, Parent2 {};
const child1 : Child = {x: 'test', y:'p2'};
console.log(child1);


// Functions 
function sum2(a:number, b?:number) : number {
    return a + (b || 0);
}

sum2(1);


type MyFunc = (a: number, b: number) => number;
const sum3 : MyFunc = (a, b) => a + b; 
console.log (sum3(1,2));


let cart = new ShoppingCart();
// console.log(`The toal is ${calculateTotal(cart)}`);
console.log(cart);
**/

import React from 'react';
// Statless or function component
export interface Task {
    title: string;
}

export interface TasksListProps {
    intialTasks: Task[];
}
// Function Component
// React can bind type using React.FunctionCompoent
// it is the same as tasks: TasksListProps
// const TasksList2: React.FunctionComponent<TasksListProps> = ({tasks}) => {
//     return (
//         <ul>
//             {tasks.map((task, i) => {
//                 return <li key={i}>{task.title}</li>;
//             })}
//         </ul>
//     );
// }

const tasks = [
    {title: 'Task one'},
    {title: 'Task two'},
    {title: 'title'}
];


// Class Component

interface TasksListState {
    tasks: Task[];
}
class TasksList extends React.Component<
    TasksListProps,
    TasksListState
> {
    constructor(props: TasksListProps) {
        super(props);
        this.state = {
            tasks: props.intialTasks
        };
        // if you need a full function instead of a fat array function
        // you need to bind this to the function
        this.onAddNewTaskClick = this.onAddNewTaskClick.bind(this);
    }

    onAddNewTaskClick() {
        this.setState({
            tasks: [...this.state.tasks, {title: "new task"}]
        });
    }
    render() {
        const {tasks} = this.state;
        return (
            <div>
                <ul>
                    {tasks.map((task, i) => {
                        return <li key={i}>{task.title}</li>;
                    })}
                </ul>
                <button onClick={this.onAddNewTaskClick}> Add </button>
             </div>
            );
           
    }
}

export default () => {
    return <div> <TasksList intialTasks={tasks} /></div>;
};
