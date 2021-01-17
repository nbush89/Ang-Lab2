import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
@Output() submitted = new EventEmitter<Post>()
  constructor() { }

  ngOnInit(): void {
  }
submitPost(form: NgForm){
  this.submitted.emit(form.value)
  console.log(form)
  form.reset()
}

}
