import { createSlice } from '@reduxjs/toolkit'
import project from '../data/ProjectData.js'

const initialState = project;

const projectSlice = createSlice({
	name:"project",
	initialState,
	reducers:{}
})

export default projectSlice;