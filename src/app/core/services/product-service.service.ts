import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import * as productList from './../list/product.list.json'

@Injectable({
  providedIn: 'root'
})
export class ProductService {



   filteredList: Product[] = []
  
  getProducts(cat: string): Product[] {
    const json = productList;
    const list: any[] = JSON.parse(JSON.stringify(json)).default;

    if(cat){
      this.filteredList = list.filter(item => item.category === cat)
      return this.filteredList
    }
    return list
  }

}
