import { Layout, } from 'antd';
import 'antd/dist/antd.css'; 
import './navbar.css'
import { Link } from 'react-router-dom';

const { Header, } = Layout;

const Navbar = () => {
    return (
        <div className="header">
            <Layout className="layout">
            <Header>
                <div className="a">
                <div className="logo" >
                    <img className="img" src="https://res.cloudinary.com/teepublic/image/private/s--YvBafm71--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1490273136/production/designs/1349947_1.jpg" alt="" />
                </div>
                <div className="Navbar">
                    <ul className="item">
                        <Link to="/" ><li className="itemList">Home</li></Link>
                        <Link to="/animelist" ><li className="itemList">AnimeList</li></Link>
                        <Link to="/contact" > <li className="itemList">Contact Us</li></Link>
                        <Link to="/about" ><li className="itemList">About Us</li></Link>

                    </ul>
                </div>
                <div>
                    <ul className="iconList">
                        <li className="icon"><i class="fas fa-search"></i></li>
                        <li className="icon"><i class="fas fa-user"></i></li>
                    </ul>
                </div>
                </div>
            </Header>
            </Layout>
        </div>
    )
}

export default Navbar
