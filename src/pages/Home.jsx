import React from 'react'
import { Image } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import ImagesAccordingToDevices from '../components/ImagesAccordingToDevices';
import home_desktop from "../images/desktop/home.png";

const Home = () => {
  return (
    <div style = {{textAlign:"left"}} className = "p-5">
        <Helmet>
            <title>Electron Documentation | Electron</title>
        </Helmet>

        <p>The documentation is organized to help you get started shopping electronic items with <b><a href = "https://electron-electronic-ecommerce-website-mern-hgo9u7pnu.vercel.app/"  target="_blank" rel="noopener noreferrer" >Electron Website</a></b></p>
        
        <p>This project is done by Simran Sharma in Semester VI of course MSc. (CA&IT) under Department of Computer Science KSKVKU</p>
        
        <br />

        <div style={{ display: "flex"}} className = "justify-content-center ">
          {/* <Image src="https://i.ibb.co/ZSv8f3D/image.png" style = {{height:"400px"}} /> */}
            <ImagesAccordingToDevices mobileImage={"https://i.ibb.co/TMZMkmV/IMG-20230820-123839.jpg"} desktopImage={home_desktop}/>
        </div>

        <br />
        <p>Electron is a leading electronic ecommerce website that offers a broad range of electronic products online. Designed to provide a seamless shopping experience, the website enables customers to easily find the products they need and complete their purchase securely.
            With an extensive range of product categories, including Laptops, Tablets, Smartphones, TV, Kitchen Appliances, Headphones and Earphones, ACs, and accessories, customers can browse products by category, brand, or price. The search function also enables them to quickly find specific items.
            Electron also provides a range of customer-focused services, such as a user-friendly interface, detailed product descriptions and specifications, and customer reviews and ratings, to further enhance the shopping experience.
        </p>
        
        {/* <p><a href = "https://electron-electronic-ecommerce-website-mern-hgo9u7pnu.vercel.app/"  target="_blank" rel="noopener noreferrer" >Whole Website</a></p> */}

    </div>
  )
}

export default Home;