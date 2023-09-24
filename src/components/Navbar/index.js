import { useEffect, useRef, useState } from 'react'
import './Navbar.scss';
import { FaAngleDown } from "react-icons/fa";

export default function Navbar() {
    const [productData, setProductData] = useState([]);
    const scrollYRef = useRef(0)
    let a = 0

    useEffect(() => {
        fetch('http://localhost:3000/category') 
            .then(res => res.json())
            .then(data => {
                setProductData(data);
                // console.log(data);
            })
    }, []);

    // test
    useEffect(() => {
        // debugger
        // 2
        const scrollCallback = () => {
            console.log('productData length' + '---' + productData.length + '----' + window.scrollY);
            scrollYRef.current = window.scrollY;
            a = window.scrollY
        }
        window.addEventListener('scroll', scrollCallback)

        // const interval = setInterval(() => {
        //     console.log('3000')
        // }, 3000)

        return () => {
            // 1
            // clearInterval(interval)
            // debugger
            // window.removeEventListener('scroll', scrollCallback)
        }
    }, [productData])

    return (
        <>
            <nav className="nav">
                <ul className='nav__main'>
                    <li className="nav__main__item">
                        <a href="#">Home</a>
                    </li>
                    <li className="nav__main__item">
                        <a href="#">Popular</a>
                    </li>
                    <li className="nav__main__item">
                        <a href="#">Category<FaAngleDown style={{marginLeft: 5}}/></a>
                        <div className='nav__main__item__sub-menu'>
                            <ul className='nav__main__item__sub-menu__list'>
                                {productData.length > 0 && productData.map((item, index) => 
                                    <li className='nav__main__item__sub-menu__list__item' key={index}>{item}</li>
                                )}
                            </ul>
                        </div>
                    </li>
                    <li className="nav__main__item">
                        <a href="#">Blog</a>
                    </li>
                    <li className="nav__main__item">
                        <a href="#">About Us</a>
                    </li>
                    <li className="nav__main__item">
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}