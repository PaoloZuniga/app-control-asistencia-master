import { Component, ElementRef, ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild('loadingIcon', { read: ElementRef }) loadingIcon: ElementRef;
  @ViewChild('cartBtn', { read: ElementRef }) cartBnt: ElementRef;
  @ViewChild('cartFabBtn', { read: ElementRef }) cartFabBnt: ElementRef;

  constructor(private animationCtrl: AnimationController) {}
  startLoad() {
    const loadingAnimation = this.animationCtrl.create('loading-animation')
      .addElement(this.loadingIcon.nativeElement)
      .duration(1500)
      .iterations(3)
      .fromTo('transform', 'rotate(0deg)', 'rotate(360deg)');

    // Don't forget to start the animation!
    loadingAnimation.play();
}
}