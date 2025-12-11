import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CabinetService } from '../../services/cabinet.service';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { CommonModule } from '@angular/common';
import { AddButtonComponent } from '../../shared/add-button/add-button.component';
import { TrashIconComponent } from '../../shared/trash-icon/trash-icon.component';
import { ChangeAmountComponent } from '../../shared/change-amount/change-amount.component';
import { SmallGreenLineComponent } from '../../shared/small-green-line/small-green-line.component';

@Component({
  selector: 'app-cabinet-detail',
  standalone: true,
  imports: [PageTitleComponent, CommonModule, AddButtonComponent, TrashIconComponent, ChangeAmountComponent, SmallGreenLineComponent],
  templateUrl: './cabinet-detail.component.html',
  styleUrl: './cabinet-detail.component.css'
})
export class CabinetDetailComponent implements OnInit {
  cabinetName: string = '';
  cabinetId: number = 0;
  cabinetIndex: number = 0;
  itemName = '';
  addedItems: { name: string; amount: number; expirationDate: string; cabinet: string }[] = [];
  cabinetItems: { itemId: number; name: string; amount: number; expirationDate: string }[] = []; // Add this line

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
          
          // Load the items for this cabinet
          this.loadCabinetItems();
        }
      });
    });
  }

  loadCabinetItems(): void {
    this.cabinetService.getCabinetItems(this.cabinetId).subscribe({
      next: (items) => {
        this.cabinetItems = items;
        console.log(`Loaded ${items.length} items for cabinet ${this.cabinetId}`);
      },
      error: (err) => {
        console.error('Failed to load cabinet items:', err);
        this.cabinetItems = [];
      }
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

  onDeleteItem(item: { itemId: number; name: string; amount: number; expirationDate: string }): void {
    console.log('🗑️ Deleting item:', item);
    console.log('🔢 From cabinet ID:', this.cabinetId);
    console.log('🔢 Item ID:', item.itemId);
    console.log('📝 Item ID type: ', typeof item.itemId);
    
    if (item.itemId === null || item.itemId === undefined) { // Changed from !item.itemId
      console.error('❌ ERROR: itemId is missing or undefined!');
      alert('Cannot delete: Item ID is missing');
      return;
    }
    
    if (!this.cabinetId) {
      console.error('❌ ERROR: cabinetId is missing or undefined!');
      alert('Cannot delete: Cabinet ID is missing');
      return;
    }
      console.log('📤 Calling service with cabinetId:', this.cabinetId, 'itemId:', item.itemId);
      
      this.cabinetService.deleteItemFromCabinet(this.cabinetId, item.itemId).subscribe({
        next: (response) => {
          console.log('✅ Backend response:', response);
          this.cabinetItems = this.cabinetItems.filter(i => i.itemId !== item.itemId);
          console.log('✅ Item deleted successfully');
        },
        error: (err: any) => {
          console.error('❌ Failed to delete item:', err);
        }
      });
    }
}
