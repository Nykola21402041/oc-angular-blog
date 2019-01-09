import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../../services/posts.service';
import {Post} from '../../models/Post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onLoveIt(post: Post) {
    this.postsService.lovePost(post, true);
  }

  onDontLoveIt(post: Post) {
    this.postsService.lovePost(post, false);
  }

  onDeletePost(post: Post) {
    this.postsService.removePost(post);
  }

}
