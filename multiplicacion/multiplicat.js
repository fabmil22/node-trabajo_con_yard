var colors = require('colors');
const fs = require('fs');

let data = '';
let data1 = '';
let listarTable =  async (base , limit = 10) => {


    //if base or  limit  don't be number
    if ( !Number(base)) {
        
        console.log(' para que funcion debe ser un numero'.green);
        console.log(colors.green('hello')); 
         process.exit();
          
     }

     for(  let x = 0 ; x <= limit ; x ++ ){
        data +=  ` ${ base} x ${x}  =  ${base * x } \n` ;

        }
       console.log(data);
}


let crearTabla  =  async (base , limit = 10) =>{

    if (!Number(base)){
       console.log(' para que funcion debe ser un numero');
        process.exit();
         
    }

    for(  let x = 0; x <= limit ; x ++ ){
        data +=  ` ${ base} x ${x}  = ${base * x } \n` ;
        }
        
        
        fs.writeFile( `multiplicacion_${base}.txt` , data, (err) => {
            if (err) throw err;
            console.log(colors.bgCyan('Has been saved!'));
          });

}


let crearTablaDividir  =  async (base , limit = 10) =>{
    if (!Number(base)){
        console.log(' para que funcion debe ser un numero');
         process.exit();
          
     }

    for(  let x = 1; x < limit; x ++ ){
        data1 +=  ` ${ base} / ${x}  es igual a  ${base / x } \n` ;
        }
        
        
        fs.writeFile(`division_${base}.txt`, data1, (err) => {
            if (err) throw err;
            console.log(colors.bgCyan('Has been saved!'));
          });

}

module.exports ={
    crearTabla,
    crearTablaDividir,
    listarTable 


}