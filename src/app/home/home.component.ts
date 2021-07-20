import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../post/post.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts_arr : any = []

  constructor(private http: HttpClient, private postService: PostService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  parentFun(id: string){
    console.log(this.posts_arr.length)
    this.posts_arr = this.posts_arr.filter((e: { id: string; }) => e.id != id);
    console.log(this.posts_arr.length)

  }


  async fetchPosts(){
    this.posts_arr = []
    this.postService.fetchAll().subscribe(response =>{
      console.log(response);
      this.posts_arr = response;
    })
  }
}
