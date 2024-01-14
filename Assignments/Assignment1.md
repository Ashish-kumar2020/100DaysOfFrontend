## What is an Emmet?

    -- Emmet is an shortuct in any editor by which we can create a template/structure
    Ex- for html we use !

## Difference between libraray and framework?

    Library: 1- We don not need to follow any rule
             2- There is no structure

    Framework: 1- We have to follow certain rule
                2- We need to folow the structure(MVC)

## What is CDN? Why do we use it?

    CDN - Content Delivery Network. Let's say we have an server which is present in america and we are accessing it from india so while accessing the server the accessing time or fetching data from the server will take some time. so to reduce that time we use CDN. we host the server on the cloud on different areas so that whenever a person tries to access the server they me connect to the nearest server which result in fetching the data faster.
    Benefits of CDN are :
        1- Improve speed and performance
        2- Sclability
        3- Load Balancing
        4- Reduction of Bandwidth Costs

## What is crossorigin in script tag?

The crossorigin attribute in a script tag is used to specify how the browser should handle cross-origin requests when fetching the script. It is commonly used when loading scripts from a different domain (cross-origin).

## Difference between React and ReactDOM?

    React - The react library is the core library for building user interfaces in React. It provides the fundamental tools for defining and creating React components, managing component state and lifecycle, handling events, and more.

    ReactDOM - The react-dom library is responsible for the integration of React with the DOM (Document Object Model). It provides methods for rendering React components into the DOM, updating them, and interacting with the DOM.

## What is difference between react.development.js and react.production.js files via CDN?

    react.development.js :
        1- This file is intended for development environments. It includes additional warnings and debugging information, making it easier to identify and fix issues during development.
        2- It has larger file size compared to the production version, which includes additional code for development tools and checks.
        3- Warnings and errors are more descriptive, aiding developers in identifying potential problems in their code.
        4- The development version is not optimized for performance and can be slower compared to the production version.

    react.production.js:
        1- This file is optimized for production environments. It excludes development-specific checks and warnings to reduce the file size and improve runtime performance.
        2- It is smaller in size compared to the development version, as it omits debugging and development tools.
        3- The production version is suitable for use in the final deployment of your application where you want to minimize the file size and improve the runtime efficiency.
