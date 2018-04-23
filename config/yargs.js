


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
 }
)
.command('crear [name]', 'genera una tabla de multiplicar',(yargs) => {
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





module.exports = {
    argv
}