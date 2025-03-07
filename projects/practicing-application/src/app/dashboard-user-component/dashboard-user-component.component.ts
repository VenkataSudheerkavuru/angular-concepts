import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dashboard-user-component',
  templateUrl: './dashboard-user-component.component.html',
  styleUrls: ['./dashboard-user-component.component.css']
})
export class DashboardUserComponentComponent implements OnInit{

  userId!: string;
  userId2!: string;

  constructor(private route : ActivatedRoute) { }
  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id')!;

    this.route.paramMap.subscribe((params) => {
      this.userId2 = params.get('id')!;
    });
  }
}
