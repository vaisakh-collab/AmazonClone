import React from 'react';
import "./Home.css";
import Product from "./Product"

function Home() {
  return (
    <div className = 'home'>
      <div className = "home__container">
        <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/1/toys/Desktop_tall_Hero_3000x1200_RC-Cars_1._CB784186419_.jpg' className = "home__image" alt= ''/>

        <div className="home__row">
            <Product 
                id = "12321341"
                title = 'The Lean Startup: The Million Copy Bestseller Driving Entrepreneurs to Success' 
                price = {600}
                image='https://m.media-amazon.com/images/I/81vvgZqCskL._SY522_.jpg'
                rating = {5}
            />
            <Product
                id = '49538094'
                title = "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                price={6499}
                image='https://m.media-amazon.com/images/I/61A-nKQFtDL._AC_UY436_FMwebp_QL65_.jpg'
                rating = {4}
            />
        </div>
            
        <div className="home__row">
            <Product 
                id = '4903850'
                title = "Samsung 27 (68.5cm) Odyssey G5 2K Curved Gaming Monitor|QHD 2560 X 1440|1000R Curved|165Hz|1ms(MPRT)|300nits"
                price = {17499}
                image='https://m.media-amazon.com/images/I/81VWg3IBSDL._SL1500_.jpg'
                rating = {4}
            />

            <Product 
                id = '23445930'
                title = "Amazon Echo Dot (5th Gen) | Smart speaker with vibrant sound, Motion Detection, Temperature Sensor, Alexa and Bluetooth| Black"
                price = {5499}
                image='https://m.media-amazon.com/images/I/719xTUTjrSL._SL1500_.jpg'
                rating = {4}
            />

            <Product 
                id = '3254354345'
                title = "Apple iPad Air 27.59 cm (11″) (M4): Liquid Retina Display, 128 GB, 12MP Front/Back Camera, Wi-Fi 7 with Apple N1, Touch ID, All-Day Battery Life"
                price = {60398}
                image='https://m.media-amazon.com/images/I/71OjEuJ2o3L._SL1500_.jpg'
                rating = {5}
            />
        </div>

        <div className="home__row">
            <Product 
                id = ''
                title = " LG 29U511A 73 cm (29 Inch) UltraWide WFHD (2560x1080) IPS Monitor, 3-Side Virtually Borderless, DP, HDMI, Headphone Out, Tilt Adjustable (Black)"
                price = {15499}
                image='https://m.media-amazon.com/images/I/71yrNXgvFuL._SL1500_.jpg'
                rating = {4}
            />
        </div>

      </div>
    </div>
  )
}

export default Home
