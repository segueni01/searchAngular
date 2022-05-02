import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostslistsComponent } from './postslists/postslists.component';
import { FiltroPipe } from './pipes/filtro.pipe';



@NgModule({
  declarations: [
    PostslistsComponent,
    FiltroPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostslistsComponent
  ]
})
export class PostsModule { }
