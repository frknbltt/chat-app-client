import React,{useEffect} from "react";

const App = () => {
 
  const getInstagram = () => {
    const requestOptions = {
      method: 'POST'
  };
    fetch('https://chat-app-client-main.herokuapp.com/?code=AQDnGIfhtTwb3-qK6zKy9xezA9VlklHfU0aA8FL6aW_RAvp2Rtqdi6qlb7hEJ9bDxxzraDnRkeOwvjYhQKsR2xxdTbVQGrGbOJIPhowbUEf1TGgA20fChJ1N1Qp0uE8bEAhIofFwcZXaJYsP78NVIaRyznKJGg1eLgv4cT2jRLXbVGxtzIPxsONzv_NCfG7S5q2cjygT53aNaumBTMfVn2x3xY8QUlvNyC6--cQI4oZ8Pg#_',requestOptions)
      .then(data => {
       console.log(data);
      })
      .catch(error => {
        console.log(error);
      })
    }

    useEffect (() => {
      getInstagram()
    }, [])
    
  return <div><button onClick={()=>{getInstagram()}}> onclil</button> </div>;
};
export default App;
