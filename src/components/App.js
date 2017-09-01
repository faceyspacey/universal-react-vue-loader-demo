import React from 'react'
import universal from 'react-universal-component'
import styles from '../css/App'
import UsageHero from './UsageHero'
import Loading from './Loading'
import NotFound from './NotFound'
import { examples, nextIndex, indexFromPath } from '../utils'
import VuexCommunicator from './VuexCommunicator'

const UniversalComponent = universal(
  props => import(`./examples/${props.example}`),
  {
    minDelay: 1200,
    loading: Loading,
    error: NotFound
  }
)

export default class App extends React.Component {
  render() {
    const { index, done, loading } = this.state
    const example = examples[index]
    const loadingClass = loading ? styles.loading : ''
    const buttonClass = `${styles[example]} ${loadingClass}`

    return (
      <div className={styles.container}>
        <h1>Hello Reactlandia</h1>
        {done && <div className={styles.checkmark}>all loaded ✔</div>}

        <UsageHero example={example} />

        <UniversalComponent
          example={example}
          onBefore={this.beforeChange}
          onAfter={this.afterChange}
          onError={this.handleError}
        />

        <button className={buttonClass} onClick={this.changePage}>
          {this.buttonText()}
        </button>

        <p>*view the source in Chrome to verify universal code-splitting</p>

        {example === 'Vuex' && <VuexCommunicator />}
      </div>
    )
  }

  constructor(props) {
    super(props)

    const { history } = props
    const index = indexFromPath(history.location.pathname)

    this.state = {
      index,
      loading: false,
      done: false,
      error: false
    }

    history.listen(({ pathname }) => {
      const index = indexFromPath(pathname)
      this.setState({ index })
    })
  }

  changePage = () => {
    if (this.state.loading) return

    const index = nextIndex(this.state.index)
    const example = examples[index]

    this.props.history.push(`/${example}`)
  }

  beforeChange = ({ isSync }) => {
    if (!isSync) {
      this.setState({ loading: true, error: false })
    }
  }

  afterChange = ({ isSync, isServer, isMount }) => {
    if (!isSync) {
      this.setState({ loading: false, error: false })
    }
    else if (!isServer && !isMount) {
      this.setState({ done: true, error: false })
    }
  }

  handleError = error => {
    this.setState({ error: true, loading: false })
  }

  buttonText() {
    const { loading, error } = this.state
    if (error) return 'ERROR'
    return loading ? 'LOADING...' : 'NEXT EXAMPLE'
  }
}
