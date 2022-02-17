import comandsStyle from '../styles/Comands.module.css'
export default props => {
   let arrReverse = []
    let text = props.text.toString().split(' ')
    for(let i in text){
        arrReverse.push(text[i].split('').reverse().join(''))
    }
    
    return <button className={comandsStyle.button} onClick={_ => props.change(arrReverse.join(' '))}>Reverse letters</button>

}