import {sayHellofromSib} from "./sibling.js";

function sayHello(div){
    console.log("hello from main lib");
    div.innerText = sayHellofromSib(div);
}