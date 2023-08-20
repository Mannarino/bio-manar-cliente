import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  emailField: FormControl;

  constructor(){
    this.emailField = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  }

  sendEmail(){
    if(this.emailField.valid){
      this.emailField.setValue('');
      alert('Emial enviado!');
    }
  }
}
