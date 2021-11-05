import { Layout, } from 'antd';
const Footer = () => {
    const { Footer } = Layout;
    return (
        <div>
            <Layout>
            <Footer style={{ textAlign: 'center' }}>
                Anime Website {(new Date().getFullYear())} Created by Seanglay
                </Footer>
            </Layout>
        </div>
    )
}

export default Footer
