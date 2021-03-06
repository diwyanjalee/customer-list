import { Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }
  form = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.email),
    mobile: new FormControl('',[Validators.required,Validators.minLength(10)]),
    location: new FormControl('')

  });
}
