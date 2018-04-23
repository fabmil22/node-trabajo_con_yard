

  const argv = require('yargs')
 .usage('$0 <cmd> [args]')
 .command('listar [name]', 'Imprime en consola la tabla de multiplicar',(yargs) => {
    yargs.positional('base' , {
        demand: true,
        alias: 'b',
        type: 'number',
        describe: ' es la base que vamos a multiplicar'
         
    }),
    yargs.positional('limite', {
        alias: 'lim',
        
        type: 'string',
        describe: ' es el limite que  se muestra muestra',
        defauld: '12'
    })
})
.help().argv;
const { crearTabla , crearTablaDividir , listarTable } = require('./multiplicacion/multiplicat');



//let argv = process.argv;
//let parametr = argv[2];
//let valor = parametr.split('=');
//let  base = valor[1];
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
      crearTabla(base , limite).then( console.log(`Se ha creado la  tabla del ${base}`))
      .catch( err => console.log(err));
      crearTablaDividir(base , limite).then( console.log(`Se ha creado la  tabla  de dividir de ${base}`))
      .catch( err => console.log(err));


      break;
      default:
      console.log('no encontrado');
 }


