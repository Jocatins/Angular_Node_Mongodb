import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Staff } from '../staff';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  private staff: Staff;
  private baseUri: string = 'http://localhost:5500';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}

  createStaff(staff: Staff) {
    return this.http.post(this.baseUri + '/create', staff, {
      headers: this.headers,
    });
  }

  readStaff() {
    return this.http.get(this.baseUri + '/read', { headers: this.headers });
  }

  updateStaff(staff: Staff) {
    return this.http.put(this.baseUri + '/update', staff, {
      headers: this.headers,
    });
  }

  deleteStaff(id: string) {
    return this.http.delete(this.baseUri + '/delete/' + id, {
      headers: this.headers,
    });
  }
  setter(staff: Staff) {
    this.staff = staff;
  }
  getter() {
    return this.staff;
  }
}
