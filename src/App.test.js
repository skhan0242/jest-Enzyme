import React from "react";

import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16"
import renderer from "react-test-renderer"
import App from "./App";

Enzyme.configure({adapter: new Adapter()})

describe('App Component',() =>{
  it('Matches the snapshot', () =>{
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('counter Text', () =>{
    const wrapper = shallow(<App />);
    const text = wrapper.find("p").text();
    expect(text).toBe('current count 0');
  });

  it('initail count should be 0', () =>{
    const wrapper = shallow(<App />);
    const count  = wrapper.state().count;
    expect(count).toEqual(0);
  });

  it('after increament it should increase one', () =>{
    const wrapper = shallow(<App />);
    const incrementButton = wrapper.find('button.incrementBtn');
    incrementButton.simulate('click');
    const incrementText = wrapper.find('p').text();
    expect(incrementText).toEqual("current count 1");
  });

  it('after decreament it should decrease one',() =>{
    const wrapper = shallow(<App />);
    const decrementBtn = wrapper.find('.decrementBtn');
    decrementBtn.simulate('click');
    const decrementText = wrapper.find('p').text();
    expect(decrementText).toBe('current count -1')
  })
})