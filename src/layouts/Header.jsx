import "./Header.css"

function Header(){
    return(
        <div className= "HeaderContainer">
            <div className= "LeftHeaderContainer">
                <div className="LogoContainer" ></div>
                <div className="HomeLink">Home</div>
                <div className= "ShopLink">Shop</div>
            </div>
            
            <div className= "RightHeaderContainer">
                <div className= "ShopButtonContainer">button</div>
            </div>
        </div>
    );
}
export default Header;