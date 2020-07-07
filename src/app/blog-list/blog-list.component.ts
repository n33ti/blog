import { Component, OnInit } from '@angular/core';
import {BlogserviceService} from '../blogservice.service'
import {Blog} from './blog'
import { not } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs : Blog[]
  isShow = true
  constructor(private service : BlogserviceService) {
    this.service.getService().subscribe((data) =>
    {
     
      this.blogs = data
      console.log(this.blogs)
    })
   }

  ngOnInit(): void {

  }
  toggleShow()
  {
    this.isShow = !this.isShow
    console.log(this.isShow)
  }



}
