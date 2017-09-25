import {Component, EventEmitter, Output} from '@angular/core';
import {DataStorageService} from '../SharedModel/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
/*  @Output() featureSelected = new EventEmitter<string>();*/

  constructor(private dataStorageService: DataStorageService) { }


/*  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }*/

  onSaveData() {
    return this.dataStorageService.storeRecipes().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

}
