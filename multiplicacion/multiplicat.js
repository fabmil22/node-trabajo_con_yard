
const fs = require('fs');

let data = '';
let data1 = '';


let crearTabla  =  async (base) =>{

    if (!Number(base)){
       console.log(' para que funcion debe ser un numero');
        process.exit();
         
    }

    for(  let x = 0; x < 10; x ++ ){
        data +=  `La multiplicacion de ${ base} por ${x}  es igual a  ${base * x } \n` ;
        }
        
        
        fs.writeFile( `multiplicacion_${base}.txt` , data, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          });

}


let crearTablaDividir  =  async (base) =>{
    if (!Number(base)){
        console.log(' para que funcion debe ser un numero');
         process.exit();
          
     }

    for(  let x = 1; x < 10; x ++ ){
        data1 +=  ` ${ base} / ${x}  es igual a  ${base / x } \n` ;
        }
        
        
        fs.writeFile(`division_${base}.txt`, data1, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          });

}

module.exports ={
    crearTabla,
    crearTablaDividir


}