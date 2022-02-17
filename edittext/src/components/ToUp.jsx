import comandsStyle from '../styles/Comands.module.css'
export default props => {
    let texto = props.text
    return <button className={comandsStyle.button} onClick={_ => props.change(texto.toUpperCase())}>UpperCase</button>
}