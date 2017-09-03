import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  loadFeature= 'recipe';

  onNavigate(feature: string) {
    this.loadFeature = feature;
  }
}
