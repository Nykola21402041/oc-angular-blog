export class Post {

  loveIts: number;
  created_at: string;

  constructor(public title: string,
              public content: string,
              loveIts: number) {
    this.loveIts = loveIts;
    this.created_at = Date();
  }

}
