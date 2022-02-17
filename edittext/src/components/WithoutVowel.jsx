import comandsStyle from '../styles/Comands.module.css'
export default props => {
    let vowel = ['á', 'à', 'ã','â','ä','a','é','è','ê','ë','e','ì','í','î','ï','i','ó','ò','ô','ö','õ','o','ú','ù','û','ü','u'] 
    let text = props.text.toString().split('')
    var arrResult = []
      let textRes = text.map(item => {
             let itemParam = item.toLowerCase()
         arrResult.push(vowel.filter(i => i == itemParam)[0] != undefined ? undefined : item)  
            return arrResult   
        })
        
    
    return <button className={comandsStyle.button} onClick={_ => props.change(textRes[0]? textRes[0].join('') : '')}>Remove vowels</button>

}

