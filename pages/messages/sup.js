import Error from 'next/error'

const Sup = ({message}) => {

    return (
        <>
            <h1>{message}</h1>
        </>
    )
}

export const getServerSideProps = (context) => {



    return {
        props: {message: 'Welcome to our FAQ'
    }

}

export default Sup;