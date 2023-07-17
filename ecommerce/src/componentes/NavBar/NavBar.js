import CartWidget from "../CartWidget/CartWidget"

const NavBar=()=>{
    return(
        
        <nav>
        <h3>Ecommerce Leidys</h3>
            <div>
                <button>Celulares</button>
                <button>Tablets</button>
                <button>Notebboks</button>

            </div>

            <CartWidget/>
    </nav>
    
    )

}

export default NavBar
