import react from 'react';
import addNotification from 'react-push-notification' ;
import logo from './images/logo512.png';

function App() {
  const CLickToNotify =()=>{
   addNotification({
    title:'SUPPORT HELPDESK',
    message:'video call',
    duration:4000,
    icon:logo,
    native:true,
    onClick:()=>window.location='https://lonelyplanetimages.imgix.net/a/g/hi/t/bbc886323ff07d295157ea35f423e121-gateway-of-india.jpg',
   });
  }
  return (
    <div>
       <button onClick={CLickToNotify} style={{margin: '100px'}}>
        CLick to notify 
       </button>
    </div>
      
  );
}

export default App;
