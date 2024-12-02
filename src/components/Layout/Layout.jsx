import Header from "../../containers/Header/Header";


export default function Layout({children}) {
    return(
        <>
            <Header />
            {children}
        </>
    )
}