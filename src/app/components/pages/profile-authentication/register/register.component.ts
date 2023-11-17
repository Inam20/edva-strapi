import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
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
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private formBuilder: UntypedFormBuilder,
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
    let userData = this.regForm.value;
    const { username, email, phoneNumber, password } = userData;
    let url = `${this.API_URL}/auth/local/register`;
    this.http
      .post<any>(url, {
        username,
        email,
        phoneNumber,
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