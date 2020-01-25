class UI{
    constructor(){
        this.profile = document.getElementById('profile')
    }
    
    showProfile(data){
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3 ">
                    <img src="${data.avatar_url}" class="img-fluid mb-2">
                    <a href="${data.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${data.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${data.public_gists}</span>
                    <span class="badge badge-success">Followers: ${data.followers}</span>
                    <span class="badge badge-info">Following: ${data.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${data.company}</li>
                        <li class="list-group-item">Website/Blog: ${data.blog}</li>
                        <li class="list-group-item">Location: ${data.location}</li>
                        <li class="list-group-item">Member Since: ${data.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
                
        `;
    }

    clearProfile(){
        this.profile.innerHTML = '';
    }

    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }

    showAlert(message, className){
        this.clearAlert();
        const div  = document.createElement('div')
        div.className = className;
        div.appendChild(document.createTextNode(message));

        const constainer = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        constainer.insertBefore(div, search);

        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    showRepos(data){
        let output = '';
        data.forEach((repo) =>{
            output += `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
            `
        });

        document.getElementById('repos').innerHTML = output
    }
}