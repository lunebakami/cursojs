import axios from 'axios';

// const buscaUsuario = usuario => {
//     axios.get(`https://api.github.com/users/${user}`)
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(err => {
//             console.log('Usuário não existe');
//         });
// }
// buscaUsuario('diego3g');

const searchUser = async (user) => {
    try {
        console.log(await axios.get(`https://api.github.com/users/${user}`));
    } catch (error) {
        console.log('User not found');
    }
}

searchUser('lunebakami');