import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  featuredPostsArray: any;
  lastestPostsArray: any;

  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    this.postService.loadFeaturedPosts().subscribe((val) => {
      //console.log(val);
      this.featuredPostsArray = val;
    });
    this.postService.loadLatest().subscribe((val) => {
      this.lastestPostsArray = val;
    });
  }
}
