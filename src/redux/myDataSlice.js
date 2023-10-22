import { createSlice } from '@reduxjs/toolkit'
import {myData} from '../data/myData.js'

const initialState = myData;

const myDataSlice = createSlice({
	name:"myData",
	initialState,
	reducers:{}
})

export default myDataSlice;