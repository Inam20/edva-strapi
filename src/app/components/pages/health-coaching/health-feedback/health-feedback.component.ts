import { Component, OnInit } from '@angular/core';
import { HealthFeedbackService } from './health-feedback.service';

@Component({
    selector: 'app-health-feedback',
    templateUrl: './health-feedback.component.html',
    styleUrls: ['./health-feedback.component.scss']
})
export class HealthFeedbackComponent implements OnInit {

    public data: any;

    constructor(
        private content: HealthFeedbackService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}