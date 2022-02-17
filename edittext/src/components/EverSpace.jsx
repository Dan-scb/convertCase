import comandsStyle from '../styles/Comands.module.css'
export default props => {
    let text = props.text
    return <button className={comandsStyle.button}  onClick={_ => props.change(text.split('').join(' '))}>Space in everything</button>
}