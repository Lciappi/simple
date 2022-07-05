const About = ()  => {
    return (
        <>
            <h1>Dashboard</h1>
        </>
    )
}

// export const getStaticPaths = () => {
//     // fetch() from database run at buildtime

//     //fallback: true: will serve a fallback page (if page is not pre-rendered it'll serve a fallback page)
//     //          false: must specify all possible params
//     //          blocking: fallback is server side rendered 
//     return { paths: [{ params: { id: '1'}}, { params: { id: '2'}}
//              fallback: false]}
// }

//no acces to http requests, response, query parameters etc. only params
export const getStaticProps = (context) =>  {

    console.log(context)

    return { 
            props: {},
            revalidate: 10,
    }

}


export default About;