import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {  RouterModule, RouterOutlet } from '@angular/router';
import { NaviComponent } from "./components/navi/navi.component";
import { CategoryComponent } from "./components/category/category.component";
import { ProductComponent } from "./components/product/product.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NaviComponent, CategoryComponent, HttpClientModule, ProductComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'aegis-combat-system';
}
