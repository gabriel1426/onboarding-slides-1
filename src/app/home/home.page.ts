import { Component, ElementRef, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface slideItem {
  title: string;
  message: string;
  icon: string;
  img: string;
  onlyImage: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  public slides: slideItem[];
  public showLoginButton = false;
  private swiper: ElementRef;

  constructor(private translate: TranslateService) {
    this.slides = this.translate.instant('slides');
  }

  nextStep() {
    const swiperEl: any = document.querySelector('swiper-container');
    swiperEl?.swiper?.slideNext();
  }

  ngOnInit(): void {
    const swiperEl = document.querySelector('swiper-container');
    console.log(swiperEl);
    swiperEl?.addEventListener('swiper-init', (event) => {
      const [swiper] = (event as any).detail;
      this.swiper = swiper;
      console.log(swiper);
    });

    swiperEl?.addEventListener('swiper-slidechange', (event) => {
      const [swiper] = (event as any).detail;
      this.showLoginButton = swiper.isEnd;
    });
  }
}
