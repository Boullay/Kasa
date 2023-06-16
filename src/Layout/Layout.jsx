import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Layout = ({children}) => {
    return(<>
        <Banner />
        <main>{children}</main>
        <Footer />
    </>
    )
}

export default Layout;