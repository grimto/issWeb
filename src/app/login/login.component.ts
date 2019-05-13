import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {first} from 'rxjs/operators';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  angForm: FormGroup;

  constructor(private fb: FormBuilder,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private authenticationService: AuthenticationService,
              private router: Router) {
    this.createForm();
  }

  createForm() {
    /* this.angForm = this.fb.group({
      user_name: ['', Validators.required ],
      password: ['', Validators.required ],
    });*/
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  //
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value);
    /* .pipe(first())
    .subscribe(
      data => {
        this.router.navigate(['/loged']);
      },
      error => {
        // this.alertService.error(error);
        this.loading = false;
      });*/
  }

}
