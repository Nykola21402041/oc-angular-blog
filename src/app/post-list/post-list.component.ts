import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreated_at: Date;


  constructor() { }

  ngOnInit() {
  }

  onLoveIt() {
    this.postLoveIts++;
  }

  onDontLoveIt() {
    this.postLoveIts--;
  }

}
