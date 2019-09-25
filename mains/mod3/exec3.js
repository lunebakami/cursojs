import axios from 'axios';

// class Github {
//     static getRepositories(repo) {
//         axios.get(`https://api.github.com/repos/${repo}`)
//             .then(response => {
//                 console.log(response.data);
//             })
//             .catch(err => {
//                 console.log('Repositório não existe');
//             })
//     }
// }
// Github.getRepositories('rocketseat/rocketseat.com.br');
// Github.getRepositories('rocketseat/dslkvmskv');

class GitHub{
    static async getRepos(repo){
        try {
            const repository = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(repository);
        } catch (error) {
            console.log('Repository not found');
        }
    }
}

GitHub.getRepos('ufcnasescolas/ufcnasescolas.github.io');
GitHub.getRepos('ufcnasescolas/ufcnasescolas');