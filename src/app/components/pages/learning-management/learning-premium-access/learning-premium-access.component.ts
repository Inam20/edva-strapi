import { Component, OnInit } from '@angular/core';
import { LearningPremiumAccessService } from './learning-premium-access.service';

@Component({
    selector: 'app-learning-premium-access',
    templateUrl: './learning-premium-access.component.html',
    styleUrls: ['./learning-premium-access.component.scss']
})
export class LearningPremiumAccessComponent implements OnInit {

    public data: any;

    constructor(
		private content: LearningPremiumAccessService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}