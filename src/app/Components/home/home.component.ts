import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProducts } from 'src/app/store/actions/product.actions';
import { selectAllProducts } from 'src/app/store/selectors/product.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products$ = this.store.select(selectAllProducts);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadProducts());
  }
}
