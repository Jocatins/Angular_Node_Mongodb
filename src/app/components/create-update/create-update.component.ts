import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffService } from '../../shared/staff.service';
import { Staff } from '../../staff';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css'],
})
export class CreateUpdateComponent implements OnInit {
  public staff: Staff;

  constructor(public staffService: StaffService, public router: Router) {}

  ngOnInit() {
    this.staff = this.staffService.getter();
  }
  createOrUpdate() {
    if (this.staff._id == undefined) {
      this.staffService.createStaff(this.staff).subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.staffService.updateStaff(this.staff).subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
