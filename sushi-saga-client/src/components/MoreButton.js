import React from 'react'

class MoreButton extends React.Component {

  // sliceSushi = () => {
  //   let newStart = this.props.start + 4
  //   let newEnd = this.props.end + 4
  //   console.log(newStart, newEnd)
  // }


  render(){
    return (
      <button onClick={this.props.sliceSushi}>
          More sushi!
      </button>
    )
  }
}

export default MoreButton