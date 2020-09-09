import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../shared/staff.service';
import { Staff } from '../../staff';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public staffs: Staff[];

  constructor(private _staffService: StaffService, private router: Router) {}

  ngOnInit() {
    this.readStaff();
  }
  readStaff() {
    this._staffService.readStaff().subscribe(
      (data) => {
        console.log(data);
        this.staffs = data['msg'];
      },
      (error) => {
        console.log(error);
      }
    );
  }
  toUpdate(staff) {
    this._staffService.setter(staff);
    this.router.navigate(['/createUpdate']);
  }
  toDelete(staff) {
    this._staffService.deleteStaff(staff._id).subscribe(
      (data) => {
        this.staffs.splice(this.staffs.indexOf(staff), 1);
      },
      (error) => {}
    );
  }
}
