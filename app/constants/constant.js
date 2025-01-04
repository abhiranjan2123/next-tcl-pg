import logo from '../assets/logo.svg';
import heroimage from '../assets/hero-image.svg';
import WhatsAppImage from '../assets/WhatsApp.svg';
import AboutUs from '../assets/aboutus-image.svg'
import HeroImage2 from '../assets/Hero-Image2.webp'

// gallery images import
import image1 from "../assets/gallery/image1.svg"
import image2 from "../assets/gallery/image2.svg"
import image3 from "../assets/gallery/image3.svg"

//socialmedia images

import facebook from "../assets/socialMedia/facebook.svg"
import whatsapp from "../assets/socialMedia/whatsapp.svg"
import twitter from "../assets/socialMedia/twitter.svg"
import instagram from "../assets/socialMedia/instagram.svg"

const GoogleMapLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15554.272443165904!2d77.63219245!3d12.93545675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144ed898fc2d%3A0x1681f38e8c00ae56!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1735042171869!5m2!1sen!2sin" ;
const Amenties = [
  "Free Wi-Fi",
  "Swimming Pool",
  "Gym",
  "Spa",
  "Restaurant",
  "Bar",
  "Room Service",
  "Laundry Service",
  "Parking",
  "Airport Shuttle",
  "Pet Friendly",
  "Non-Smoking Rooms",
  "Family Rooms",
  "Facilities for Disabled Guests",
  "24-Hour Front Desk",
  "Daily Housekeeping",
  "Meeting/Banquet Facilities",
  "Business Center",
  "Concierge Service",
  "Luggage Storage",
  "Safety Deposit Box",
  "Air Conditioning",
  "Heating",
  "Elevator",
  "Garden"
];

const GalleryImages =[
{
  id:1,
  src:image1,
  alt:'image1'
},
{
  id:2,
  src:image2,
  alt:'image2'
}
,{
  id:3,
  src:image3,
  alt:'image1'
},
{
  id:4,
  src:image1,
  alt:'image1'
},
{
  id:5,
  src:image2,
  alt:'image2'
}
,{
  id:6,
  src:image3,
  alt:'image3'
},
]

const RoomTypes = [

  {
    id:1,
    image:[HeroImage2,image1,image3],
    sharing:'Single',
    beds:1,
    washroom:1,
    price:25000
  },
  {
    id:2,
    image:[HeroImage2,image3,image2,image1],
    sharing:'Double',
    beds:2,
    washroom:1,
    price:15000
  },
  // {
  //   id:2,
  //   image:image2,
  //   bed:'Double Sharing',
  //   Amenties:["Attached Washroom",'Study Table','Geyser'],
  //   price:15000
  // },
  // {
  //   id:2,
  //   image:image2,
  //   bed:'Double Sharing',
  //   Amenties:["Attached Washroom",'Study Table','Geyser'],
  //   price:15000
  // }
]

const CompanyName = 'The Cozy Luxe';
const whatsAppUrl = 'https://wa.me/+919535585524?text=I%20am%20interested%20in%20your%20services';
const phoneNumberUrl = 'tel:123'; 


const NavLinks = [
  {
    name: 'Home',
    href: '#'
  },
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Amenities',
    href: '#amenities'
  },
  {
    name: 'Gallery',
    href: '#gallery'
  }
];


export { GoogleMapLink,logo,heroimage,WhatsAppImage,facebook,twitter,instagram,whatsapp,AboutUs, Amenties,GalleryImages, phoneNumberUrl,NavLinks , CompanyName,whatsAppUrl ,RoomTypes};