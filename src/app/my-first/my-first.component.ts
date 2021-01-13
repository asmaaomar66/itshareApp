import { Component} from '@angular/core';
import { BDServices } from '../db.services';

@Component({
  selector: 'my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.css']
})
export class MyFirstComponent  {

  courseName = "Angular"
  imageUrl = "https://images.unsplash.com/photo-1610218428597-3bf05e80a29d?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"

  colSpan = 3;
}
