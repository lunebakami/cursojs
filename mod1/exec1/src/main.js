import api from './api';

class App{
    constructor(){
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.inputEl =  document.querySelector('input[name=repo]');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }

    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true){
        if(loading){
            let loadEl = document.createElement('span');
            loadEl.appendChild(document.createTextNode('Loading'));
            loadEl.setAttribute('id','load');

            this.formEl.appendChild(loadEl);
        }else{
            document.querySelector('#load').remove();
        }
    }


    async addRepository(event){
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if(repoInput.length === 0 )
            return ;
        
        this.setLoading();

        try {
            const response = await api.get(`/repos/${repoInput}`);
    
            const { name, description, html_url, owner:{ avatar_url } } = response.data;
            
            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url
            });
    
            this.inputEl.value = '';
    
            this.render();
        } catch (error) {
            alert('Repositório inexistente');
        }
        this.setLoading(false);
    }

    render(){
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo =>{
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descEl = document.createElement('p');
            descEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target','_blank');
            linkEl.setAttribute('href',repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }

}
new App();