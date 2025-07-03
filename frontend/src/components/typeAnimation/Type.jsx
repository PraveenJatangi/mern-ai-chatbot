import {TypeAnimation} from 'react-type-animation'

export const TypingAnimation=()=>{
    return (
          <TypeAnimation
      sequence={[
     
        'Chat With Your OwnAI',
        1500, 
        'Build With OpenAI/GorqAPI 🤖',
        1500,
        'Your Own Customized ChatBot',
        1500,
        'Experince The Real Time ChatBot',
        1500
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '50px', color:'white', textShadow:'1px 1px 20px #000', display:'inline-block' }}
      repeat={Infinity}
    />
    )
};