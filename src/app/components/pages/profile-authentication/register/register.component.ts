import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'; // Correct import
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private API_URL = environment.API_URL;
  private readonly notifier: NotifierService;

  regForm = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.maxLength(10)]],
    userType: ['student', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private formBuilder: FormBuilder, // Corrected import
    private router: Router,
    private http: HttpClient,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void { }

  /**
   * User Registration
   */
  onRegister(): void {
    if (this.regForm.valid) {
      let userData = this.regForm.value;
      const { username, email, phoneNumber, userType, password } = userData;
      let url = `${this.API_URL}/auth/local/register`;
      this.http
        .post<any>(url, {
          username,
          email,
          phoneNumber,
          userType,
          password,
        })
        .subscribe(
          (response) => {
            this.notifier.notify(
              'success',
              'Congratulations! Registration successful. Please login using the credential.'
            );
          },
          (e) => {
            this.notifier.notify(
              'error',
              e.error.data[0].messages[0].message
            );
          }
        );
    }
  }

  isPasswordMatch(): boolean {
    const password = this.regForm.get('password').value;
    const confirmPassword = this.regForm.get('confirmPassword').value;
    return password === confirmPassword;
  }

  // Check if passwords don't match
  isPasswordMismatch(): boolean {
    return !this.isPasswordMatch() && this.regForm.get('confirmPassword').touched;
  }
}
