class GitHub {
	constructor() {
		this.client_id = "7b594445e0d701fd5ce8";
		this.client_secret = "7f0eaa9f36f0202ff46f30a3217f53970eedcd70";
	}

	async getUser(user) {
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const profile = await profileResponse.json();

		return {
			profile
		}
	}
}

