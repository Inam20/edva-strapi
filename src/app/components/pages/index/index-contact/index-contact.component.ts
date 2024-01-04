import { Component, OnInit } from '@angular/core';
import { ContactUsService } from '../../contact-us/contact-us.service';
import { HttpClient } from '@angular/common/http';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-index-contact',
  templateUrl: './index-contact.component.html',
  styleUrls: ['./index-contact.component.scss']
})
export class IndexContactComponent implements OnInit {
  private readonly notifier: NotifierService;
  private API_URL = environment.API_URL;
  public data: any;

  contactForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    userType: ['student', [Validators.required]],
    message: ['', [Validators.required]]
  });

  constructor(
    private content: ContactUsService,
    private formBuilder: UntypedFormBuilder,
    private http: HttpClient,
    notifierService: NotifierService
  ) {
    this.content.getData().subscribe((data: any) => {
      this.data = data;
    });
    this.notifier = notifierService;
  }

  ngOnInit(): void { }

  onSubmit(): void {
    let checkData = this.contactForm.value;
    const { name, email, phoneNumber, userType, message } = checkData;
    let url = `${this.API_URL}/contact-inboxes`;
    this.http
      .post<any>(url, {
        name, email, phoneNumber, userType, message
      })
      .subscribe((response) => {
        this.notifier.notify('success', 'Message Sent Successfully!');
        this.contactForm.reset();
      },
        (e) => {
          this.notifier.notify('error', e.error.data.errors.email[0]);
        });
  }

}
