let form = document.forms.my; // <form name="my"> element

// get the element
let elem = form.elements.one;
 // <input name="one"> element
 function wrapper(){
     var closureExample = 'hi';
     var nextVar = 3;
    return function validate(event) {
        debugger;
        console.log(closureExample);
        event.stopPropagation();
        event.preventDefault();
        let b = document.querySelector('[name="ControlB"]').value; 
        if(b < 10) {
            return false;
        }
    }
 }


 async function test() {

console.log('hi');
let x = new Promise((resolve, reject) => {
    setTimeout(() => {
console.log('timer');
reject();
});

});
console.log('end of function');

try {
 await x;

let second = function() {console.log('second');}
second();
} catch() {
const errorFn = () => {console.log('error occurred');}
errorFn();
}

}