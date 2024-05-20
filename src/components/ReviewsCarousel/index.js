// Write your code here

import {Component} from 'react'
import './index.css'

class ReviewsCorousel extends Component {
  state = {
    activeReviewindex: 0,
  }

  onClickLeftArrow=()=>{
    const {activeReviewindex}=this.state
    if (activeReviewindex > 0){
      this.setState((prevState)=>({activeReviewindex:prevState.activeReviewindex-1}))
    }
  }
  onClickRightArrow=()=>{
    const {activeReviewindex}=this.state
    const {reviewsList} = this.props
    if (activeReviewindex < reviewsList.length-1 ){
      this.setState((prevState=>({activeReviewindex:prevState.activeReviewindex+1})))
    }
    
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewindex} = this.state

    const review = reviewsList[activeReviewindex]

    const {imgUrl, username, companyName, description} = review

    return (
      <div className="container">
        <h1>Reviews</h1>
        <div className="review-container">
          <button data-testid="leftArrow" type="button">
            <img
              onClick={this.onClickLeftArrow}
              className="arrow"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          
          </button>
          <div className="review-item">
            <img src={imgUrl} alt={username} />
            <p>{username}</p>
            <p>{companyName}</p>
            <p>{description}</p>
          </div>
          <button data-testid="rightArrow" type="button">
            <img
            
              onClick={this.onClickRightArrow}
              className="arrow"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCorousel
