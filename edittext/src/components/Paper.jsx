import paperStyle from '../styles/Paper.module.css'
import comandsStyle from '../styles/Comands.module.css'
import { useState } from "react"
import Nospace from "./Nospace"
import ToUp from "./ToUp"
import ToLow from "./ToLow"
import EverSpace from "./EverSpace"
import ShuffleLetter from "./ShuffleLetter"
import ReverseOrder from "./ReverseOrder"
import WithoutVowel from "./WithoutVowel"
import WithoutConsonant from "./WithoutConsonant"
import FirsttoUp from "./FirsttoUp"
export default props => {
    const [text, setText] = useState('')

    function change(e){    
        
        setText(e)
        
    }
    
    
return <div className={paperStyle.layout}>
     <div className={comandsStyle.comands}>
     <button className={comandsStyle.button} onClick={e => change('')}>Clear</button>   
    <FirsttoUp text={text} change={e => setText(e)} />
    <ToLow change={e => setText(e)} text={text} />
    <ToUp change={e =>setText(e)} text={text}/>
    <ShuffleLetter text={text} change={e => setText(e)}/>
    </div>
    <textarea className={paperStyle.text} name="paper" id="paper" cols="70" rows="20" value={text} onChange={e => change(e.target.value)}></textarea>
    <div className={comandsStyle.comands}>
    <WithoutVowel text={text} change={e => setText(e)} />
    <WithoutConsonant text={text} change={e => setText(e)} />
    <ReverseOrder text={text} change={e => setText(e)} />
    <EverSpace text={text} change={e => setText(e)} />
    <Nospace text={text} change={e => setText(e)} />
    </div>
    </div>
     
}