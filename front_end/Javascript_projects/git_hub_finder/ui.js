class UI {
  constructor() {
    this.profile = document.getElementById('profile');
    this.error = document.getElementById('error');
  }
 
   displayUser(user) {
     this.profile.innerHTML = ` 
     
 <div class="card card-body mb-3">
 <div class="row">
   <div class="col-md-3">
     <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
     <a href="${user.html_url}" target="_blank" class="btn-primary btn-block mb-4">view profile</a>
   </div>
   <div class="col-md-9">
     <span class="badg badg-primary">public repos: ${user.public_repos}</span>
     <span class="badg badg-secondary">public gists: ${user.public_gists}</span>
     <span class="badg badg-success">followers: ${user.followers}</span>
     <span class="badg badg-info">following: ${user.following}</span>
     <br><br>
     <ul class="list-group">
     <li class="list-group-item">Company: ${user.company}</li>
     <li class="list-group-item">websit/blog: ${user.blog}</li>
     <li class="list-group-item">location: ${user.location}</li>
     <li class="list-group-item">member since: ${user.created_at}</li>
     </ul>
   </div>
 </div>
 </div>
 <h3 class="page-heading mb-3">latest repos</h3>
 <div id="repos"></div>
     `
   }

   displayRepos(repos) {
    let output = '';
    repos.forEach((element) => {
      output += `
      <div class="card card-body mb-2">
      <div class="row">
        <div class="col-md-6">
          <a href="${element.html_url}" target="_blank">${element.name}</a>
        </div>
        <div class="col-md-6">
        <span class="badge badge-primary">Stars: ${element.stargazers_count}</span>
        <span class="badge badge-secondary">Watchers: ${element.watchers_count}</span>
        <span class="badge badge-success">Forks: ${element.forms_count}</span>
        </div>
      </div>
    </div>
      `;
    });

    document.getElementById('repos').innerHTML = output;

   }

   displayError(message) {
     // takes care of not showing more then one error msg
     this.clearError();
    // creat div element 
    const div = document.createElement('div');
    // give it a class
    div.className = 'error alert alert-danger';
    // write a txt msg inside
    div.appendChild(document.createTextNode(message));
    // get parent element 
    const container = document.querySelector('.searchContainer');
    //get search box 
    const search = document.querySelector('.search');
    // insert alert 
    container.insertBefore(div,search);
    // clear msg after some time 
  
    setTimeout(() => {
     this.clearError();
    }, 1500)
    
   }

   //clearError message

   clearError(){
     const error = document.querySelector('.error');


     if(error){
       error.remove();
     }
   }

   clearDisplay() {
     this.profile.innerHTML = '';
   }
 }