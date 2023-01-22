import React,{useState} from 'react'
import './SearchStyles.css'
import { toast } from "react-toastify";

import Gold from '../../assets/gold.png'




function Search() {
    const [input, setInput] = useState({
        city: "",
        checkin: "",
        checkout:""
      });
//isvalidate
const isvalidate=()=>{
    let isproceed = true;
    let errormsg="Please Select"
    if(input.city == null || input.city == ""){
errormsg+=" Your Travel City"
isproceed=false
    }
    if(input.checkin == null || input.checkin == ""){
        errormsg+=" Your Check-In"
        isproceed=false
            }
            if(input.checkout == null || input.checkout == ""){
                errormsg+=" Your Check-Out"
                isproceed=false
                    }

    if (!isproceed) {
        toast.warning(errormsg);
      }
    return isproceed;
}
      const handlesubmit=(e)=>{
        e.preventDefault();
       if(isvalidate()) {
        console.log('data',input);
        localStorage.setItem("user",input)
        toast.success("Rates & Availabilities Stored In localStorage")
    }
        }
    return (
        <div name='book' className='search'>
            <div className="container">
                <div className="left">
                    <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                    <p>Come experience the very pinnacle of luxury Caribbean all-inclusive vacations for couples at Sandals Resorts. Our luxury beach resorts, set along the most gorgeous tropical settings and exquisite beaches in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and Curaçao, feature unlimited gourmet dining, unique bars serving premium liquors and wines, and every land and water sport, including complimentary green fees at our golf resorts and PADI® certified scuba diving at most resorts. If you are planning a wedding, Sandals is the leader in Caribbean destination weddings and honeymoon packages.</p>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                <img src={Gold} alt="/" style={{ marginRight: '1rem' }} />
                            </div>
                            <div>
                                <h3>WORLD'S LEADING</h3>
                                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                            </div>
                        </div>
                        <div className="box">
                            <div>

                                <h3>NO ONE INCLUDES MORE</h3>
                                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                                <button>View Packages</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="promo">

                        <h4 className="save">GET AN ADDITIONAL 7% OFF</h4>
                        <p className="timer">12 HOURS LEFT!</p>
                        <p className="offers">VIEW ALL CURRENT OFFERS</p>
                    </div>
                    <form onSubmit={handlesubmit}>
                        <div className="input-wrap">
                            <label>Destination</label>
                            <select name='city'
                            value={input.name}
                            onChange={(e) => {
                              setInput({ ...input, [e.target.name]: e.target.value });
                            }}
                            >
                                <option value="1">Goa</option>
                                <option value="2">Pondicherry</option>
                                <option value="3">Maldives</option>
                                <option value="4">Island</option>
                                <option value="5">Nilgiri</option>
                                <option value="6">Maldives</option>
                                <option value="7">Seahorse Reef</option>
                            </select>
                        </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>Check-In</label>
                                <input type="date" name='checkin'
                                value={input.name}
                                onChange={(e) => {
                                  setInput({ ...input, [e.target.name]: e.target.value });
                                }}
                                />
                            </div>
                            <div className="input-wrap">
                                <label>Check-Out</label>
                                <input type="date" name='checkout'
                                value={input.name}
                                onChange={(e) => {
                                  setInput({ ...input, [e.target.name]: e.target.value });
                                }}
                                />
                            </div>
                        </div>
                        <button >Rates & Availabilities </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search
