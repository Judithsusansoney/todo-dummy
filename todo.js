//same as document.getElementById
const additem=()=>{
//const used as the fn is not changed
//read user input from the text box
let userinput=document.querySelector("#inp").value
//console.log(userinput); (first demo)
//create list item
let listitem=document.createElement("li")
listitem.textContent=userinput
//to check wrking: console.log(listitem);
//target list
let list=document.querySelector("#todo")
//add item to the list
list.appendChild(listitem)
//insertbefore,append,appendChild
}
let btn=document.querySelector("#btn")
btn.addEventListener("click",additem)

//fn if it was invoked it would have wrked,calling cannot be done
// place order likewise: using value attribute
//dom qstns imp; to do integrated version:strinking out text and checkbox and also withslightly fade out text in todo completed list



//github web gui
