import { createSlice } from '@reduxjs/toolkit'
import {tool} from '../data/ToolData.js'


const initialState = tool;

const toolSlice = createSlice({
	name:"tools",
	initialState,
	reducers:{}
})

export default toolSlice;