import comandsStyle from '../styles/Comands.module.css'
export default props => {
    
    let text = props.text.toString().split(' ')
    for(let i in text){
        
        let strr = text[i].split('')
        for(let c = strr.length; c >= 0; c--){
            let position = parseInt(Math.random() * (c - 1) + 1)
            let param = strr[c]
            strr[c] = strr[position]
            strr[position] = param

        }
        text[i] = strr.join('')
    }
    return <button className={comandsStyle.button} onClick={_ => props.change(text.join(' '))}>Shuffle</button>
}