import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
})
export class SinglePostComponent implements OnInit {
  postData: any;
  similarPostArray: any[] = [];

  constructor(
    private postService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((val: any) => {
      //count method
      this.postService.countViews(val.id);
      this.postService.loadOnePost(val.id).subscribe((post) => {
        //console.log(post);
        this.postData = post;
        this.loadSimilarPost(this.postData.category.categoryId);
      });
    });
  }

  loadSimilarPost(catId: string) {
    this.postService.loadCategoryPosts(catId).subscribe((val) => {
      this.similarPostArray = val;
    });
  }
}
