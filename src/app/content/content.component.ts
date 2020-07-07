import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {BlogserviceService} from '../blogservice.service'
import {AppComponent} from '../app.component'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
currentBlog;
blogContent;
  constructor(private activatedRoute: ActivatedRoute, private service : BlogserviceService, private appComponet : AppComponent) { 
    this.activatedRoute.params.subscribe((currentId) => {
      this.currentBlog = currentId.id
      this.service.getService().subscribe((data) =>
      {
        this.blogContent = data[this.currentBlog -1 ].content
        console.log(this.blogContent)
        this.appComponet.title = data[this.currentBlog -1 ].BlogName
        this.appComponet.subtitle = data[this.currentBlog -1 ].Subtitle
      })

    })
   
  }

  ngOnInit(): void {

  }

  ngOnDestroy()
  {
    this.appComponet.title = 'Blogs'
    this.appComponet.subtitle = ''
  }

}
