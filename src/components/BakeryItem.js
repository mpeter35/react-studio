// TODO: create a component that displays a single bakery item
function BakeryItem(props){
    const handleClick = () =>{
        // props.setCart(props.cart + 1)
        props.setCart( arr => [...arr, props.info.name])
        props.setCount(Math.round((props.count + props.info.price+ Number.EPSILON)*100)/100)
        
    }
    return <div>
        <h1>{props.info.name}</h1>
        <h3>{props.info.description}</h3>
        <img style={{ width: "20%", height: "30%" }} src = {props.info.image}/> 
        <button onClick={handleClick}> Add to Cart </button>
        <h3 style={{color: "red"}} >{props.info.price}</h3>
    </div>;
}





export default BakeryItem