// Write your solution here!
const drivers=["Milo", "Otis", "Garfield"];


function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name){
  drivers.pop(name);
}
function destructivelyRemoveFirstDriver(name){
  drivers.shift(name);
}
function appendDriver(name){
 return name=[...drivers,name];
}
function 


function removeLastDriver(){
  drivers.splice(-1);
}
function removeFirstDriver(){
  drivers.splice(0);
}