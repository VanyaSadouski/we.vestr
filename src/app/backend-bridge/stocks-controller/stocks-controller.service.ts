import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StocksControllerService {
  public stocksCount: number = 515;

  public getStocksCount() {
    return of(this.stocksCount);
  }

  public stocksSplit(splitValue: number) {
    return of(this.stocksCount).pipe(
      tap((stocksCount) => {
        this.stocksCount = stocksCount * splitValue;
      })
    );
  }
}
