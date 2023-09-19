import { Component, OnInit } from '@angular/core';
import { ModernSchoolingAboutService } from './modern-schooling-about.service';

@Component({
    selector: 'app-modern-schooling-about',
    templateUrl: './modern-schooling-about.component.html',
    styleUrls: ['./modern-schooling-about.component.scss']
})
export class ModernSchoolingAboutComponent implements OnInit {

    public data: any;

    constructor(
		private content: ModernSchoolingAboutService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}