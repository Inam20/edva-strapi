import { Component } from '@angular/core';
import { VendorBannerService } from '../../vendor-certification-etraining/vendor-banner/vendor-banner.service';
import { LearningBannerService } from '../../learning-management/learning-banner/learning-banner.service';
import { ModernSchoolingBannerService } from '../../modern-schooling/modern-schooling-banner/modern-schooling-banner.service';

@Component({
  selector: 'app-index-hero',
  templateUrl: './index-hero.component.html',
  styleUrls: ['./index-hero.component.scss']
})
export class IndexHeroComponent {

  public data: any;
  public learning: any;
  public mod: any;

  constructor(
    private content: VendorBannerService, private learn: LearningBannerService, private modern: ModernSchoolingBannerService
  ) {
    this.content.getData().subscribe((data: any) => {
      this.data = data;
    });

    this.learn.getData().subscribe((data: any) => {
      this.learning = data;
    })

    this.modern.getData().subscribe((data: any) => {
      this.mod = data;
    })
  }

  ngOnInit(): void { }
}
