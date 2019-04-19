import React, { Component } from 'react'
import './index.css'
import axios from 'axios';


class LikeButton extends Component {
  static defaultProps = {
    likedText: '取消',
    unLikedText: '点赞'
  }
  constructor () {
    super()
    this.state = { isLiked: false }
  }

  handleClickOnLikeButton () {
    const request = axios.create({
      baseURL: 'https://pwr2zeox06.execute-api.ap-northeast-1.amazonaws.com'
    })
    request.post('/test/comment_nice')
    .then(res => {
      console.log(res.data.body);
      this.setState({
        isLiked: !this.state.isLiked
      })
    })
  }

  render () {
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked ? this.props.likedText : this.props.unLikedText} 👍 
      </button>
    )
  }
}

export default LikeButton;
