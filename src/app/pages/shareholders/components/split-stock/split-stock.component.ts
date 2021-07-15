import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareholdersControllerService } from '@backend-bridge/shareholders-controller';
import { StocksControllerService } from '@backend-bridge/stocks-controller';
import { combineLatest, forkJoin, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-split-stock',
  templateUrl: './split-stock.component.html',
  styleUrls: ['./split-stock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplitStockComponent implements OnInit {
  public form: FormGroup;
  constructor(
    private stocksController: StocksControllerService,
    private fb: FormBuilder,
    private router: Router,
    private shareholdersController: ShareholdersControllerService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  public cancel() {
    this.router.navigate(['shareholders']);
  }

  public recountStocks() {
    if (this.form.invalid) {
      return;
    }
    const splitStocksCount = this.stocksController.stocksSplit(
      this.form.get('splitValue').value
    );

    const splitShareholdersStockCount =
      this.shareholdersController.splitShareholdersStockCount(
        this.form.get('splitValue').value
      );
    forkJoin([splitStocksCount, splitShareholdersStockCount])
      .pipe(take(1))
      .subscribe(() => {
        this.router.navigate(['shareholders']);
      });
  }

  private createForm(): void {
    this.form = this.fb.group({
      splitValue: [null, Validators.required],
    });
  }
}
