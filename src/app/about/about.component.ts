import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  template: `
    <p>
      about works!
    </p>
  `,
  styles: [
  ]
})
export class AboutComponent implements OnInit {
  data = {
    name: 'Michael Jordan',
    bio: 'Former baseball player',
    image: 'https://source.unsplash.com/random'
  };

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle(this.data.name);
    this.meta.addTags([
      { name: 'twitter:card', content: 'summary' },
      { name: 'og:url', content: '/about' },
      { name: 'og:title', content: this.data.name },
      { name: 'og:description', content: this.data.bio },
      { name: 'og:image', content: this.data.image }
    ]);
  }

}
