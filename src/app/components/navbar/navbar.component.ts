import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffService } from '../../shared/staff.service';
import { Staff } from '../../staff';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private staffService: StaffService) {}

  ngOnInit(): void {}
  newStaff(event: any) {
    event.preventDefault();
    this.staffService.setter(new Staff());
    this.router.navigate(['/createUpdate']);
  }
}
