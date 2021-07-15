import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { IShareholder, IShareholderForm } from './interfaces';
import { map } from 'rxjs/operators';
import { StocksControllerService } from '@backend-bridge/stocks-controller';

@Injectable({
  providedIn: 'root',
})
export class ShareholdersControllerService {
  private shareholders: IShareholder[] = [
    {
      name: 'Ivan',
      id: 1,
      stockCount: 20,
      stockType: 'Preferred stocks',
    },
    {
      name: 'Geka',
      id: 2,
      stockCount: 60,
      stockType: 'Hybrid stocks',
    },
    {
      name: 'Ekaterina',
      id: 3,
      stockCount: 30,
      stockType: 'Common stocks',
    },
    {
      name: 'Vladislav',
      id: 4,
      stockCount: 2,
      stockType: 'Common stocks',
    },
    {
      name: 'Kiril',
      id: 5,
      stockCount: 11,
      stockType: 'Hybrid stocks',
    },
  ];

  constructor(private stocksController: StocksControllerService) {}

  public getShareHolders() {
    return of(this.shareholders);
  }

  public getShareholder(id: number) {
    return of(
      this.shareholders.filter((shareholder) => shareholder.id === id)[0]
    );
  }

  public removeShareholder(id: number) {
    this.shareholders = this.shareholders.filter(
      (shareholder: IShareholder) => shareholder.id !== id
    );
    return of(this.shareholders);
  }

  public addShareholder(shareholderForm: IShareholderForm) {
    let maxId;
    if(this.shareholders.length){
       maxId = Math.max.apply(
        Math,
        this.shareholders.map(function (o) {
          return o.id;
        })
      );
    }else{
      maxId = 0
    }
    this.shareholders.push({ ...shareholderForm, id: ++maxId });
    return of(this.shareholders);
  }

  public updateShareholder(id: number, shareholderForm: IShareholderForm) {
    const foundIndex = this.shareholders.findIndex(
      (shareholder) => shareholder.id === id
    );
    this.shareholders[foundIndex] = {
      id,
      ...shareholderForm,
    };
  }

  public countShareholdersPrecent() {
    this.shareholders.forEach((shareholder) => {
      shareholder.stockPercent = +(
        (100 * shareholder.stockCount) /
        this.stocksController.stocksCount
      ).toFixed(3);
    });
  }

  public splitShareholdersStockCount(splitValue: number) {
    return of(this.shareholders).pipe(
      map((shareholders) => {
        shareholders.forEach((shareholder) => {
          shareholder.stockCount *= splitValue;
        });
      })
    );
  }

  public checkStocksAvailability(stockCount: number = 0, shareholderId:number) {
    return this.getShareHolders().pipe(
      map((shareholders) => {
        let stocksCount = this.stocksController.stocksCount - stockCount;
        shareholders.forEach((shareholder) => {
          if(shareholderId && shareholderId === shareholder.id){
            return
          }
          stocksCount = stocksCount - shareholder.stockCount;
        });
        return stocksCount > 0 ? true : false;
      })
    );
  }
}
