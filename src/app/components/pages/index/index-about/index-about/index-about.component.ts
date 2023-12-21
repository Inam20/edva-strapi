import { Component, OnInit } from '@angular/core';
import { VendorAboutService } from '../../../vendor-certification-etraining/vendor-about/vendor-about.service';

@Component({
  selector: 'app-index-about',
  templateUrl: './index-about.component.html',
  styleUrls: ['./index-about.component.scss']
})
export class IndexAboutComponent implements OnInit {

  public data: any;

  constructor(
    private content: VendorAboutService
  ) {
    this.content.getData().subscribe((data: any) => {
      this.data = data;
    });
  }

  ngOnInit(): void { }


}
