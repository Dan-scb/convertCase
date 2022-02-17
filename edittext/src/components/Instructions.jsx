import instructionsStyle from '../styles/Instructions.module.css'

export default props => {
  return  <div className={instructionsStyle.instructions}>
      <span className={instructionsStyle.headerSpan}>
      <h3>Instructions</h3>
     <p>If you have some text that you want to change, this tool can help you.</p> 
     <p>Copy the text you want to change and paste it in the blank space, after that press any button to modify the text.</p> 
     </span> 
    
            <span>
            <h4>Clear:</h4>
            <p>Clear the entire text area.</p>
            </span>
    
        <span>
            <h4>LowerCase:</h4>
            <p>The text in lowercase.</p>
        </span>
        
            <span>
            <h4>UpperCase:</h4>
            <p>The text in lowercase.</p>
            </span>
            <span>
            <h4>Shuffle:</h4>
            <p>Scramble the letters.</p>
            </span>
            <span>
            <h4>Capitalize:</h4>
            <p>The first letter of all words to uppercase.</p>
            </span>
            <span>
            <h4>Remove vowels:</h4>
            <p>Romove vowels of all words.</p>
            </span>
        
            <span>
            <h4>Just vowels:</h4>
            <p>Only vowels remain in the text.</p>
            </span>
        
            <span>
            <h4>Reverse letters:</h4>
            <p>Reverse all letters.</p>
            </span>
        
            <span>
            <h4>Space in everything:</h4>
            <p>Add space in each letter.</p>
            </span>
        
            <span>
            <h4>No space:</h4>
            <p>All space in the text is removed.</p>
            </span>
        
    </div>
}