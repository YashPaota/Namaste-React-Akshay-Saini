
// 1. This is the way of creating an HTML element by JavaScript.

    // const heading = document.createElement("h1");  //An h1 element is created.
    // heading.innerHTML = "Namaste World from JavsScript";  //Writing data to h1 tag.
    // const root = document.getElementById("root");  //Getting the root element by id and storing it in root. 
    // root.appendChild(heading); //Appending this heading to root. 

// 2. Now we will create HTML with React. For that we have already injected React into project using CDN Links. 
    // const heading = React.createElement("h1" , {id:"child"} , "Namaste World From React"); 
    // //first is the element type , second is an attribute object , third is the the children and this all are called as props. 
    
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(heading);


// 3. Now suppose we want to create a nested tag like this
        //     <div id="parent">
        //         <div id="child">
        //             <h2>Hello Parent from child.</h2>
        //         </div>
        //      </div>    


        const heading = React.createElement("div" , {id:"parent"} , 
                          React.createElement("div" , {id:"child"} , 
                            React.createElement("h1" , {}, "Hello Parent from Child")));
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);  
        
// 4. Now suppose we have sibblings then do this.   
        //    <div id="parent">
        //       <h2 id="child1">Child 1</h2>
        //       <h2 id="child2">Child 2</h2>
        //    </div>
        //   const heading = React.createElement("div" , {id:"parent"} ,[
        //                   React.createElement("h2" , {id:"child1"} , "Child 1") ,
        //                   React.createElement("h2" , {id:"child2"} , "Child 2")
        //                   ]);

        //   const root =  ReactDOM.createRoot(document.getElementById("root"));
        //   root.render(heading);                

    