import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import {
  IShareholder,
  ShareholdersControllerService,
} from '@backend-bridge/shareholders-controller';

@Injectable({
  providedIn: 'root',
})
export class ShareholderResolver implements Resolve<any> {
  constructor(private shareholdersController: ShareholdersControllerService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<IShareholder> {
    return this.shareholdersController.getShareholder(
      +route.paramMap.get('id')
    );
  }
}
