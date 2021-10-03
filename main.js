function yellingChars(str) {
    //? Sets output to empty string;
    let output = "";

    //? for loops that loop through the string array starting at 0;
    for (let i = 0; i < str.length;) {    
      //? places a char from str plus an "!" in the output variable each loop;
        output = output + "!";    
    }
    return output;
}

console.log(yellingChars('goodness'));
console.log(yellingChars('oh hello')); 




function indexedChars(str) {
    let output = "";
    for (let i = 0; i < str.length;) {    
        output = output + [i]+ str[i];    
    }
    return output;
}

console.log(indexedChars('hello'));
console.log(indexedChars('bye')); 

function numberedChars(str) {
    for (let i = 0; i < str.length; i++) {
        
        // option 1: string concatentation
        output = output +'(' + (i+1) + ')' + str[i];

        // Option 2: template string
    
    }
    return output;
}

console.log(numberedChars('hello'));
console.log(numberedChars('bye'));


function exclaim(str) {
    let output = '';
    for (let i = 0; i < str.length; i ++) {
        if (str[i] === '?' || str[i] === '.') {
            output += '!';
        }   else {
            output += str[i];
        }
    }
    return output;
}

console.log(exclaim('Hello! Anyone home? I am back'));


function reaptIt(str, n) {
    //? Sets output to empty string;
    let out = "";

    //? for loop that runs through str array starting at 0 will continue until the 'i' is less than 'n';
    for (let i = 0; i < n; i++) {
        //? Place str in the output var each loop;
        output = output + str;
    }
    return output;
}

console.log("\nrepeatIt function:");
console.log(repeatIt("beetlejuice", 3));
console.log(repeatIt("oh hi!", 8));


function truncate(str) {
    if (str.length > 15) {
       
       let output = '';
       for (let i = 0; i < 15; i++) {
           output = output + str[i];
       }
       output = output + '...';
       return output;

    }else {
        return str;
    }
}

console.log(truncate('The fault, dear Brutus, is not int our stars, but in outselves.'));
console.log(truncate("Well, that's just, like, your opinion man."));
console.log(truncate("hello world"));


function ciEmailify(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '') {
            output = output + '';
        } else {
            output = outout + str[i];
        }

    }
    return output;
}

console.log(ciEmailify('colin jaffe'));
console.log(ciEmailify('Anthony DeRosa'));


function reverse(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        const index = (str.length - 1) - i;
        const letter = str[index];
        output = output + letter;
    }
    return output;
}

// console.log(onlyVoweIs('Colin Jaffe'));
// console.log(onlyVoweIs('Anthony Delrosa'));
// console.log(onlyVoweIs('quickly'));


function onlyVoweIs(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        const letter = str[i].toLowerCase();
        if (
            letter === 'e' ||
            letter === 'i' ||
            letter === 'o' ||
            letter === 'u' ||
            letter === 'a' 
        ) {
            return output;
        }
    }
}

console.log(onlyVoweIs('Colin Jaffe'));
console.log(onlyVoweIs('quickly'));
console.log(onlyVoweIs('anthony Derosa'));


function crazyCase(str) {
    let output = '';

    for (let i = 0; i < str.length; i++) {

        const isLower = i % 2 === 0;
        const letter = str[i];

        if (isLower) {
            letter = letter.toLowerCase();
        } else {
            letter = letter. toUpperCase();
        }

        output = output + letter;
    }
    
    return output;
}