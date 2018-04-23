const argv = require('./config/yargs').argv;
var colors = require('colors/safe');
const { crearTabla , crearTablaDividir , listarTable } = require('./multiplicacion/multiplicat');

 let commad = argv._[0];
 let base = argv.base;
 let limite = argv.limite;

console.log('el limite es ', limite);
 switch(commad){
      case 'listar':
        console.log('listando');
        listarTable(base , limite);

      break;
     case 'crear':
        console.log('creando');
        crearTabla(base , limite).then(
            console.log( colors.cyan(`Se ha creado la  tabla del ${base}`)) ).catch( err => console.log(err));



        crearTablaDividir(base , limite).then( console.log(colors.cyan(`Se ha creado la  tabla  de dividir de ${base}`)))
        .catch( err => console.log(err));
       break;
      default:
       console.log(colors.red('no encontrado'));
 }


