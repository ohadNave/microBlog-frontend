import { Component } from "@angular/core";

@Component({
    selector:'app-post',
    templateUrl:'./post.component.html'
    // template: ''
})
export class PostComponent{
    post_id: number = 10;
    post_rank: number = 1;
    editPost = false;
    like_post = false;
    num_of_likes = 0

    constructor(){
        setTimeout( ()=> {
            this.editPost = true;
        }, 2000 );
    }

    onLike(){
        this.num_of_likes = this.num_of_likes + 1
        this.getPostRank()
    }

    getPostRank(){
        this.post_rank = this.post_rank * this.num_of_likes ;
    }
 }