import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {LoginService} from './state/login.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    emailControl: [null],
    passwordControl: [null]
  });

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const email = this.form.get('emailControl')?.value;
    const password = this.form.get('passwordControl')?.value;
    console.log(email)
    this.loginService.authenticate(email, password).subscribe(result => {
      if(result){
        this.router.navigateByUrl('/home')
        console.log('bin hier')
      }
    })
    }


}
