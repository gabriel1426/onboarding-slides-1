import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { StatusBar, Style } from '@capacitor/status-bar';

register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor() {
    this.setLightTheme();
  }

  private async setLightTheme() {
    await StatusBar.setBackgroundColor({ color: '#49B742' });
    await StatusBar.setStyle({ style: Style.Light });
  }
}
