import { Component } from '@angular/core';
import { FooterService } from 'src/app/components/common/footer/footer.service';

@Component({
  selector: 'app-index-footer',
  templateUrl: './index-footer.component.html',
  styleUrls: ['./index-footer.component.scss']
})
export class IndexFooterComponent {
  public data: any;

  constructor(
    private content: FooterService
  ) {
    this.content.getData().subscribe((data: any) => {
      this.data = data;
    });
  }

  ngOnInit(): void { }


}
