import React, { useState, useEffect} from 'react';
import './App.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

//IMPORTAÇÃO DOS COMPONENTES
import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';

export default () =>{

  const [chatlist,setChatList] = useState([{},{},{},{},{},{},{},{},{},{},{},{}]);

  return (
    <div className = "app-window"> 
      
      <div className = "sidebar">
          <header>
              <img className="header-avatar" src ="https://blog.unyleya.edu.br/wp-content/uploads/2017/12/saiba-como-a-educacao-ajuda-voce-a-ser-uma-pessoa-melhor.jpeg" 
              alt ="">
              </img>

              <div className="header-buttons">
                <div className="header-btn">
                    <DonutLargeIcon style = {{color:'#919191'}}/>
                </div>

                <div className="header-btn">
                    <ChatIcon style = {{color:'#919191'}}/>
                </div>
                
                <div className="header-btn">
                    <MoreVertIcon style = {{color:'#919191'}}/>
                </div>
              </div>
          </header>

          <div className="search">
            <div className="search-input">
              <SearchIcon fontSize='small' style ={{color:'#919191'}}/>
              <input type='search' placeholder='Procurar ou começar uma nova conversa'/>
            </div>
          </div>
         

          <div className="chatlist">
            {chatlist.map((item,key) =>(
              <ChatListItem
              key = {key}
              />
            ))}
          </div>



      </div>

      <div className = "contentarea">
      <ChatIntro/>
      </div>

    </div>

  )
}