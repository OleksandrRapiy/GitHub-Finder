class GitHub{
    constructor() {
        this.client_id = '814cd75f811907d4a149';
        this.client_secret = 'd193f10e713a7276b1d2eb95e2d9c92436af2e85';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
        // ?client_id=${this.cliend_id}&client_secret=${this.client_secret}
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile,
            profileResponse,
            repos
        }
    }


}