import React, {useState} from 'react'
import { connect } from 'react-redux'

function App({count, minusCount, plusCount}) {

  const [val, setVal] = useState(1)

  const minusHandle = event => {
    event.preventDefault()
    minusCount(+document.querySelector('#val').value)
  }

  const plusHandle = event => {
    event.preventDefault()
    plusCount(+document.querySelector('#val').value)
  }

  return (
    <div className="app">
      <input
          type="number"
          id="val"
          value={val}
          onChange={(event)=>{ setVal(+event.target.value) }}/>
      <p>
        <button
          onClick={minusHandle}
        >-</button>
        { count }
        <button
          onClick={plusHandle}
        >+</button>
      </p>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    minusCount: (val) => dispatch({type: 'DECREASE', payload: val}),
    plusCount: (val) => dispatch({type: 'INCREASE', payload: val}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
