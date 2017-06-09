import { Component } from '@angular/core';
import { LocalStorageService } from 'app/services'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LocalStorageService]
})
export class AppComponent {
  title = 'app';

  constructor(localStorage: LocalStorageService) {
  }

}
