import { Component } from '@angular/core';
import { VendorBannerService } from '../../vendor-certification-etraining/vendor-banner/vendor-banner.service';

@Component({
  selector: 'app-index-hero',
  templateUrl: './index-hero.component.html',
  styleUrls: ['./index-hero.component.scss']
})
export class IndexHeroComponent {

  public data: any;


  constructor(
    private content: VendorBannerService,
  ) {
    this.content.getData().subscribe((data: any) => {
      this.data = data;
    });
  }

  ngOnInit(): void { }


}
