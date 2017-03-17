import { Injectable } from '@angular/core'
import {BlogPost} from "./blog.post";
import {BLOG_FEED, BLOG_POSTS} from "./blog.mock-data";


@Injectable()
export class BlogService {
    public blogFeed: BlogPost[]
    public blogPosts: { [path: string]: BlogPost }

    constructor() {
        this.blogFeed = BLOG_FEED
        this.blogPosts = BLOG_POSTS
    }

    get(postPath: string = null): BlogPost|BlogPost[] {
        return postPath ? this.blogPosts[postPath] : this.blogFeed
    }
}
