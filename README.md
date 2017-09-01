# Universal react-vue-loader Demo

![Universal react-vue-loader Demo tour](./tour.gif)
> 🎥 **[watch complete tour & explanation on Youtube](https://www.youtube.com/watch?v=Ie30Vi0ZnJk)**

## Installation

```
git clone https://github.com/faceyspacey/universal-react-vue-loader-demo.git
cd universal-react-vue-loader-demo
yarn
yarn start

# open http://localhost:3000
```


## Capabilities Demoed
- single file components (SFCs) using Vue (rendered within React!)
- importing other SFCs
- slots, named slots
- basic Vue capabilities (binding, v-model, events, components, data, methods, computed)
- css modules, scoped css, stylus
- Vuex
- transitions
- D3
- bi-directional communication between React + Vue (using Vuex)
- universal code splitting (i.e. SSR + Splitting)! -- using [react-universal-component](https://github.com/faceyspacey/react-universal-component)

## Issues + PRs Needed Along the Way

### `react-vue`

**issues:**
- [`Vue` as a constructor does not work (use-case: to provide a global Vuex store)](https://github.com/SmallComfort/react-vue/issues/6) -- closed

**PRs:**
- [does not remove `<transition>` element if onLeave handler provided](https://github.com/SmallComfort/react-vue/pull/5) -- merged (not yet published)

### `react-vue-loader`

**issues:**
- [styles tag with `modules` or `scoped` attributes do not work](https://github.com/SmallComfort/react-vue-loader/issues/1) -- closed
- [v-bind with object of attributes is not supported](https://github.com/SmallComfort/react-vue-loader/issues/5) -- open
- [<transition> element is removed before `leave` handler's `done` callback is called](https://github.com/SmallComfort/react-vue-loader/issues/4) -- closed
- [support for <transition-group> (possibly through the React package: npmjs.com/package/transition-group)](https://github.com/SmallComfort/react-vue-loader/issues/3) -- open

**PRs:**
- [fix($attributes): make `<style module>` behave accurately](https://github.com/SmallComfort/react-vue-loader/pull/2) -- merged/published

