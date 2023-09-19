import { Component, OnInit } from '@angular/core';
import { DownloadSyllabusService } from './download-syllabus.service';

@Component({
    selector: 'app-download-syllabus',
    templateUrl: './download-syllabus.component.html',
    styleUrls: ['./download-syllabus.component.scss']
})
export class DownloadSyllabusComponent implements OnInit {

    public data: any;

    constructor(
		private content: DownloadSyllabusService
    ) {
        this.content.getData().subscribe((data: any) => {
            this.data = data;
        });
    }

    ngOnInit(): void {}

}