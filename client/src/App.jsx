import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allPosts: {},
      title: '',
      body: '',
      dateCreated: '',
      dateEdited: '',
    }
  }

  //add post
  //delete post
  //edit post



  render() {
    return (
      <h1>Blog Round 2</h1>
    )
  }
};

export default App;