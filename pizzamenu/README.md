## Components

    -- Components are the building blocks in react
    -- Everything in react is made of components
    -- React renders the view for each components and make up the user interface
    -- Each component has its own data,logic,and appearance
    -- We build complex ui by building multiple compnents and combining them

### React only return a single element unless we wrap the components into fragments

## JSX

    -- It is a Declarative syntax to describe what components look like and how they work
    -- Component must return a block of JSX
    -- Extension of javascript that allows us to embed js css and react component into html
    -- babe converts jsx to React.createElement and then root.render converts it to js object then  html

## Props

    -- Props are used to used to pass data from partent components to child components
    -- these are just like regular js function parameters
    -- with props parent component can control how child component will look like
    -- anything can be passed to props: single value, array,object,function even other component
    -- Props are immutable. to update props we need states
    -- props can only be changed from parent component child components can not change props data
    -- in react data only flows in one way top to bottom
    -- data can only be passed from parent to child components
    -- benefit of one way data flow - it makes application more predictable and easier to understand

## Rules for JSX

    -- JSX Works essentially like HTML, but we can enter Javascript mode by using {}
    -- We can place javascript expression inside {}
    -- Statements not allowed
    -- JSX Produces a javascript expression
