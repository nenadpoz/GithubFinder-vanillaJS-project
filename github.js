class GitHub {
	constructor() {
		this.client_id = "7b594445e0d701fd5ce8";
		this.client_secret = "7f0eaa9f36f0202ff46f30a3217f53970eedcd70";
		this.repos_count = 5;
		this.repos_sort = "created: asc";
	}

	async getUser(user) {
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const profile = await profileResponse.json();
		const repos = await repoResponse.json();

		return {
			profile,
			repos
		}
	}
}

