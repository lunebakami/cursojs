const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map(function(usuarios){
    return usuarios.idade;
});

console.log(idades);   

const users = usuarios.filter(function(usuarios){
    if(usuarios.empresa === 'Rocketseat' && usuarios.idade >= 18){
        return usuarios;
    }
});

console.log(users);

const userGoogle = usuarios.find(function(usuarios){
    return usuarios.empresa === 'Google';
})

console.log(userGoogle);

const userages = usuarios.map(function(usuario){
    usuario.idade *= 2;
    return usuario;
});

userfifty = userages.filter(function(usuario){
    if(usuario.idade < 50){
        return usuario;
    }
});

console.log(userfifty);