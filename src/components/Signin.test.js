import Signin from './Signin'
import React from "react"
import Enzyme, { shallow, render, mount} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { createSerializer } from "enzyme-to-json"
import sinon from "sinon"

it("adds correctly", () => {
    expect(1+1).toEqual(2)
})

it("renders correctly", () => {
    const wrapper = shallow(
        <Signin />
    )
})