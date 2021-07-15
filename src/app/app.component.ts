import {
  AfterContentChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnInit,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StocksControllerService } from '@backend-bridge/stocks-controller';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public initialStocksCount$: Observable<number>;

  constructor(
    private stocksController: StocksControllerService,
    private router: Router
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.initialStocksCount$ = this.stocksController.getStocksCount();
      });
  }
}
