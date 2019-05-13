import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {AlertService, UsersService} from '../_services';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  angForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private fb: FormBuilder,
              private us: UserService,
              private formBuilder: FormBuilder,
              private router: Router,
              private authenticationService: AuthenticationService,
              private usersService: UsersService,
              private alertService: AlertService) {
    this.createForm();
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  createForm() {
    this.angForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      cpassword: ['', Validators.required]
    });
  }

  addUser(userName, password, cpassword) {
    this.us.addUser(userName, password, cpassword);
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.usersService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}
