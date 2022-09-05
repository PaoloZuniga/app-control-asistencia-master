import { Component, ElementRef, ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data: any;
  @ViewChild('loadingIcon', { read: ElementRef }) loadingIcon: ElementRef;
  @ViewChild('cartBtn', { read: ElementRef }) cartBnt: ElementRef;
  @ViewChild('cartFabBtn', { read: ElementRef }) cartFabBnt: ElementRef;

  constructor(private animationCtrl: AnimationController,
    private activeroute: ActivatedRoute, private router: Router) {
      this.activeroute.queryParams.subscribe(params => {  
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.data) 
      }else{this.router.navigate(["/login"])}
    });
    }
  startLoad() {
    const loadingAnimation = this.animationCtrl.create('loading-animation')
      .addElement(this.loadingIcon.nativeElement)
      .duration(2000)
      .iterations(10)
      .fromTo('transform', 'rotate(0deg)', 'rotate(360deg)');
      
      loadingAnimation.play();    
}  
}
