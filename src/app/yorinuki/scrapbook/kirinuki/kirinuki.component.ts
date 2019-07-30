import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { KirinukiModalContentComponent } from '../kirinuki-modal-content/kirinuki-modal-content.component';
import { Kirinuki } from '../../../Kirinuki';


@Component({
  selector: 'app-kirinuki',
  templateUrl: './kirinuki.component.html',
  styleUrls: ['./kirinuki.component.scss'],
})
export class KirinukiComponent implements OnInit {

  @Input() kirinuki: Kirinuki;

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async presentModal(enlargedImageURI: string, enlargedImageAlt: string, enlargedImageHeight: string, enlargedImageWidth: string) {
    const modal = await this.modalController.create({
      component: KirinukiModalContentComponent,
      componentProps: {
        enlargedImageURI,
        enlargedImageAlt,
        enlargedImageHeight,
        enlargedImageWidth
      }
    });
    return await modal.present();
  }


}
