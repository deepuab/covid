import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/common/HeaderStatus.vue';

describe('HeaderStatus.vue', () => {
  const props = {
    data: {
      active: 10,
      deceased: 5,
      recovered: 0,
      confirmed: 0,
    },
    title: 'India',
  };

  const wrapper = shallowMount(HelloWorld, {
    propsData: props,
  });

  it('render title when props.title passed', () => {
    const title = wrapper.find('.header-title');
    expect(title.text()).toMatch(`${props.title} Covid Status`);
  });

  it('render Active data when props.data.active passed', () => {
    const title = wrapper.find('.active-count');
    expect(title.text()).toMatch(`Active  ${props.data.active}`);
  });

  it('render Deceased data when props.data.deceased passed', () => {
    const title = wrapper.find('.deceased-count');
    expect(title.text()).toMatch(`Deaths  ${props.data.deceased}`);
  });

  it('render Recovered data when props.data.recovered passed', () => {
    const title = wrapper.find('.recovered-count');
    expect(title.text()).toMatch(`Recovered  ${props.data.recovered}`);
  });

  it('render Confirmed data when props.data.confirmed passed', () => {
    const title = wrapper.find('.confirmed-count');
    expect(title.text()).toMatch(`Confirmed  ${props.data.confirmed}`);
  });
});
