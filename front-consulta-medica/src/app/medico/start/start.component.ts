import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
