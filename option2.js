let basis = [4,3,2,1,0,1,2,3,4]; 



function create (basis) {



for (let i=0; i <basis.length;i++) {

    if (basis[i] === 4) {

        console.log("     *") ;

    }

    else if (basis[i] === 3) {
        console.log("    ***"); 

    }

    else if (basis[i] === 2) {

        console.log("  ******");
        

    }
    else if (basis[i] === 1) {

        console.log(" ********"); 
        

    }

    else if (basis[i] === 0) {
        console.log("**********"); 

    }

}



}

create (basis); 



