let basis = [4,3,2,1,0,1,2,3,4]; 




function create (basis) {

    
    let pattern = ``; 
    var E = "&nbsp;";

for (let i=0; i <basis.length;i++) {



    if (basis[i] === 4) {

      pattern +=  `${E}`+ `${E}`+  `${E}`+   `${E}`+ `${E}`+ `${E}`+ `${E}`+  "*<br>";

    }

    else if (basis[i] === 3) {
        pattern += `${E}`+`${E}` + `${E}`+ `${E}`+ `${E}`+   "***<br>"; 
    }

    else if (basis[i] === 2) {

        pattern += `${E}`+`${E}` + `${E}`+ "******<br>";
    }

    else if (basis[i] === 1) {

        pattern += `${E}`+ "********<br>"; 
    }

    else if (basis[i] === 0) {
        pattern += "**********<br>"; 

    } 
    
}; 

return pattern; 

}



create (basis); 


console.log (create(basis)); 


document.getElementById("diamond").innerHTML = (create(basis));
