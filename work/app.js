const name = "giorgi";
const lastname = "shavishvili";
const number = 1;

if (confirm("2 factor authorization ?")) {
   let firstPrompt = prompt("your first name ?");
   let secondPrompt = prompt("your first name ?");
   let thridPrompt = parseInt((prompt("your first name ?")));
   console.log(thridPrompt);
   if(firstPrompt === name && secondPrompt === lastname && thridPrompt === 1) {
    alert(`${name}  ${lastname} `);
   } else {
       alert("your are not correct");
   }
  } else {
    let firstPrompt = prompt("your first name ?");
    let secondPrompt = prompt("your first name ?");
    if(firstPrompt === name && secondPrompt === lastname) {
        alert(`${name}  ${lastname} `);
       } else {
           alert("your are not correct");
       }
  }