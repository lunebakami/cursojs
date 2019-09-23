// 3.1
const arr = [1, 2, 3, 4, 5];
const ten = arr.map(function(item) {
 return item + 10;
});

console.log(ten);

const twenty = arr.map(item => item + 10);

console.log(twenty);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
 return usuario.idade;
}

console.log(mostraIdade(usuario));

const age = (usuario) => (usuario.idade);

console.log(age(usuario));

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}


console.log(mostraUsuario(nome, idade));

console.log(mostraUsuario(nome));

const user = (nome = 'Diego',idade = 18) => ({nome, idade});

console.log(user(nome,idade));
console.log(user(nome));



// 3.4
const promise = function() {
    return new Promise(function(resolve, reject) {
        return resolve();
    })
}

console.log(promise());

const promise2 = new Promise = (resolve, reject) => resolve();

console.log(promise2());

