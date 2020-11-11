import React from "react";
import Header from "./components/header/Header";
import Headline from "./components/headline/Headline";
import Button from "./components/button/Button";
import ListItem from "./components/listItem/ListItem";
import { connect } from "react-redux";
import { fetchPosts } from "./store/actions"

/* This const is not used within our app.
   Although we are passing it to the Headline Component
   it is only here as an exampleof testing PropTypes */
const tempArr = [{
    fName: 'Joe',
    lName: 'Bloggs',
    email: 'joebloggs@gmail.com',
    age: 24,
    onlineStatus: true
}];

const App = ({ fetchData, posts }) => {

    const fetch = () => {
        fetchData()
    }

    const configBtn = {
        buttonText: "Get posts",
        emitEvent: fetch,
    }

    const list = posts.map(post => {

        const configListItem = {
            title: post.title,
            key: post.id,
            desc: post.body,
        }

        return <div><ListItem {...configListItem} /></div>;
    });

    return (
    <div className="App" data-test="appComponent">
      <Header />
      <section className="main">
          <Headline header="Posts" desc="Click the button to render posts!" tempArr={tempArr} />
          <Button {...configBtn} />
          { posts.length > 0 &&
            {list}
          }
      </section>
    </div>
    );
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchPosts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
