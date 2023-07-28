//your JS code here. If required.

let ele = document.getElementById('level')
let count = 0
while(ele.parentElement){
    ele = ele.parentElement
    count++
}

alert('The level of the element is: '+count)