import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CabinetService } from '../../services/cabinet.service';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cabinet-detail',
  standalone: true,
  imports: [PageTitleComponent, CommonModule],
  templateUrl: './cabinet-detail.component.html',
  styleUrl: './cabinet-detail.component.css'
})
export class CabinetDetailComponent implements OnInit {
  cabinetName: string = '';
  cabinetIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private cabinetService: CabinetService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cabinetIndex = +params['id'];
      const cabinets = this.cabinetService.getCabinets();
      if (cabinets[this.cabinetIndex]) {
        this.cabinetName = cabinets[this.cabinetIndex].name;
      }
    });
  }
}
