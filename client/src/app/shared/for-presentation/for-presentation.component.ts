import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router'; 
import { CommonModule, NgIf, } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [CommonModule, FormsModule], // Ensure CommonModule and FormsModule are imported
  templateUrl: 'for-presentation.component.html',
  styleUrls: ['for-presentation.component.css']
})
export class PresentationComponent {

  constructor(private router: Router) {}

  
  //Hides Test Select
  showSelect = false;

@HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
  if ((event.shiftKey) && (event.key === 'X')) {
      this.showSelect = !this.showSelect;
      event.preventDefault();
    }
  }
  
  // Navigation logic
  selectedPage: string= 'placeholder'; // Default value
  
  navigateToPage() {
    if (this.selectedPage !== null) {
      if (this.selectedPage === '') {
        // If already on login, force reload by navigating away and back
        this.router.navigateByUrl('/test', { skipLocationChange: true }).then(() => {
          this.router.navigate(['login']);
        });
      } else {
        this.router.navigate([this.selectedPage]);
       }
    }
  }
  
showTest = false;

  // Drag and Drop Logic
  top = 100;
  left = 100;
  private isDragging = false;
  private offsetX = 0;
  private offsetY = 0;

  startDrag(event: MouseEvent) {
    this.isDragging = true;
    this.offsetX = event.clientX - this.left;
    this.offsetY = event.clientY - this.top;
    event.preventDefault();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      this.left = event.clientX - this.offsetX;
      this.top = event.clientY - this.offsetY;
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.isDragging = false;
  }

}

