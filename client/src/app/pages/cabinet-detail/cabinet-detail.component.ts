import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CabinetService } from '../../services/cabinet.service';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { CommonModule } from '@angular/common';
import { AddButtonComponent } from '../../shared/add-button/add-button.component';
import { TrashIconComponent } from '../../shared/trash-icon/trash-icon.component';

@Component({
  selector: 'app-cabinet-detail',
  standalone: true,
  imports: [PageTitleComponent, CommonModule, AddButtonComponent, TrashIconComponent],
  templateUrl: './cabinet-detail.component.html',
  styleUrl: './cabinet-detail.component.css'
})
export class CabinetDetailComponent implements OnInit {
  cabinetName: string = '';
  cabinetId: number = 0;
  cabinetIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private cabinetService: CabinetService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cabinetId = +params['id'];
      // Subscribe to cabinets observable to get real-time updates and ensure data is loaded
      this.cabinetService.getCabinets$().subscribe(cabinets => {
        // Find the cabinet by ID, not by array index
        const cabinet = cabinets.find(c => c.id === this.cabinetId);
        if (cabinet) {
          this.cabinetName = cabinet.name;
          // Also store the index for potential future use
          this.cabinetIndex = cabinets.indexOf(cabinet);
        }
      });
    });
  }

  onAddClick() {
    this.router.navigate(['/add-item']);
  }

  onDeleteCabinet() {
    // Delete the entire cabinet and navigate back
    this.cabinetService.deleteCabinet(this.cabinetId).subscribe({
      next: () => {
        console.log(`🗑️ Deleted cabinet: ${this.cabinetName}`);
        // Navigate back to cabinets page
        this.router.navigate(['/cabinets']);
      },
      error: (err) => {
        console.error('Failed to delete cabinet:', err);
      }
    });
  }
}
