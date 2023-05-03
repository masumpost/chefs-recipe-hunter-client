import React from "react";

const Blogs = () => {
  return (
    <div className="mx-4 my-4">
      <h1 className="text-4xl font-bold my-4 text-center">
        Important few question and answer
      </h1>
      <h3 className="font-semibold text-3xl">
        1. Tell us the differences between uncontrolled and controlled
        components?
      </h3>
      <div>
        <span className="font-semibold">Answer</span>: In React, controlled
        components refer to components that have their state and behavior
        controlled by the parent component. These components rely on props
        passed down from the parent component to update their state and
        behavior. Uncontrolled components refer to components that manage their own state internally.
      </div>
      <br />
      <h3 className="font-semibold text-3xl">
        2. How to validate React props using PropTypes?
      </h3>
      <p>
       <span className="font-semibold">Answer</span>: There is some type of
        validation for this reasion. Here is something...
      </p>
      <p>React PropTypes validators :</p>
     <ol>
      <li> any : The prop can be of any data type.</li>
      <li> bool : The prop should be a Boolean.</li> 
      <li> number : The prop should be a number.</li> 
      <li> string : The prop should be a string.</li>
      <li> func : The prop should be a function.</li>
      <li> array : The prop should be an array.</li>
      <li> object : The prop should be an object.</li>
     </ol>
    <br />
    <h3 className="font-semibold text-3xl">3. Tell us the difference between nodejs and express js?</h3>
    <p><span className="font-semibold">Answer</span>:js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
    <br />
    <h3 className="font-semibold text-3xl">4. What is a custom hook, and why will you create a custom hook?</h3>
    <p> <span className="font-semibold">Answer:</span>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>

    </div>
  );
};

export default Blogs;
