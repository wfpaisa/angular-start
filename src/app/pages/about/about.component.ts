import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  deparments: string[] = [];

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.deparments = this.route.snapshot.data['deparments'];
  }
}
