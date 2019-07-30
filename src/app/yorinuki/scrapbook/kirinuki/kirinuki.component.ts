import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { KirinukiModalContentComponent } from '../kirinuki-modal-content/kirinuki-modal-content.component';
import { Kirinuki } from '../../../Kirinuki';
import { ImgStyle } from '../../../ImgStyle';


@Component({
  selector: 'app-kirinuki',
  templateUrl: './kirinuki.component.html',
  styleUrls: ['./kirinuki.component.scss'],
})
export class KirinukiComponent implements OnInit {

  @Input() kirinuki: Kirinuki;

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async presentModal(enlargedImageURI: string, enlargedImageAlt: string, enlargedImageStyle: ImgStyle) {
    const modal = await this.modalController.create({
      component: KirinukiModalContentComponent,
      componentProps: {
        enlargedImageURI,
        enlargedImageAlt,
        enlargedImageStyle
      }
    });
    return await modal.present();
  }


}
