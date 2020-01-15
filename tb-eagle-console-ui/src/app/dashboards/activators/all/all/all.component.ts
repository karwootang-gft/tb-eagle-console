import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatorsService } from '@app/dashboards/activators/activators.service';
import { Application } from '@app/dashboards/activators/interfaces';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  apps$: Observable<Application[]>;

  constructor(private appsService: ActivatorsService) {
    this.apps$ = appsService.entities$;
  }

  ngOnInit() {
    this.appsService.getAll();
  }
}
