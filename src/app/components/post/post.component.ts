import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Post } from "../../interfaces/post";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  @Input() singlePost: Post;
  @Output() deleted = new EventEmitter<any>();
  likeCounter: number = 0

  deletePost(): void {
    this.deleted.emit();
  }
  upVote(): void {
    this.likeCounter+=1
  }
  constructor() {}

  ngOnInit(): void {}
}
