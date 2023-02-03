import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="link">
            <Link to="/">
                <button className="link_button ">LIST</button>
            </Link>
            <h1 className="title"> WHAT DID I DO TODAY?</h1>
            <Link to="/day">
                <button className="link_button ">GAME</button>
            </Link>
        </header>
    );
};
export default Header;
