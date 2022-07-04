import Navbar from "./Navbar"

const Layout = (props) => {
    // Props.children is just any component wrapped around <Layout>
    return(
        <>
            <Navbar/>
            {props.children} 
        </>
    )
}

export default Layout