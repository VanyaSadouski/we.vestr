import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IShareholder,
  ShareholdersControllerService,
} from '@backend-bridge/shareholders-controller';
import { Observable, of, pipe } from 'rxjs';
import { pluck, take } from 'rxjs/operators';

@Component({
  selector: 'app-shareholders',
  templateUrl: './shareholders.component.html',
  styleUrls: ['./shareholders.component.scss'],
})
export class ShareholdersComponent implements OnInit {
  public shareholders$: Observable<IShareholder[]>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private shareholdersController: ShareholdersControllerService
  ) {
    this.shareholders$ = this.route.data.pipe(pluck('shareholders'));
  }

  public ngOnInit() {
    this.shareholdersController.countShareholdersPrecent();
  }

  public onRemoveShareholder(id: number) {
    this.shareholdersController
      .removeShareholder(id)
      .pipe(take(1))
      .subscribe(() => {
        return this.router.navigate(['/']);
      });
  }

  public onSplitStock() {
    this.router.navigate(['shareholders/split-stock']);
  }

  public onAddShareholder() {
    this.router.navigate(['shareholders/add']);
  }
}
