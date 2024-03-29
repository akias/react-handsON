import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LikeButton from './likeButton'
import React, { Component } from 'react';
import Title from './title';

class Header extends Component {
    render () {
      return (
        <div>
          <Title />
          {/* propsを使って中国語に変換できる */}
          {/* <LikeButton likedText = '已赞' unLikedText = '赞'/> */}
          <LikeButton />
        </div>
      )
    }
}
ReactDOM.render(<Header />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
