Component Life Cycles
- Component life cycle is the process of mounting, updading and destroying a component in a React application.
- In React each compoent has three main phases:
     * Mounting 
     * Updating
     * Unmouning 
 - Mounting
    -Rendering or putting React Componet into the DOM is called mounting. 
      *constructor()
      *static getDerivedStateFromProps()
      *render()
      *componentDidMount()

  -constructor: The constructor() methode is executed before any other method
  -getDerivedStateFromProps: 
  -render: The render method is a required method when we create a class-based compoent.
           The render mtehod is where we return Jsx.the render methods render whenever there is change is state.
           Do not set your state inside render method.
  -componentDidMount: This a place place to setting time interval and calling API.