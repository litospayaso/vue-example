import Vue from 'vue';
import Vuetify from 'vuetify';
import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home/Home.vue';

// Vue.use(Vuetify, {
//   iconfont: 'md',
// });

describe('Home.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.find('.home').text()).toMatch('');
  });
});
