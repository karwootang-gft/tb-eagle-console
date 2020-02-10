import { createSolution } from './solutions.actions';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Solution } from './interfaces';
import { error } from 'protractor';
import { startDeployment } from '../solutions/solutions.actions';
@Injectable()
export class SolutionsService extends EntityCollectionServiceBase<Solution> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, private http: HttpClient) {
    super('Solution', serviceElementsFactory);
  }

  private BASE_URL = 'http://localhost:3000/api';

  createSolution(solution: Solution): void {
    const url = `${this.BASE_URL}/solutions`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post(url, solution, { headers }).subscribe(
      (val: Solution) => {
        console.log('POST call successful value returned in body', val);
        this.store.dispatch(startDeployment({ name: String(val.id) }));
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
        this.getAll();
      }
    );
    console.log(solution + ' posted');
  }
}
