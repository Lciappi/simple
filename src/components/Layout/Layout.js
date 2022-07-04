import Navbar from "./Navbar"
import Logbar from "./Logbar"

const Layout = (props) => {
    // Props.children is just any component wrapped around <Layout>
    return(
        <>
            <Navbar/>
            {props.children} 
            <div style={{position: "fixed", 
                        left:0, 
                        bottom:0,
                        right:0}}>
                <Logbar/>
            </div>
            
        </>
    )
}

export default Layout