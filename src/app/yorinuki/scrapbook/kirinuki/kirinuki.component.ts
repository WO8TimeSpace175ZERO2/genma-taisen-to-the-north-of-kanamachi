import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kirinuki',
  templateUrl: './kirinuki.component.html',
  styleUrls: ['./kirinuki.component.scss'],
})
export class KirinukiComponent implements OnInit {

  @Input() scrapbookId: string;

  constructor() { }

  ngOnInit() {}

}
