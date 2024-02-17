
/*
  <div id="parent">
    <div id="child">
       <h2> This is Shreyas</h2>
    </div>
   </div>
*/



const heading = React.createElement("div",{id:'parent'},
   React.createElement("div",{id:'child'},
     React.createElement("h1",{},"I'm Shreyas Vishwakarma"),
     React.createElement("h2",{},"I'm Google Chrome")
   )
) ;  
const root = ReactDOM.createRoot(document.getElementById("root")) ; 

console.log(heading) ; 

root.render(heading)  ;