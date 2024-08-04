import NavbarStyleTwo from "@/components/Layout/NavbarStyleTwo";
import PageTitle from "@/components/Common/PageTitle";
import ContactFormStyleTwo from "@/components/ContactUs/ContactFormStyleTwo";
import GoogleMap from "@/components/ContactUs/GoogleMap";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import ContactForm from "@/components/ContactUs/ContactForm";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      {/* <PageTitle 
        title="Contact Us"
        homeText="Home"
        homeUrl="/"
      /> */}

      <div className="ptb-100">
        <ContactFormStyleTwo />
      </div>

      {/* <div className="pb-100">
        <GoogleMap />
      </div> */}
 
      <Footer />
    </>
  )
}
