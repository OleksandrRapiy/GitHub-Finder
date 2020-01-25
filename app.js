const searchUser = document.getElementById('searchUser');
const github = new GitHub();
const ui = new UI();

searchUser.addEventListener('keyup', (event)=>{
    const userText = event.target.value;
    if(userText != ''){
        github.getUser(userText)
                .then(data => {
                    if (data.profile.message === 'Not found' || data.profileResponse.status == '403' || data.profileResponse.status == '404') {
                        ui.showAlert('User not found', 'alert alert-danger ');
                    } else {
                        ui.showProfile(data.profile);
                        ui.showRepos(data.repos)
                    }
                })
    } else {
        ui.clearProfile();
    }
});