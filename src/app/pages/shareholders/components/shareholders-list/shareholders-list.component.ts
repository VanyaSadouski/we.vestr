import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IShareholder } from '@backend-bridge/shareholders-controller';

@Component({
  selector: 'app-shareholders-list',
  templateUrl: './shareholders-list.component.html',
  styleUrls: ['./shareholders-list.component.scss'],
})
export class ShareholdersListComponent implements OnChanges {
  @Input() public shareholders: IShareholder[] = [];
  @Output() public removeShareholders: EventEmitter<number> =
    new EventEmitter();

  public dataSource = new MatTableDataSource<IShareholder>([]);
  public displayedColumns: string[] = [
    'id',
    'name',
    'stockCount',
    'stockPercent',
    'stockType',
    'actions',
  ];
  constructor(private router: Router) {}

  public ngOnChanges(): void {
    if (this.shareholders) {
      this.dataSource.data = [...this.shareholders];
    }
  }

  public onRemoveShareholder(id: number) {
    this.removeShareholders.emit(id);
  }

  public updateShareholder(id: number) {
    this.router.navigate(['shareholder/edit', id]);
  }
}
