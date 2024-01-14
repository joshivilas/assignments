// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


let count = 0;

function increamentCounter(){
    count++;
    console.log(count)
    setTimeout(increamentCounter, 1 * 1000);

}
increamentCounter();
