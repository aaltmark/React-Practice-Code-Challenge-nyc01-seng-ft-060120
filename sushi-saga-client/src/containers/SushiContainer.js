import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state = {
    start: 0,
    end: 4
  }

  sliceSushi = () => {
    this.setState({
      start: this.state.start + 4,
      end: this.state.end + 4
    })
  }
  render(){
    let sushi = this.props.sushis.slice(this.state.start, this.state.end).map(sushiObj => <Sushi key={sushiObj.id} sushi={sushiObj} appSushiClicker={this.props.appSushiClicker} money={this.props.money} eaten={this.props.eaten}/>)
    return (
      <Fragment>
        <div className="belt">
          {sushi}
          <MoreButton sliceSushi={this.sliceSushi} start={this.state.start} end={this.state.end}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer