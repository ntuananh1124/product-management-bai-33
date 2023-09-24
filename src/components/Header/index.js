import './Header.scss' 
import { FaFacebookF, FaAngleDown, FaUser, FaShoppingCart } from "react-icons/fa";
import { FaMagnifyingGlass, FaSquareInstagram, FaGooglePlus } from "react-icons/fa6";
import { BsFillChatSquareHeartFill } from "react-icons/bs";

export default function Header() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const cartWishlishCss = {
        width: 35,
        height: 35
    }
    return (
        <>
            <header className="header">
                <div className="header__top">
                    <ul className='header__top__list__left'>
                        <li>Follow Us</li>
                        <li>
                            <a href="#" className='header__top__list__left__icon'><FaFacebookF /></a>
                        </li>
                        <li>
                            <a href="#" className='header__top__list__left__icon'><FaSquareInstagram /></a>
                        </li>
                        <li>
                            <a href="#" className='header__top__list__left__icon'><FaGooglePlus /></a>
                        </li>
                    </ul>
                    <div className='header__top__list__right'>
                        <FaUser /><span>My Account</span><FaAngleDown />
                        <div className='header__top__list__right__menu'></div>
                    </div>
                </div>
                <div className='header__bottom'>
                    <div className='header__bottom__img'>
                        <img src="https://seeklogo.com/images/1/shop-logo-C0083F2CCF-seeklogo.com.png" alt="loading" />
                    </div>
                    <form onSubmit={handleSubmit} className='header__bottom__search__box'>
                        <input className='header__bottom__search' type="text" placeholder='Type here to search...'/>
                        <button className='header__bottom__search__btn'><FaMagnifyingGlass /></button>
                    </form>
                    <div className='header__bottom__cart__wishlist'>
                        <div className='header__bottom__wishlist'>
                            <BsFillChatSquareHeartFill style={cartWishlishCss} />
                        </div>
                        <div className='header__bottom__cart'>
                            <FaShoppingCart style={cartWishlishCss} />
                        </div>
                    </div>
                </div>  
            </header>
        </>
    )
}