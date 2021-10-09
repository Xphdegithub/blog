import Vue from 'vue';

import post from './test.md'

export function getRootDom() {
  return new Vue({
    $el: '#apps',
    render: h => h(post)
  })
}