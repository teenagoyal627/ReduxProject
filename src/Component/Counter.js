import React, { useEffect } from 'react'
import { Component } from 'react'
import classes from './Counter.module.css'
import { connect, useDispatch, useSelector, useStore } from 'react-redux'
import { counterAction } from '../Store/CounterSlice'

const Counter = () => {

    const counter=useSelector(state=>state.counter.counterValue)
    const dispatch=useDispatch()
    const show=useSelector(state=>state.counter.showCounter)

    const incrementHandler=()=>{
        // dispatch({type:"increment"}) this is using redux
        dispatch(counterAction.increment())  //this is using redux toolkit
    }

    const increaseHandler=()=>{
        // dispatch({type:'increase',amount:10})
        dispatch(counterAction.increase(10))
    }

    const decrementHandler=()=>{
        // dispatch({type:'decrement'})
        dispatch(counterAction.decrement())
    }

    const toggleCounterHandler=()=>{
      //  dispatch({type:'showToggle',showCounter:false})
       dispatch(counterAction.toggleCounter())
    }
  return (
  <main className={classes.counter}>
    <h1>Redux counter</h1>
    {show && <div className={classes.value}>{counter}</div>}
   <button onClick={incrementHandler}>Increment</button>
   <button onClick={increaseHandler}>Increment by 10</button>
   <button onClick={decrementHandler}>Decrement</button>
    <button onClick={toggleCounterHandler}>Toggle Counter</button>
  </main>
  )
}

export default Counter



// we can also use the redux in the class component

// class Counter1 extends Component{

//     incrementHandler(){
//   this.props.increment()
//     }
//     decrementHandler(){
//    this.props.decrement()
//     }
//     toogleCounterHandler(){

//     }

//     render(){
//         return (
//             <main className={classes.counter}>
//               <h1>Redux counter</h1>
//               <div className={classes.value}>{this.props.counter}</div>
//              <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//              <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//               <button onClick={this.toogleCounterHandler.bind(this)}>Toogle Counter</button>
//             </main>
//             )
//     }
// }

// const mapStoreToProps=state=>{
//     return{
//         counter:state.counter
//     }
// }

// const mapDispatchToProps=dispatch=>{
//     return {
//         increment:()=>dispatch({type:'increment'}),
//         decrement:()=>dispatch({type:'decrement'})
//     }
// }

// export default connect(mapStoreToProps,mapDispatchToProps)(Counter1)