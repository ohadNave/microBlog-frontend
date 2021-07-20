import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../post/post.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {

  posted : boolean = false;

  constructor(private http: HttpClient,private postService: PostService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {}

  // onCreatePost( postForm :{content:string}) {
  //   this.posted = true;
  //   console.log(postForm)
  //   this.postService.create(postForm);
  // }

  onCreatePost( postForm :any) {
    this.posted = true;
    this.postService.create(postForm.value);
    postForm.resetForm();

    this.snackBar.open('Posted Successfully!', '', {
    duration: 3000,
    verticalPosition: 'bottom', // Allowed values are  'top' | 'bottom'
    horizontalPosition: 'center', // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
  });


  }
}
