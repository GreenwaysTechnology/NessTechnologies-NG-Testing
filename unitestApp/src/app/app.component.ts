import { Component } from '@angular/core';
import { Author, AuthorService } from './demo.spec';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  author: Author;

  title = 'unitestapp';
  constructor(private s: AuthorService) { }

  ngOnInit() {
    this.author = this.s.getAuthor('1');
  }
}
