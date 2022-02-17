import comandsStyle from '../styles/Comands.module.css'
export default props => {
    let vowel = ['á', 'à', 'ã','â','ä','a','é','è','ê','ë','e','ì','í','î','ï','i','ó','ò','ô','ö','õ','o','ú','ù','û','ü','u'] 
    let text = props.text.toString().split('')
    var consonantResult = []
   let textRes = text.map(item => {
       let itemParam = item.toLowerCase()
       consonantResult.push(vowel.filter(i => i == itemParam)[0] != undefined ? item : ' ' )
       return consonantResult
    })

    return <button className={comandsStyle.button} onClick={_ => props.change(textRes[0] ? textRes[0].join('') : '')}>Just vowels</button>
}