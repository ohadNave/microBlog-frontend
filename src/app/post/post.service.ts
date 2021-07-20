import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class PostService{
    posts_arr : any = []

    constructor(private http: HttpClient){}



    create( postForm :{content:string} ){
        console.log(postForm)
        this.http.post('http://127.0.0.1:8081/post',postForm).
        subscribe(response =>{
            console.log(response);
        })
    }

    Edit( id:string, postForm :{content:string} ){
        const post_id = id
        const body = postForm
        return this.http.patch(`http://127.0.0.1:8081/post/${post_id}`, body).
        subscribe(response =>{
            console.log(response);
        })
    }

    fetchAll(){
        return this.http.get('http://127.0.0.1:8081/post/all')
    }

     delete(id: string){
        this.http.delete('http://127.0.0.1:8081/post/' + id)
         .subscribe(response =>{
            console.log('deleted');
          })
    }

}