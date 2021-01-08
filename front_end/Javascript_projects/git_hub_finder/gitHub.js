// creat constroctor function with es6 
class Github {
  constructor() {
    this.clientId = 'ef584a746e1ca5d7b901';
    this.clientSecret = '1a1963bd16826b0582f4228f64fba4a60f238aee';
    this.reposCount = 5;
    this.reposSort = 'created: asc';
  }

  async getUser(user) {
    const userProf = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);

    const profileRepo = await  fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`)
    const profile = await userProf.json();
    const userRepos = await profileRepo.json();

    return {
      profile,
      userRepos
    }
  }
}