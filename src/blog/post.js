import React from 'react';

class Post extends React.Component {
    render() {
        if(!this.props.posts)
            return null;
        let currentPost = this.props.posts.filter(post => post.ID === this.props.selected)
        currentPost = currentPost[0];
        if(!currentPost)
            return (
                <div className="post-content pl-5 pr-5 mt-3 mt-md-0">
                    <header>
                        <h1>Welcome!</h1>
                    </header>
                    <p>
                        This is a project I created to make it easier for my readers to go
                        through the content on{" "}
                        <a target="_blank" rel="noopener noreferrer" href="http://mtwoblog.com">mtwoblog.com</a> from a single screen.
                        Click on any of the blog post titles on the left to see it load instantly in
                        this space.
                    </p>
                    <p>Thank you for taking the time to check this out!</p>
                    <p>
                        I built this project in couple hours, thanks to my experience with
                        React and the WordPress REST API - both of which I am very passionate
                        about!
                    </p>
                    <p>
                        It's not very mobile-friendly at the moment but I am working on it.
                    </p>
                    <p>Enjoy!</p>
                </div>
            );
        return (
            <div className="post-content pl-5 pr-5 mt-3 mt-md-0">
                <header><h1 dangerouslySetInnerHTML={{ __html: currentPost.title }} /></header>
                <div dangerouslySetInnerHTML={{ __html: currentPost.content }} />
            </div>
        )
    }
}   

export default Post;