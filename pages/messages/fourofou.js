import Error from 'next/error'

const FouroFou = ({errorCode, message}) => {

    if (errorCode) {
        return <Error statusCode={errorCode} title={message} />

    }


    return (
        <>
            <h1>{message}</h1>
        </>
    )
}

export const getServerSideProps = (context) => {
    
    try {
        throw new Error("bwoken");
    } catch (error) {
        return {props: {errorCode: 401, message: 'its bwoken'}}
    }


    return {
        props: {message: 'Welcome to our FAQ'
                //notFound: object? false : true
                // redirect: {
                //     destination:'/',
                //     permanent: true,
                // }
    }
    }

}

export default FouroFou;