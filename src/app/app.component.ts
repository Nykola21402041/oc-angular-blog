import { Component } from '@angular/core';
import { Post } from './models/Post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Blog';

  postsObjects = [
    new Post('Mon Premier post',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      8),
    new Post('Mon deuxième post',
      'Nullam lacinia felis ut cursus dictum.',
      -2),
    new Post('Encore un post',
      'Un texte passionnant.',
      4),
  ];
}
