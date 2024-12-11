import React from 'react'
import List from './list';
import Post from './post';

class M2Blog extends React.Component {
    state = { posts: [], selected: -1 }
    fetchPosts = () => {
        this.setState({ loading: true })
        // fetch(`http://mtwoblog.com/wp-json/wp/v2/posts?per_page=100`)
        fetch(`https://public-api.wordpress.com/rest/v1.1/sites/108951602/posts?number=100`)
        .then(data => data.json())
        .then(results => this.setState({ posts: results.posts, loading: false }))
    }
    componentDidMount() {
        this.fetchPosts()
    }
    selectPost = (postId) => {
        this.setState({ selected: postId })
    }
    isEmpty(prop) {
        return (
            prop === null ||
            prop === undefined ||
            (prop.hasOwnProperty('length') && prop.length === 0) ||
            (prop.constructor === Object && Object.keys(prop).length === 0)
        )
    }
    render() {
        return (
            <div>
                <div className="header">
                    <h1 className="text-center mt-2">M2Blog Reader</h1>
                </div>
                { this.isEmpty(this.state.posts) ?
                <div className="loader" />
                : (
                    <div className="row">
                        <div className="col-md-3">
                            <List posts={this.state.posts} selected={this.state.selected} onSelectPost={this.selectPost} />
                        </div>
                        <div className="col-md-9">
                            <Post posts={this.state.posts} selected={this.state.selected} />
                        </div>
                    </div>
                ) }
            </div>
        )
    }
}

export default M2Blog