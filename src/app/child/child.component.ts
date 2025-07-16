import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Input() userName!:string;
@Output() messageFromChild = new EventEmitter<string>();

sendToParent() {
  this.messageFromChild.emit(`Hello ${this.userName}, from Child!`);
}
}
