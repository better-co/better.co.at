import * as types from './mutation-types'

export const plugins = []

export const state = () => ({
  counter: 0,
  receipt: []
})

export const getters = {
}

export const mutations = {
  [types.INCREMENT] (state) {
    state.counter++
  },

  [types.SET] (state, {counter}) {
    state.counter = counter
  },

  [types.RESET] (state) {
    state.counter = 0
  },

  [types.PRINT] (state) {
    if (state.receipt.length > 0 && state.receipt[0].counter === state.counter) {
      return
    }

    state.receipt.unshift({
      counter: state.counter,
      date: new Date()
    })
  }
}

export const actions = {
  increment ({commit}) {
    commit(types.INCREMENT)
  },

  set ({commit, state}, {counter}) {
    commit(types.SET, {counter})
  },

  reset ({commit}) {
    commit(types.RESET)
  },

  print ({commit}) {
    commit(types.PRINT)
  }
}
