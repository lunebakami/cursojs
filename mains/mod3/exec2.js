import axios from 'axios';

// function getUserFromGithub(user) {
//     axios.get(`https://api.github.com/users/${user}`)
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(err => {
//             console.log('Usuário não existe');
//         })
// }
// getUserFromGithub('diego3g');
// getUserFromGithub('diego3g124123');

async function getGitHubUser(user){
    try{
        console.log(await axios.get(`https://api.github.com/users/${user}`));
    } catch(err){
        console.log('User not found');
    }   
}

getGitHubUser('lunebakami');
getGitHubUser('lunnebakami');