import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log("GithubProfileComponent OnInit");
    // We can get the parameter username from 'followers/:id'
    // We also need to inject private route: ActivatedRoute in the constructor
    this.route.paramMap
      .subscribe(params =>{
        //console.log(params);
        let id = +params.get('id'); // The + consverts this string into a number
        console.log(id);
        // see video 129 why route uses Observables

        // This option does not use Observable, but Observable is a better choice (see end of video 129) 
        //console.log(this.route.snapshot.paramMap.get('id'));

        // The we can whatever we want with this id, such as calling the server to get this profile
        // such as, sth like this: service.getProfile(id)
      })
  }

  // video 134
  submit(){
    this.router.navigate(['/followers'], {
      queryParams: { page: 2 , order: 'oldest' }
    });
  }

}
