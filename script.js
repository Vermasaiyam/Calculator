let input = document.getElementById('input');
let buttons = document.querySelectorAll("button");
let string = "";

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        string = input.value;
        if (e.target.innerHTML == '=') {
            if (string.indexOf('log') > -1) {
                let indexStart = string.indexOf('log');
                let indexStartBracket = string.indexOf('(');
                let indexEndBracket = string.indexOf(')');
                let LogSubstring = string.substring(indexStart, indexEndBracket+1);
                let FnSubstring = string.substring(indexStartBracket+1, indexEndBracket);

                string = string.replace(LogSubstring, Math.log10(FnSubstring));
            }
            else if (string.indexOf('ln') > -1) {
                let indexStart = string.indexOf('ln');
                let indexStartBracket = string.indexOf('(');
                let indexEndBracket = string.indexOf(')');
                let LogSubstring = string.substring(indexStart, indexEndBracket+1);
                let FnSubstring = string.substring(indexStartBracket+1, indexEndBracket);
                
                string = string.replace(LogSubstring, Math.log(FnSubstring));
            }
            else if (string.indexOf("(") > -1){
                string = string.replace("(","*");
                string = string.replace(")","");
            }
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = '';
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else if (e.target.innerHTML == '%') {
            string = (string) / 100;
            input.value = string;
        }
        else if (e.target.innerHTML == 'log') {
            string = string + e.target.innerHTML + '(';
            input.value = string;
        }
        else if (e.target.innerHTML == 'ln') {
            string = string + e.target.innerHTML + '(';
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
});
