import AuthorizedLayout from "@/components/authorized-layout"
import Header from "@/components/header-alternative"
import Footer from "@/components/footer"
import AboutUs from "@/components/about-card"

export default function aboutUs() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
                <AuthorizedLayout>
                    <AboutUs />
                </AuthorizedLayout>
            </div>
            <Footer />
        </div>
    )
}
