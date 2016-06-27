/**
 * Created by Richard on 6/28/2016.
 */
var HelloWorld = prompt("Say goodbye/hello world").toLowerCase();
console.log(HelloWorld);
if(HelloWorld==="goodbye world")
{
    HelloWorld = "Just kidding, HI world!";
    console.log(HelloWorld);
}
else
{
    HelloWorld = "Hello world!";
    console.log(HelloWorld);
}

console.log("Don't think you're the only one who can play this game!");