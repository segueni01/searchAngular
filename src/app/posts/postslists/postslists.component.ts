import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-postslists',
  templateUrl: './postslists.component.html',
  styleUrls: ['./postslists.component.scss']
})
export class PostslistsComponent implements OnInit {

  public posts: Array<any> = [];
  public users: Array<any> = [];
  public lastPosts2: Array<any> = [];
  public page: number = 0;
  public search: string = "";

  constructor(private PostsService: PostsService) { }

  ngOnInit(): void {
    
    this.PostsService.getPosts()
      .subscribe((resp:any) => {
        this.posts = resp;

        this.PostsService.getUsers()
        .subscribe((resp:any) => {
          this.users = resp;

          this.lastPosts2 = this.posts.map((p: any)=>{
            p.user = this.users.find((element: any) => element.id == p.userId)
            
            return p;
            
          }) 
      })

      })

  }

  nextPage(){
    this.page += 5;
  }

  prevPage(){
    if (this.page >0 )
    this.page -= 5;
  }

  onSearch( search: string){
    this.page = 0;
    this.search = search;
  }

}
