import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private API_URL = environment.API_URL;
  private readonly notifier: NotifierService;

  logForm = this.formBuilder.group({
    identifier: ['', [Validators.required, Validators.email]],
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
   * User Login
   */
  onLogin(): void {
    let userData = this.logForm.value;
    const { identifier, password } = userData;
    let url = `${this.API_URL}/auth/local`;
    this.http
      .post<any>(url, {
        identifier,
        password,
      })
      .subscribe(
        (response) => {
          localStorage.setItem(
            'edva_users',
            JSON.stringify(response)
          );
          this.notifier.notify(
            'success',
            'Congratulations! Login successful.'
          );
          this.router.navigate(['/']).then(() => {
            window.location.reload();
          });
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
