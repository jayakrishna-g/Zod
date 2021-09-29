/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { LoadingService } from './shared/services/loading.service';

// eslint-disable-next-line @typescript-eslint/naming-convention, no-var
declare var MathJax: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoadingService]
})
export class AppComponent implements OnInit {
  title = 'UI';
  loading = false;

  constructor(
    private _loading: LoadingService
  ) { }

  ngOnInit() {
    this.listenToLoading();
  }

  /**
   * Listen to the loadingSub property in the LoadingService class. This drives the
   * display of the loading spinner.
   */
  listenToLoading(): void {
    this._loading.loadingSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
        // this.loading = true;
      });
  }
}
