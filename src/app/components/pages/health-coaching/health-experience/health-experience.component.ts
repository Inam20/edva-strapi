import { Component, OnInit } from '@angular/core';
import { HealthExperienceService } from './health-experience.service';

@Component({
    selector: 'app-health-experience',
    templateUrl: './health-experience.component.html',
    styleUrls: ['./health-experience.component.scss']
})
export class HealthExperienceComponent implements OnInit {

    public data: any;

    constructor(
        private content: HealthExperienceService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}