import React, { Component } from "react";
import axios from "axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
    state = {
        posts: [],
        selecedPostId: null
    };

    postSelectedHandler = id => {
        this.setState({
            selecedPostId: id
        });
    };

    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: "Sanjay PJ"
                    };
                });
                this.setState({
                    posts: updatedPosts
                });
            });
    }
    render() {
        return (
            <div>
                <section className="Posts">
                    {this.state.posts.map(post => (
                        <Post
                            key={post.id}
                            title={post.title}
                            author={post.author}
                            postSelectedHandler={this.postSelectedHandler.bind(
                                this,
                                post.id
                            )}
                        />
                    ))}
                </section>
                <section>
                    <FullPost id={this.state.selecedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
