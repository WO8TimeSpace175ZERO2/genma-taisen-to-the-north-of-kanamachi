import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-self-intro',
  templateUrl: './self-intro.page.html',
  styleUrls: ['./self-intro.page.scss'],
})
export class SelfIntroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openLink(uri: string) {
    window.open(uri, '_system');
  }
}
