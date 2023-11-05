import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserDetail } from '../../store/selectors/user.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})




export class NavbarComponent implements OnInit {
  userName!: string | null;
  isLoggedIn=false;

  constructor(private store: Store) {}

  ngOnInit() {
    // Subscribe to the userDetail selector
    this.store.select(selectUserDetail).subscribe((userDetail) => {
      this.userName = userDetail ? userDetail.userName : null;
      this.isLoggedIn=userDetail ? true : false;
    });
  }

  logout(): void {
    this.isLoggedIn=false;

  }
}

