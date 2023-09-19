import { Component, OnInit } from '@angular/core';
import { AppDownloadService } from './app-download.service';

@Component({
    selector: 'app-app-download',
    templateUrl: './app-download.component.html',
    styleUrls: ['./app-download.component.scss']
})
export class AppDownloadComponent implements OnInit {

    public data: any;

    constructor(
		private content: AppDownloadService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}