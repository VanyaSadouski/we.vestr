import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IShareholder,
  IShareholderForm,
  ShareholdersControllerService,
} from '@backend-bridge/shareholders-controller';
import { StocksControllerService } from '@backend-bridge/stocks-controller';

@Component({
  selector: 'app-shareholder-form',
  templateUrl: './shareholder-form.component.html',
  styleUrls: ['./shareholder-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShareholderFormComponent implements OnInit {
  @Input() public isEdit: boolean = false;
  @Input() public title: string;
  @Input() public shareholder: IShareholder;
  @Output() public save: EventEmitter<IShareholderForm> = new EventEmitter();
  public stockTypes: string[] = [
    'Preferred stocks',
    'Hybrid stocks',
    'Common stocks',
  ];
  public form: FormGroup;
  public isStocksAvailable: boolean = true;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private shareholdersController: ShareholdersControllerService
  ) {}

  public ngOnInit() {
    this.createForm();
  }

  public cancel() {
    this.router.navigate(['shareholders']);
  }

  saveShareholder() {
    if (this.form.invalid) {
      return;
    }
    this.save.emit(this.form.value);
  }

  public maxCountLimit() {
    this.shareholdersController
      .checkStocksAvailability(
        this.form.get('stockCount').value,
        this.shareholder ? this.shareholder.id : null
      )
      .subscribe((isStocksAvailable) => {
        this.isStocksAvailable = isStocksAvailable;
        if (!isStocksAvailable) {
          this.form.setErrors(['maxCountLimit']);
        }
      });
  }

  private createForm(): void {
    this.form = this.fb.group({
      name: this.shareholder
        ? [this.shareholder.name, Validators.required]
        : [null, Validators.required],
      stockType: this.shareholder
        ? [this.shareholder.stockType, Validators.required]
        : [null, Validators.required],
      stockCount: this.shareholder
        ? [
            this.shareholder.stockCount,
            [Validators.required, Validators.min(0)],
          ]
        : [null, [Validators.required, Validators.min(0)]],
    });
  }
}
