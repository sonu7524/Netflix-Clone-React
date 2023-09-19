import React, { useState } from "react";
import posterImg from "./../../assets/broklin_Nine_Nine.jpg";
import "./styles.css";
import ShowCard from "../common/Card";
import showImg from "./../../assets/sex-education.jpg";
import ButtonComponent from "../common/Button";
import Slideshow from "../common/Slideshow";


const images = [
    'https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTw-IchmBhH_bCXVZIQYwI19nnd0NQBDxJFQmTokzIUwS6d52SgxrRHD-nT92qjDvCzRxinykvfNeV_oJ4ttAo4rB5df1SAG65L3jhCbMn0lt4iFD7gZ-T-Hncx159z0Lu9y.jpg',
    "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbDETpVQp9Ad9ozzCN-GKgF1WP5v-scBgT5_vMn5kA_N-zRxzxTidkDws3E9pnEBA7MRQhiowEmRyuGXGHLTr30U-fFQbB4iWdpVxXQJgVjX-DauLlEZkfnZT5VIrNWl-0Id.jpg",
    "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABa1f-oJNKgJ6RhXtPzL3Jnu0a1RnIs7Sm6ESJWNcqfuXY4eNTvNKmtaaVeKXIj9HaMMyXcKi3r-bBpWyvOKbXK4ETdCaNQQRWtE59arJMUSAbbkPpIDXLidO5kNfOubZzuuT.jpg",
    "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABT6lswb64lv_bcb3Sc72qWQFnAQBE2k6BzyJS7tcPvuDbn0q3P3bESq0tc8642rLDI81SlZNJ-fdlO4-ObEbdHel_lmwYK840l4WTsotR-TPF44t3X9WtRuxCJcI4mYwRC5yMXQKl_Fi22ToIHZZ8-4oq0ph2NJYSzy8MVBT8tn3GOW8Hubc0cUVo4FdlhScvudchgzhV5bM08Q6j76WP1mQbxePArA48KsEHWXFiCjRaGNXM3UDdM-u5tbPahv437fGa1CHC_LWQUU3Hv8OeJz1QXeFfUo3bS8DlV5WWhPZQdSqTiSjPEp8meiyfD8QuXz-UhKlLtFzIyTnD-RN-jtpIKx3eWn-I0SpiaSTrmsQgmB3AiE0cK70A-BeOOv7Z5M6NU9wGkLs5VIb1jzWPjoRWno7GqFcNuWB83aakogi.webp?r=d24",
    "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSE6hVi0hWhlMocjdUwqZc19ZyLqhCnN7pvyeMvjFxRvYaYH2XfKlKLLu8FuB6vNx5w9uW1i8KBFyMx3Zm4ueX4W2bu6GWXZmmg6bckR0oab-GN5yQeaBVE89SNfcY3oRGkf.jpg?r=185" ,
    "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcKQCXwNL4Z6bES6BIDHO6f71mDRzPi1KDAhGf0a8VY-0nEL1uneXJV4FNRDyHNT7wYB4bBgnZswnhsBs6DXv5T1HEBxoIobCgw.webp?r=037" ,
     "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABThWEWFF-CXlO7036ylJxb0_ga526pBspHxdfPo4CGr8fFQxOIJ3_1qGdQ7mIorPAeWqjPpkig0UHbblCOR_-An6ydF0lSODL_4PhOpZXI4_NXvHJpgOnfVbz9Roa-rDAMXm.jpg?r=916",
     "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRwPUBbPLuxKGWjXQhahiNS9-BM34JJiqY1bdgvlwaAqTFksFqhxBrwrtQ6Rj8R2CwvpF-szvzipCyk1puc4iKSj_thWqnPPGDq_FRRITPTc4kbtMySAkU-JnrKfkJ7XajEV.jpg?r=165" ,
]


function Homepage() {
    return (
        <div className="homepage">
            <div className="font-display">
            <img className="main-img" src="https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUaRzKyHvni8EIFHsWl9p2OG9zN5woKSuiUEixXOKORk6r1sxesimMYnTYtJfWFb6wF2zv00W2XKSWGPRo2HgOVnN5US9o2PTV0r.webp?r=b5a" />
            <div className="main-img-details">
                <img src="https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABfqaRUUuruxirrLAujDwpBhiaqRS5cv8ZUzsbIGaCc83cW_C7xaw_ft9-aNVO5T41c4Xg3rplO8CWkHMEpRvxORNAR6UxxblnbLgWO2SPz0z.webp?r=f10" />
                <p>Still grieving her fiance's death, an artist text her deepest thoughts to his phone and form a bond with the man who receives them by chance.</p>
                <div className="buttons">
                    <ButtonComponent text="Play" isOutlined={false} />
                    <ButtonComponent text="More info" isOutlined={true} />
                </div>
            </div>
            <div className="main-collection">
            <h2>Recently Added</h2>
                <div className="card-collection">
                    
                    <Slideshow images={images} />
                    
                </div>
                
            </div>
            </div>
            <diV className="categorywise-collection">
                <h2>Trending Now</h2>
                <div className="card-collection">
                    <Slideshow images={images} />
                </div>
                <h2>Indian Movies</h2>
                <div className="card-collection">
                <Slideshow images={images} />
                </div>
                <h2>Only On Netflix</h2>
                <div className="card-collection">
                <Slideshow images={images} />
                </div>
            </diV>
            
        </div>
    )
}

export default Homepage;