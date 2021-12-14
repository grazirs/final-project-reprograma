import './subtitles.css'

const Subtitles = (props) => {
    return(
        <div>
        <h3 className="titlepage">{props.children}</h3>
        </div>
    )
}

export default Subtitles