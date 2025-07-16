import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'reverseString',
  standalone: true
})
export class ReverseStringPipe implements PipeTransform {
  transform(value:string): string {
    return value.split('').reverse().join('');
  }
}
@Component({

  selector: 'app-contactus',
  imports: [FormsModule, CommonModule, ReverseStringPipe],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
favoriteFruits = ['Mango', 'Apple', 'Banana'];
companyName:string = "TFI BUFF";
price = 2500;

newFruit: string = '';
addFruit(value:string) {
  if (this.newFruit.trim()) {
    this.favoriteFruits.push(this.newFruit.trim());
    this.newFruit = '';
  }
  console.log(this.favoriteFruits);
}
scrollTOFruits(el: HTMLElement) {
 el.scrollIntoView({ behavior: 'smooth' });
}
imageUrl = 'https://images.unsplash.com/photo-1530631673369-bc20fdb32288?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
 handleClick(value: string) {
    console.log(this.inputValue);


  }
  inputValue:string = '';
}
