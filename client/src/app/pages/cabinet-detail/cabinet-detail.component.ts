import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CabinetService } from '../../services/cabinet.service';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { CommonModule } from '@angular/common';
import { AddButtonComponent } from '../../shared/add-button/add-button.component';

@Component({
  selector: 'app-cabinet-detail',
  standalone: true,
  imports: [PageTitleComponent, CommonModule, AddButtonComponent],
  templateUrl: './cabinet-detail.component.html',
  styleUrl: './cabinet-detail.component.css'
})
export class CabinetDetailComponent implements OnInit {
  cabinetName: string = '';
  cabinetIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private cabinetService: CabinetService,
    private router: Router
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

  onAddClick() {
    this.router.navigate(['/add-item']);
  }
}
