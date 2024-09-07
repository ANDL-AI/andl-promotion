import AuthorizedLayout from "@/components/authorized-layout"
import Footer from "@/components/footer"
import HeaderNavBar from "@/components/header"
import AboutUs from "@/components/about-card"

export default function aboutUs(){
    return (
        <div>
            <HeaderNavBar/>
        <AuthorizedLayout>
            <AboutUs/>
        </AuthorizedLayout>
            <Footer/> 
        </div>
    )
}