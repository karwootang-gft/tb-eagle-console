import { Component, Injector, Inject } from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';
import { BreakpointObserver } from '@angular/cdk/layout';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-solution-under-creation',
  templateUrl: './solution-under-creation.component.html',
  styleUrls: ['./solution-under-creation.component.scss']
})
export class SolutionUnderCreationComponent extends MatSnackBar {
  constructor(
    private overlay: Overlay,
    private injector: Injector,
    private breakpointObserver: BreakpointObserver,
    private liveAnnouncer: LiveAnnouncer,
    private snackBar: MatSnackBar,
    @Inject(MAT_SNACK_BAR_DEFAULT_OPTIONS) private config: MatSnackBarConfig
  ) {
    super(overlay, liveAnnouncer, injector, breakpointObserver, snackBar, config);
  }
}
