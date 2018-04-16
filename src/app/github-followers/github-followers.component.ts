import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest'; // This is a static method in the Observable class
// Factory method to combine multiple Observables

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {

    // Same logic as paramMap
    this.route.queryParamMap
      .subscribe( params =>{
        console.log(params);
        let order = params.get('order');
        console.log(order);
      });

    // Combining Observables
    // let observable = Observable.combineLatest([
    //   this.route.paramMap,
    //   this.route.queryParamMap
    // ]);

    // observable.subscribe( combined => {
    //   combined[0].get('<some_element>'); // from paramMap - line 32
    //   combined[1].get('<some_element>'); // from queryParamMap - line 33

    // this.service.getAll( { id: id, page: page }) // Just an example, our getAll() dont have parameters
    //   .subscribe(followers => this.followers = followers);
    // });

    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }
}
