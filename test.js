// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import Wrapper from './components/wrapper'
import Box from "./components/box"
import Hello from "./components/hello"

describe.only('Wrapper', () => {
  it('should show differences between find(Component) and find(className)', () => {
    const wrapper = mount(Wrapper)

    console.log(wrapper.html())
    console.log(wrapper.find(Box).exists())
    console.log(wrapper.find(Hello).exists())
    console.log((wrapper === wrapper.find(Hello)))

    console.log(wrapper.findAll(Hello).length)
    const helloElements = wrapper.findAll(Hello)
    console.log(helloElements.at(0).html())
    console.log(helloElements.at(1).html())
    console.log('----')
    console.log(wrapper.find(Hello).html())


    console.log(wrapper.find('.hello-message').exists())
    console.log(wrapper.findAll('.hello-message').length)
  })
})
