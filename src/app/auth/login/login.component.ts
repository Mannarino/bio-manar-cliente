import { Component, OnInit, ViewChild, ElementRef , AfterViewInit, HostListener  } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';


import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { MemoryService } from 'src/app/core/memory.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  @HostListener('document:keydown.enter', ['$event'])
  onEnterKeyPressed(event: KeyboardEvent): void {
    event.preventDefault(); // Evita que se haga un salto de línea o envío del formulario normal
    if (this.form.valid) {
      this.accessWithEmailAndPassword();
    }
  }
  showPassword: boolean = false;
 
  form = new FormGroup({
    user: new FormControl('',[Validators.required]),
    password: new FormControl('', Validators.required),
    remember: new FormControl(false)
  });
  constructor(private loginService:LoginService,
              private router: Router,
              private memoryService:MemoryService) {
               
               }

  ngOnInit(): void {
    if( localStorage.getItem('remember')){
      this.form.setValue({
        user:localStorage.getItem('user') ,
        password:localStorage.getItem('password') ,
        remember: true
      });
    }
   
  } 
  get email() { return this.form.get('user'); }
  get password() { return this.form.get('password'); }


  rememberUserAndPassword(remember:boolean | null,user:string, password:string){
    if (remember) {
      localStorage.setItem('user',user);
      localStorage.setItem('password',password);
    } else {
      localStorage.removeItem('user');
      localStorage.removeItem('password');
    }
  }

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }
  accessWithEmailAndPassword(): void {
    //logica remember user and password
    if (this.form.get('remember')?.value && this.form.get('user')?.value && this.form.get('password')) {
        this.rememberUserAndPassword(this.form.get('remember')?.value!,this.form.get('user')?.value!,this.form.get('password')?.value!)
    }
    this.loginService.loginUserByEmailAndPassword(this.form.value)
    .subscribe(
      data => {
        this.memoryService.setPassword(this.form.get('password')?.value!)
        console.log(data)
        this.router.navigate(['/admin']); 

      }
    )
  }
}