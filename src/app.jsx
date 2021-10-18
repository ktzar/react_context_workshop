import React from 'react'

import { SimpleState } from './simpleState.jsx'
import { HooksState } from './hooksState.jsx'
import { ReducerState } from './reducerState.jsx'

export const App = () => {
    return (
        <>
        <SimpleState />
        <HooksState />
        <ReducerState />
        </>
    )
}