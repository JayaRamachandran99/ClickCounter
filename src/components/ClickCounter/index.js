
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component{

state = {
  count:0
}
onIncrementValue = () => {
  this.setState((prevState) => (
    {
      count:prevState.count+1
    }
  ) 
  )
}

// onIncrementCount = () => {
//   this.setState(prevState => ({count: prevState.count + 1}))
// }

  render() {

const {count} = this.state

return(
<div className="counter-container">

<h1 className="heading">
  The Button has been clicked 
 <br/> <span className='counter-value'> {count} </span> times
</h1>

<p className='description'>Click the button to increase the count!</p>
<button type="button" className='clickme-button' onClick={this.onIncrementValue}>Click Me!</button>

</div>
)
}
}


export default ClickCounter