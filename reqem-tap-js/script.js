function cedvel(){
let cedvel = document.getElementById("cedvel");
let cvb ="";
let color = "";
let ran ;
let ran1 = [];
let ran2 = [];
    for(let i = 1; i<=4; i++){
        cvb += `<tr>`;
        for(let j = 1; j<=4; j++){
            color = (i+j)%2 == 0 ? "gold" : "black";
            cvb += `<td> ${Math.floor(Math.random() *17)} </td>`;
        }
        cvb += `</tr>`;
        
    }

    for (let k = 1; k <= 16; k++){
    ran1[k] = k+1;
    }

    // for (let l = 0; l < 16; l++){
    //     ran = Math.floor(Math.random() * ran1.length);
    //     ran2[l] = ran;
    // }

    cedvel.innerHTML=`${cvb} `;

}

cedvel();


    