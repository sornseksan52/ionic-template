import { Injectable } from '@angular/core';

@Injectable()
export class GlobalProvider {
public baseURLAPI:string = 'http://10.1.99.234/combindrestapi/';
public authKey:string = 'Basic c2VrOjEyMzQ=';
public contendKey:string='application/json';
public partImage:string='http://10.1.99.234/combindrestapi/images/';
}
