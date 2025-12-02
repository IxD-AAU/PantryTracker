import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { AddButtonComponent } from '../../shared/add-button/add-button.component';
import { AddToListButtonComponent } from '../../shared/add-to-list-button/add-to-list-button.component';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-detail',
  standalone: true,
  imports: [CommonModule, PageTitleComponent, AddButtonComponent, AddToListButtonComponent],
  templateUrl: './list-detail.component.html',
  styleUrl: './list-detail.component.css'
})
export class ListDetailComponent implements OnInit {
  listName: string = '';
  listIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private listService: ListService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.listIndex = +params['id'];
      const lists = this.listService.getLists();
      if (lists[this.listIndex]) {
        this.listName = lists[this.listIndex].name;
      }
    });
  }

  onAddClick() {
    this.router.navigate(['/add-item']);
  }

  onAddToListClick() {
    // Add your logic here (e.g., add item to list)
  }
}
