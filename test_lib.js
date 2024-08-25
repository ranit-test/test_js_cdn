import {sayHellofromSib} from "./sibling.js"

function sayHello(div){
    div.innerText = sayHellofromSib(div);
}