import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IShareholder,
  IShareholderForm,
  ShareholdersControllerService,
} from '@backend-bridge/shareholders-controller';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-update-shareholder',
  templateUrl: './update-shareholder.component.html',
  styleUrls: ['./update-shareholder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateShareholderComponent implements OnInit {
  public shareholder$: Observable<IShareholder>;
  public shareholderId: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shareholderController: ShareholdersControllerService
  ) {}

  ngOnInit(): void {
    this.shareholder$ = this.route.data.pipe(pluck('shareholder'));
    this.shareholderId = +this.route.snapshot.paramMap.get('id');
  }

  public updateShareholder(shareholder: IShareholderForm) {
    this.shareholderController.updateShareholder(
      this.shareholderId,
      shareholder
    );
    this.router.navigate(['./']);
  }
}
