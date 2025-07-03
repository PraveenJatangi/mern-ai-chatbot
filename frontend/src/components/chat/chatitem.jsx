import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkCold } from 'react-syntax-highlighter/dist/esm/styles/prism';


function splitIntoBlocks(message) {
  return message.includes('```') ? message.split('```') : [message];
}

function  looksLikeCode(str){
 return  /[{}[\];=]|\/\/|#/.test(str);
}
 const ChatItem=({content,role,key})=> {
    const blocks = splitIntoBlocks(content);

  return (
  
<div   key={key} className={ ` w-full flex px-4  ${role === 'user' ? 'justify-end' : 'justify-start'} `}>
  <div className={` ${role === 'user' ? 'bg-gray-400 border border-blue-300 text-black inline-block px-4 py-2 rounded-md text-sm' : 'inline-block text-white px-4 py-2  rounded-md text-sm'}` }>

 {blocks.map((block, i) =>
          looksLikeCode(block) ? (
            <SyntaxHighlighter
  key={i}
  language="javascript"
  style={coldarkCold}
  wrapLongLines={true}
  wrapLines={true}                          
  customStyle={{
    whiteSpace: 'pre-wrap',                 
    wordBreak: 'break-word',              
    maxWidth: '100%',
    overflowX: 'hidden'                     
  }}    
  codeTagProps={{
        style: {
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
        }
      }}
  className="rounded-md my-2"
>
  {block.trim()}
</SyntaxHighlighter>
          ) : (
            <p key={i}>{block}</p>
          )
        )}
      </div>
      </div>
    )
}

export default ChatItem;


