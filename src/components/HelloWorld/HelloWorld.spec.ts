import Vue from 'vue';
import Vuetify from 'vuetify';
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld/HelloWorld.vue';

Vue.use(Vuetify, {
  iconfont: 'md',
});

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Welcome to Vuetify';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.find('h1').text()).toMatch(msg);
  });
});
