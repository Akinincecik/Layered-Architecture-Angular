import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { VatAddedPipe } from "../../pipes/vat-added.pipe";
import { FormsModule } from '@angular/forms';
import { FilterPipePipe } from '../../pipes/filter-pipe.pipe';

@Component({
  selector: 'app-product',
  standalone:true,
  imports: [CommonModule, VatAddedPipe, FilterPipePipe, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  products:Product[] = [];
  dataLoaded = false;
  filterText = "";
  
  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute){
    
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      if(params["categoryId"]){
        this.getProductsByCategoryId(params["categoryId"])
      }
      else{
        this.getProducts()
      }
    })
  }

  getProducts(){
    this.productService.getProducts().subscribe(response =>{
      this.products = response.data
      this.dataLoaded = true;
    })
  }

  getProductsByCategoryId(categoryId:number){
    this.productService.getProductsByCategoryId(categoryId).subscribe(response =>{
      this.products = response.data
      this.dataLoaded = true;
    })
  }
}
