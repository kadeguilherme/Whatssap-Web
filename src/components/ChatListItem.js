import React from 'react';
import './ChatListItem.css'

export default () =>{

    return (
        <div className='chatListItem'>
            <img className='chatListItem-avatar' src="https://blog.unyleya.edu.br/wp-content/uploads/2017/12/saiba-como-a-educacao-ajuda-voce-a-ser-uma-pessoa-melhor.jpeg" alt=""/>
            <div className='chatListItem-lines'>
                <div className='chatListItem-line'>
                    <div className='chatListItem-name'>Guilherme</div>
                    <div className='chatListItem-date'>19:00</div> 
                </div>
                <div className='chatListItem-line'>
                    <div className='chatListItem-lastMsg'>
                        <p>Opa,tudo bem?</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

