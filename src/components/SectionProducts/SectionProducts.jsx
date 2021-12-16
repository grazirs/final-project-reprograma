import './sectionproducts.css'

const SectionProducts =(props)=>{
    return(
        <div className="category">
            <div className="products">
                <img src={props.children} alt="" />
                <h3>{props.category}</h3>
                <p>{props.categoryText}</p>
            </div>
        </div>

    )
}

export default SectionProducts