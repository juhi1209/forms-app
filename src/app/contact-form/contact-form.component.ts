import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  log(x) {console.log(x);}
  submit(t) {
    console.log(t);
  }
  constructor() { }

  ngOnInit() {
  }

}
