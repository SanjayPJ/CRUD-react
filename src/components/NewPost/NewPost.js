import React, { Component } from "react";
import axios from "axios";

import "./NewPost.css";

class NewPost extends Component {
    state = {
        post: {
            title: "",
            content: "",
            author: "Max"
        }
    };

    onSubmitHandler = () => {
        const post = {
            title: this.state.post.title,
            content: this.state.post.content,
            author: this.state.post.author
        };

        axios
            .post("https://jsonplaceholder.typicode.com/posts", post)
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    render() {
        return (
            <div className="NewPost">
                {this.state.isPostSubmitSuccess ? (
                    <p style={{ color: "red" }}>Post Created Successfully</p>
                ) : null}

                <h1>Add a Post</h1>
                <label>Title</label>
                <input
                    type="text"
                    value={this.state.title}
                    onChange={event =>
                        this.setState({ title: event.target.value })
                    }
                />
                <label>Content</label>
                <textarea
                    rows="4"
                    value={this.state.content}
                    onChange={event =>
                        this.setState({ content: event.target.value })
                    }
                />
                <label>Author</label>
                <select
                    value={this.state.author}
                    onChange={event =>
                        this.setState({ author: event.target.value })
                    }
                >
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.onSubmitHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;
