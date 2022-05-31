import React,{useEffect} from "react";
import InstagramBasicDisplayApi from "instagram-basic-display"

const App = () => {
  const getInstagram = () => {
   const ig = new InstagramBasicDisplayApi({
      appId: '534810191589884',
      redirectUri: 'https://chat-app-client-main.herokuapp.com/',
      appSecret: 'a084eaa848e4e2fb143bf53d5c7811e5'
  })
  
  console.log(ig.authorizationUrl,"1")
  // -> generates a user-code after successfull authorization
  
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('code');
  ig.retrieveToken(myParam).then(data => {
      const token = data.access_token
  
      ig.retrieveUserNode(token).then(data => {
          console.log(data,"dataaaa")
      })
  })
    }

    useEffect (() => {
      getInstagram()
    }, [])
    
  return <div><button onClick={()=>{getInstagram()}}> onclil</button> </div>;
};
export default App;
