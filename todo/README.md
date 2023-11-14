## What is State?

    -- state is a local variable
    -- Data that a component can hold over time necessary for information that it needs to remember throughout the app's lifecycle
    -- Updating the state results in component state triggers React to re-render the component
    -- state gets reset only when we unmount the component
    -- When we update the state the componets gets re-render
    -- on re-render it updates the DOM which changes the view of the page

### Note: Do not set state manually.

    -- React does not keep track of let const and var varaibale declarations
    -- React give us useState to update the state and it keeps track of this and makes this state variable in sync with the DOM

    -- Dont do this
        const [test] = useState({name: "ashish});
        test.name = "Singh";

        this will work but we should not do this

### How is a component view is updated

    1- We don't
