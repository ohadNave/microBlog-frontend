import { Component, Input, Output, EventEmitter } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PostService } from '../post/post.service';

@Component({
    selector:'app-post',
    templateUrl:'./post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent{ 
    @Input("element") element!:{id: string, content: string, likes:number, date: string,rank: number };
    @Input("editMode") editMode:boolean = false;
    @Output() afterDelete: EventEmitter<any> = new EventEmitter<{id:string}>();

    like_post = false;

    constructor(private http: HttpClient, private router: Router, private postService: PostService){
        // setTimeout( ()=> {
        //     this.editMode = true;
        // }, 2000 );
    }

 
    onLike(){
        this.element.likes = this.element.likes + 1
        this.element.rank = (this.element.likes % 100 ) * 2 ;
    }

    onEditFinished(pid: HTMLHeadingElement, editedPostForm :HTMLInputElement){
        this.editMode = false;
        const contentData = {content :editedPostForm.value}
        this.element.content = contentData.content 
        this.postService.Edit(pid.innerText,contentData);
    }

    onEditStarts(){
        this.editMode = true;
    }

    async onDelete(tag: HTMLHeadingElement){
        this.postService.delete(tag.innerText);
        this.afterDelete.emit(tag.innerText);
    }
 }