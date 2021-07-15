import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import {
  IShareholderForm,
  ShareholdersControllerService,
} from '@backend-bridge/shareholders-controller';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-create-shareholder',
  templateUrl: './create-shareholder.component.html',
  styleUrls: ['./create-shareholder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateShareholderComponent {
  constructor(
    private shareholderController: ShareholdersControllerService,
    public router: Router
  ) {}

  public addShareholder(newShareholder: IShareholderForm) {
    this.shareholderController
      .addShareholder(newShareholder)
      .pipe(take(1))
      .subscribe(() => {
        this.router.navigate(['shareholders']);
      });
  }
}
