import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor( private CustomerService: CustomerService ) { }
  submitted: boolean;
  formControls = this.CustomerService.form.controls;

  ngOnInit() {

  }

  onSubmit() {
    this.submitted = true;
    if(this.CustomerService.form.valid)
    {
      //if (this.CustomerService.form.get('$key').value == null)

   // else
   this.submitted = false;
  }
  }

}
