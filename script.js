let input = document.getElementById('inputBox');// get input element from html doc by using ID
let buttons = document.querySelectorAll('button');// get all buttons from html doc

let string = ""; // empty string to store input
let arr = Array.from(buttons);// convert nodelist(element) in arry
arr.forEach(button => {// for each button in array
    button.addEventListener('click',(e) =>{//Add an event listener for the 'click' event on each button
        if(e.target.innerHTML == '='){// if clicked button's text is "=" evaluate given input strin
            string = eval(string);// evaluate string
            input.value = string;// update input box with result
        }
        else if (e.target.innerHTML == 'AC'){// if clicked button == "AC"
            string = "";// reselt string to empty valude
            input.value = string;// updater input box
        }
        else if (e.target.innerHTML == 'DEL'){// if clicked button == "DEL"
            string = string.substring(0,string.length-1);// Delete last character from array
            input.value = string;// update input box
        }
        else {
        string += e.target.innerHTML;// at end (append button's text to string)
        input.value = string;// update input box
        }
    })
})


