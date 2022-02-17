import comandsStyle from '../styles/Comands.module.css'
export default props => {
    let text = props.text.toString().split(' ') 
    if(text.length > 0){
    var textResult = text.map(item => {
        let [a] = item.split('')
        let firstLetter = a != undefined ? a.toUpperCase() : ' '
        
        
      let arrResult = item.split('')
      arrResult[0] = firstLetter
       
        return arrResult.join('')
    })
  
    }

  
   
   return <button className={comandsStyle.button} onClick={_ => props.change(textResult ? textResult.join(' ') : '')}>Capitalize</button>
}