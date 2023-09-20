import React, { useState } from "react";
import posterImg from "./../../assets/broklin_Nine_Nine.jpg";
import "./styles.css";
import ShowCard from "../common/Card";
import showImg from "./../../assets/sex-education.jpg";
import ButtonComponent from "../common/Button";
import Slideshow from "../common/Slideshow";


const recentlyAdded = [
    'https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTw-IchmBhH_bCXVZIQYwI19nnd0NQBDxJFQmTokzIUwS6d52SgxrRHD-nT92qjDvCzRxinykvfNeV_oJ4ttAo4rB5df1SAG65L3jhCbMn0lt4iFD7gZ-T-Hncx159z0Lu9y.jpg',
    "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbDETpVQp9Ad9ozzCN-GKgF1WP5v-scBgT5_vMn5kA_N-zRxzxTidkDws3E9pnEBA7MRQhiowEmRyuGXGHLTr30U-fFQbB4iWdpVxXQJgVjX-DauLlEZkfnZT5VIrNWl-0Id.jpg",
    "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABa1f-oJNKgJ6RhXtPzL3Jnu0a1RnIs7Sm6ESJWNcqfuXY4eNTvNKmtaaVeKXIj9HaMMyXcKi3r-bBpWyvOKbXK4ETdCaNQQRWtE59arJMUSAbbkPpIDXLidO5kNfOubZzuuT.jpg",
    "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABT6lswb64lv_bcb3Sc72qWQFnAQBE2k6BzyJS7tcPvuDbn0q3P3bESq0tc8642rLDI81SlZNJ-fdlO4-ObEbdHel_lmwYK840l4WTsotR-TPF44t3X9WtRuxCJcI4mYwRC5yMXQKl_Fi22ToIHZZ8-4oq0ph2NJYSzy8MVBT8tn3GOW8Hubc0cUVo4FdlhScvudchgzhV5bM08Q6j76WP1mQbxePArA48KsEHWXFiCjRaGNXM3UDdM-u5tbPahv437fGa1CHC_LWQUU3Hv8OeJz1QXeFfUo3bS8DlV5WWhPZQdSqTiSjPEp8meiyfD8QuXz-UhKlLtFzIyTnD-RN-jtpIKx3eWn-I0SpiaSTrmsQgmB3AiE0cK70A-BeOOv7Z5M6NU9wGkLs5VIb1jzWPjoRWno7GqFcNuWB83aakogi.webp?r=d24",
    "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSE6hVi0hWhlMocjdUwqZc19ZyLqhCnN7pvyeMvjFxRvYaYH2XfKlKLLu8FuB6vNx5w9uW1i8KBFyMx3Zm4ueX4W2bu6GWXZmmg6bckR0oab-GN5yQeaBVE89SNfcY3oRGkf.jpg?r=185" ,
    "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcKQCXwNL4Z6bES6BIDHO6f71mDRzPi1KDAhGf0a8VY-0nEL1uneXJV4FNRDyHNT7wYB4bBgnZswnhsBs6DXv5T1HEBxoIobCgw.webp?r=037" ,
     "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABThWEWFF-CXlO7036ylJxb0_ga526pBspHxdfPo4CGr8fFQxOIJ3_1qGdQ7mIorPAeWqjPpkig0UHbblCOR_-An6ydF0lSODL_4PhOpZXI4_NXvHJpgOnfVbz9Roa-rDAMXm.jpg?r=916",
     "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRwPUBbPLuxKGWjXQhahiNS9-BM34JJiqY1bdgvlwaAqTFksFqhxBrwrtQ6Rj8R2CwvpF-szvzipCyk1puc4iKSj_thWqnPPGDq_FRRITPTc4kbtMySAkU-JnrKfkJ7XajEV.jpg?r=165" ,
]

const Trending = [
    "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZi58-DiVEciPGo0Dq2yLsL3E-7UT7HakQOXExRJ9TKIjFK14Hg1OA31zLr4EXHJ9Y1meL_wQbAYAurj-JhwG-4-HsYYPxmciFUqQmhxYG5rbQ2AO4pXt-j7y0Euku5e_XGeDBtCgj3lyfMqHD3NsIK4aTjai7sW7MwK4tGSOdmX8RI8Me5-cm4FVOKJmOg.jpg?r=7c0",
    "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVVBefzzb0fZRln5fGdbTRgA36U6DGx_DREST_G13nc_wthS0FNli_QP-4VGIYiA5mUG2eHkpW3oy40Xnla9LBrejki0Dtx_LNx7-W_cxCgoV3nxqPCkuhelZNT__Oflm2Ae.jpg?r=31e",
    "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWENRvFIBh56WCyexGNUzU4UB6jO_tJLjSj78aWNAw8hBNzE-L4LTTPuxmUzGAAl7gBWoycEwzcBbUz2_aCBpdC3j8pNnCpX5bY.webp?r=580",
    "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUBZ4jQJKHtdK-PTdtcc-Wt0oSBLKicYT71n1vS5vSreKDJ3SE3qKu-xrTr7KM_kR9mA_Wd6YT-IhwGINJW9jZjoJuJ-fkH7Nao.webp?r=8cb",
    "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRSHTTVb4vvVn7tl4FbBnkGDTmS3yK2oFF-DwjjMGz-Y3LgLBffAsF5As5fPqTjG3846N-d443LpqO8a7-IKBQTohf_OI9ObakM.webp?r=697",
    "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcmDuLnb7et-ak7jxrd1SZRexAZ5ELN5yvuY_K6vlfjPIm5f0QdhDWDNehygjSJgUVdnftRMp4x49bTHIWfQjS6f4W3ptvCNGtgsSt_6OiobmZMitrvz4EkoMLnZ8sCivVymBuY_52a2HWNHRqStv3HdHf_SLwsv04svnGkOInW7q44cYSN7M8HyVP_fqHbmiPYrHoOGRSka75-dkeOa5THFw2QxmsoouaGRELABQUZhBsHUcyS0gU1u0alDI1ol9338K5oAYxJwwyeDR3z_vl_jUlPFqAlGm9vt-gx7WUqSegAPRtCEDxdt1zY_BHJg-_B2qHE9iNc314Uc-POV-pPotuEKh-CrKKOBgg55JqzPcwLRkAw.jpg?r=9ec",
    "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXo4JLwCzOE6vUJnX2EqOQtpJYz-QTPjc7FErvrAUOCPGHBtrRF9U3DuG9NZ3oTmxsDUlQYO0-BBhvmJ6Ctp-ZuLulq21tiphA62ZZoTFFREAnpjqCNAs6QUF2vW8HZijBIk.jpg?r=789",
    "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbvbUNVxAT4fptopLV_eUCTGK3cI2Q9LmzmG47D-uEbIdiof8e1UUQprVRFaAKVg4xjPj5tp32gaEKl7xuhNaguKYc3WidxfUTbo5ulioEvv3wPZeAuh6CwB6FGBEBQUdGHM.jpg?r=a5e",
    "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcT0f0nzolJNvHO_0BoiuXm6UKNoBIKjAFA8M9-p8-p3o_qyfsy9tcTA-djieHaD6sz9wFt4v9TCoXurl1Mwmpyed2KmCbxLEXAjSj-_sQF9XgzNJvOVK2IC8nAwzt0OVSOA.jpg?r=807"
]

const indian = [
    "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdGkhL4fBQi5t_iIRQyLkYZg8dsfCpSqkzpynp6x5e5PO0lbrL2n2VeEMuWNA6wOfj6z-MKaleu58T-xwJiSpd-8uZS_-RXJWLfXMuL-v7w0PwudkOqfg_nRJgwCEZmRfdvfefZrYOHJSxng-ftfFP9sy6BhrEjFjIQ.webp?r=c7b",
    "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUE33eQHamh3U0L4gw_1rTz2HVBUD9L1gcYZIx23jD6cmjhHfq4425_KIH8nj3Vi5g24vjNrSg7mWao1NOiLK9WKlBVsrDkQgiQ.webp?r=ff6",
    "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSxHjvq6HEqPf-Iv3Fl2VU2IC-0EWkJDeDpugkgR4hjaFaIOTdJLLWRt9sU3ukNPCYXwoqXHitUBI6AaPQ8a96o5dNYgb_iUPt58s6T-ZJXG7FdHBeGB1MD20f3yAtnGwiNG.jpg?r=ca9",
    "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVl54SFZh0IpfIbbXN-KqmkamoEqP3I4ul7qg_Ap2i7JSWe-35i7xc1VyYPjIYBSFl2_zeRHibn_dam5NzNdjq1EIU_du_TrHVA.webp?r=4e4",
    "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXkJWHBV3xR5HFebfOuNeg7xI8XxYU3M3C1Yt9_TJkjhJgCoHDobvHdBZQviZI9qkAG9PmgvabmYMN5WMlvbpkRhGTg715DTh_A.webp?r=dad",
    "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd5s_5_pjoICic_JMMGdGceWcJEMsfQ9QC0p6i0a4B75T58JCakcEhH5WnqMBgjzQ4xB2uIWvFE30sNezTfNPoiG-mChNlZX1bA.webp?r=242",
    "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUm_5VcL2x4rkBccsDfoZfyTKcwNupOpRFMGGGGngsxZvlDnPjwe8IYW4F6cnnA3e9jxBE01pCmS2yO-7l2dgyTNkKlaOQmqZuw.webp?r=1a7"
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
                    
                    <Slideshow images={recentlyAdded} />
                    
                </div>
                
            </div>
            </div>
            <diV className="categorywise-collection">
                <h2>Trending Now</h2>
                <div className="card-collection">
                    <Slideshow images={Trending} />
                </div>
                <h2>Indian Movies</h2>
                <div className="card-collection">
                <Slideshow images={indian} />
                </div>
                <h2>Only On Netflix</h2>
                <div className="card-collection">
                <Slideshow images={recentlyAdded} />
                </div>
            </diV>
            
        </div>
    )
}

export default Homepage;