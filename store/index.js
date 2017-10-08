import * as types from './mutation-types'
import localforage from 'localforage'

export const plugins = []

export const state = () => ({
  guides: []
})

export const getters = {
  count (state) {
    return state.guides.length
  },

  hasGuide (state) {
    return (guide) => {
      const hasGuide = state.guides.filter((item) => {
        return item.permalink === guide.permalink
      }).length > 0

      return hasGuide
    }
  }
}

export const mutations = {
  [types.ADD_GUIDE] (state, { guide }) {
    const hasGuide = state.guides.filter((item) => {
      return typeof item !== 'undefined' && item.permalink === guide.permalink
    }).length > 0

    if (!hasGuide) {
      state.guides.push(guide)
    }
  },

  [types.DELETE_GUIDE] (state, { guide }) {
    state.guides = state.guides.filter((item) => {
      return item.permalink !== guide.permalink
    })
  },

  [types.SET_GUIDES] (state, { guides }) {
    state.guides = guides
  }
}

export const actions = {
  async loadFromLocalStorage ({ commit }) {
    commit(types.SET_GUIDES, { guides: await localforage.getItem('playbook') || [] })
  },

  async addGuide ({ commit, state }, { guide }) {
    commit(types.ADD_GUIDE, { guide })
    return localforage.setItem('playbook', state.guides)
  },

  async deleteGuide ({ commit, state }, { guide }) {
    commit(types.DELETE_GUIDE, { guide })
    return localforage.setItem('playbook', state.guides)
  },

  async reset ({ commit, state }) {
    commit(types.SET_GUIDES, { guides: [] })
    return localforage.setItem('playbook', state.guides)
  }
}
