import React from 'react';
import { useNavigation } from 'react-router-dom';
import Pdf from "react-to-pdf";
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Blog = () => {

    const navigation = useNavigation()
    if (navigation.state === 'loading') {
        return <LoadingSpinner />
    }

    const ref = React.createRef();

    const options = {
        orientation: "landscape",
        unit: "px",
        format: [window.innerWidth * 0.55, window.innerHeight],
    };

    return (
        <div>
            <div className='text-center mt-6'>
                <Pdf
                    targetRef={ref}
                    filename="blog.pdf"
                    options={options}
                    x={0}
                    y={0}
                    scale={1}
                >
                    {({ toPdf }) => (
                        <button className="btn-custom" onClick={toPdf}>
                            Generate Pdf
                        </button>
                    )}
                </Pdf>
            </div>

            <div ref={ref} style={{ width: "100%", height: "100%" }} className="my-container px-4 py-8">
                <div className='bg-gray-100 p-5'>
                    <div className="bg-white p-5 shadow-md my-5">
                        <h2 className="text-xl font-bold mb-2"><span>01:</span> Tell us the differences between uncontrolled and controlled components.</h2>
                        <p className="text-gray-700 text-base"><span className='font-semibold'>Answer: </span>
                            Controlled components are managed by the parent component and rely on the parent component to pass down state and event handlers to the child component. This pattern allows for a predictable flow of data and makes it easier to reason about the behavior of the component. Uncontrolled components, on the other hand, manage their own state internally and do not rely on a parent component to manage it for them. Uncontrolled components can be simpler and more straightforward to use, but can also be harder to reason about as the state can change without the parent component's knowledge. The choice of which approach to use depends on the complexity of the user interface and the specific use case.
                        </p>
                    </div>
                    <div className="bg-white p-5 shadow-md my-5">
                        <h2 className="text-xl font-bold mb-2"><span>02:</span> How to validate React props using PropTypes</h2>
                        <p className="text-gray-700 text-base"><span className='font-semibold'>Answer: </span>
                            PropTypes is a utility provided by React that allows you to validate the type and shape of props passed to a component. PropTypes are defined using the PropTypes library from the 'prop-types' package and specify the expected prop types and their shape. When a prop with an invalid type is passed or a required prop is not passed, a warning is logged to the console. PropTypes are not enforced by default, but they are a useful tool for catching errors early and documenting the expected props for a component.
                        </p>
                    </div>
                    <div className="bg-white p-5 shadow-md my-5">
                        <h2 className="text-xl font-bold mb-2"><span>03:</span> Tell us the difference between nodejs and express js.</h2>
                        <p className="text-gray-700 text-base"><span className='font-semibold'>Answer: </span>
                            Node.js is a runtime environment for executing JavaScript code on the server-side. It provides a set of core modules for handling tasks such as file I/O, networking, and process management. On the other hand, Express.js is a popular web application framework that runs on top of Node.js. It provides a robust set of features for building HTTP servers and handling requests and responses. Express.js includes middleware that can be used to add additional functionality to your application, such as routing, authentication, and error handling. In essence, Node.js provides the platform for running JavaScript on the server-side, while Express.js provides a structure and set of tools for building web applications.
                        </p>
                    </div>
                    <div className="bg-white p-5 shadow-md my-5">
                        <h2 className="text-xl font-bold mb-2"><span>04:</span> What is a custom hook, and why will you create a custom hook?</h2>
                        <p className="text-gray-700 text-base"><span className='font-semibold'>Answer: </span>
                            A custom hook in React is a reusable function that encapsulates a specific logic and can be shared across multiple components in a React application. Custom hooks can be created to abstract away complex or repetitive code, reduce duplication of code, and improve maintainability of the codebase. They follow the same rules as regular React hooks and can be used to create stateful logic or encapsulate side effects. Creating a custom hook involves defining a function that returns any necessary state or functions for the components that use the hook. Common examples of custom hooks include form validation or fetching data from an API.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;