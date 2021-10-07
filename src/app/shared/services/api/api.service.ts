import { Inject, Injectable } from '@angular/core';
import {
  QueryParams,
  PatchBodyQuery,
} from '../../models/query-parameters.interface';
import { HttpService } from '../http/http.service';

// put Data collections here
type Collection = 'test_collections' | 'test_collections_2';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // env

  constructor(@Inject(HttpService) public http: HttpService) {}

  // fn

  insert(collection: Collection, body: object) {
    return this.http.start('post', 'post endpoint here' + collection, body);
  }
  update(collection: Collection, body: PatchBodyQuery) {
    return this.http.start('patch', 'patch endpoint here' + collection, body);
  }
  get(collection: Collection, QueryParams?: QueryParams) {
    return this.http.start(
      'get',
      'get endpoint here' + collection,
      {},
      QueryParams
    );
  }
}
