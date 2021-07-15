import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import {
  IShareholder,
  ShareholdersControllerService,
} from '@backend-bridge/shareholders-controller';

@Injectable({
  providedIn: 'root',
})
export class ShareholdersListResolver implements Resolve<any> {
  constructor(private shareholdersController: ShareholdersControllerService) {}

  public resolve(): Observable<IShareholder[]> {
    return this.shareholdersController.getShareHolders();
  }
}
