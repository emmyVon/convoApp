
import { ChartProvider } from './context/ChartContext';
import './App.css';

import Home from './components/Home';

function App() {
    
  
  
    
  return (
    <div className="App">
      <ChartProvider>
            <Home />
      </ChartProvider>
      
      
    
      {/* <div className='container comment-section'>
        <div className='btn-container'>
          <button>+</button>
          <h4>12</h4>
          <button>-</button>
        </div>
      <div className='left-side'>
        <div className='user-info'>
          <div className='user_avater'> 
            <img src={imagemax} alt='amy'/>
            <p>maxblagun</p>
            <small>1 month ago</small>
          </div>
           <button onClick={()=> handlereply('2')}><img src={replyicon} alt= 'reply-icon' id='2'/>reply</button>
        </div> 
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>   
    </div>
    {reply && <div className='input-section'>
      <img src={imagejulius} alt='input-img'/>
      <input placeholder='Add a comment' />
      <button>Send</button>

    </div>}
    
     <div className='replied-container'>
       <div className='replied_divid'/>
       <div className='replied-comments'>
        <div className='container comment-section'>
        <div className='btn-container'>
          <button>+</button>
          <h4>12</h4>
          <button>-</button>
        </div>
    <div className='left-side'>
      <div className='user-info'>
          <div className='user_avater'> 
            <img src={imageram} alt='amy'/>
            <p>ramsesmiron</p>
            <small>1 month ago</small>
          </div>
           <button onClick={()=> handlereply('3')}><img src={replyicon} alt= 'reply-icon' id='3'/>reply</button>
        </div> 
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </div>
  {reply && <div className='input-section'>
      <img src={imagejulius} alt='input-img'/>
      <input placeholder='Add a comment' />
      <button>Send</button>

    </div>}
    <div className='container comment-section'>
        <div className='btn-container'>
          <button>+</button>
          <h4>12</h4>
          <button>-</button>
        </div>
      <div className='left-side'>
        <div className='user-info'>
          <div className='user_avater'> 
            <img src={imagejulius} alt='amy'/>
            <p>juliusomo</p>
            <small>1 month ago</small>
          </div>
           <button onClick={()=> handlereply('4')}><img src={replyicon} alt= 'reply-icon' id='4'/>reply</button>
        </div> 
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
       </div>  
     </div> */}
     
    {/* <div className='input-section'>
      <img src={imagejulius} alt='input-img'/>
      <input placeholder='Add a comment' />
      <button>Send</button>

    </div> */}
   
      
      
     
    </div>
  );
}

export default App;
