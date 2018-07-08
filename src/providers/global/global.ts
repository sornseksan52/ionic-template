import { Injectable } from '@angular/core';

@Injectable()
export class GlobalProvider {
public baseURLAPI:string = 'http://localhost/combindrestapi/';
public authKey:string = 'Basic c2VrOjEyMzQ=';
public contendKey:string='application/json';
public partImage:string='http://localhost/combindrestapi/images/';
}
