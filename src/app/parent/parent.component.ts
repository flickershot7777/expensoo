import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-parent',
  imports: [CommonModule,ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
name ='Varun';
childMessage = '';
receiveMessage(message: string) {
  this.childMessage = message;

}}
