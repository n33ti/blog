import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import {ContentComponent} from './content/content.component'



const routes: Routes = [
  {
    
        path: ':id',
        component: ContentComponent
      },
      {
        path: '',
        component: BlogListComponent
      }
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
