export class BlogPost {
    constructor(
        public path: string,
        public title: string,
        public body?: string,
    ) { }

    static create(blogPost: BlogPost): BlogPost {
        return new BlogPost(blogPost.path, blogPost.title, blogPost.body)
    }
}
