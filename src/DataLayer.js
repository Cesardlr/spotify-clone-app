// THIS WILL BE THE CODE WE ARE GOING TO NEED FOR USING CONTEXT API

import React,
{
    createContext,
    useContext,
    useReducer
}
    from 'react'

    // We are going to create a context
    export const DataLayerContext = createContext();

    // The children prop are all of the elements inside the DataLayer element
    export const DataLayer = ({ initialState, reducer, children}) =>(
        <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </DataLayerContext.Provider>
    )

    export const useDataLayerValue = () => useContext(DataLayerContext);

