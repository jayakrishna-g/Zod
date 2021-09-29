import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BlogsService } from './blogs.service';

@UntilDestroy()
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogsComponent implements OnInit {
  blogs: any;

  constructor(
    private blogsService: BlogsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.blogs = this.route.snapshot.data.blogs;
  }
  openBlog(blog: any) {
    window.open(blog.url);
  }
}
