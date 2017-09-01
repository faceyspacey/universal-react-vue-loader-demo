import React from 'react'
import createStore from '../createVuexStore'
import styles from '../css/App'

export default class VuexCommunicator extends React.Component {
  componentDidMount() {
    this.vuexStore = createStore()
    this.vuexStore.subscribe(() => this.forceUpdate())
  }

  divide = () => {
    this.vuexStore.dispatch('divide', 2)
  }
  count() {
    return this.vuexStore ? this.vuexStore.state.count : 0
  }

  render() {
    return (
      <div className={styles.fromReact}>
        <div>
          vuex state in react: {this.count()}
        </div>
        <button onClick={this.divide}>DIVIDE BY 2 FROM REACT</button>
      </div>
    )
  }
}
