import './AirportCarRentalFlorida.css';
export default function AirportCarRentalFlorida() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">
              Airport car rental · Florida
            </p>
            <h1>
              Car rental at
              <span className="hl">
                MIA
              </span>
            </h1>
            <p className="sub">
              Miami International. We confirm how you reach the cars and your counter’s card, deposit and age rules before you fly — so you land, collect, and drive.
            </p>
            <div className="cta" style={{display: 'block'}}>
               <form className="rsearch" action="/find-a-car/" method="get" role="search">
                <div className="rs-loc">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s7-6.7 7-12a7 7 0 1 0-14 0c0 5.3 7 12 7 12z"></path>
                    <circle cx="12" cy="9" r="2.5"></circle>
                  </svg>
                  <div style={{flex: '1', minWidth: '0'}}>
                    <span className="l">
                      Pick-up location
                    </span>
                    <input id="pickup" name="pickup" type="text" list="rfc-locs" autoComplete="off" required placeholder="Any US airport, city, county or ZIP" defaultValue="Miami (MIA)" />
                  </div>
                </div>
                <div className="rs-row">
                  <div className="rs-f">
                    <label>
                      Pick-up
                    </label>
                    <div className="rs-dt">
                      <input type="date" name="from" required />
                      <input type="time" name="fromtime" defaultValue="10:00" aria-label="Pick-up time" />
                    </div>
                  </div>
                  <div className="rs-f">
                    <label>
                      Drop-off
                    </label>
                    <div className="rs-dt">
                      <input type="date" name="to" required />
                      <input type="time" name="totime" defaultValue="10:00" aria-label="Drop-off time" />
                    </div>
                  </div>
                </div>
                <div className="rs-row2">
                  <div className="rs-f">
                    <label>
                      Driver age
                    </label>
                    <select name="age">
                      <option value="25+">
                        25 or over
                      </option>
                      <option value="23-24">
                        23 to 24
                      </option>
                      <option value="21-22">
                        21 to 22
                      </option>
                      <option value="under21">
                        Under 21
                      </option>
                    </select>
                  </div>
                  <button className="btn btn-lime rs-go" type="submit">
                    Search cars
                  </button>
                </div>
                <p className="rs-or">
                  Prefer to talk?
                  <a href="tel:+18557619153">
                    Call +1 (855) 761-9153
                  </a>
                  — same rate, and we’ll check your counter rules first.
                </p>
                <datalist id="rfc-locs">
                  <option value="Atlanta, GA (ATL)"></option>
                  <option value="Los Angeles, CA (LAX)"></option>
                  <option value="Chicago O'Hare, IL (ORD)"></option>
                  <option value="Dallas–Fort Worth, TX (DFW)"></option>
                  <option value="Denver, CO (DEN)"></option>
                  <option value="New York JFK, NY (JFK)"></option>
                  <option value="San Francisco, CA (SFO)"></option>
                  <option value="Seattle, WA (SEA)"></option>
                  <option value="Las Vegas, NV (LAS)"></option>
                  <option value="Orlando, FL (MCO)"></option>
                  <option value="Newark, NJ (EWR)"></option>
                  <option value="Charlotte, NC (CLT)"></option>
                  <option value="Phoenix, AZ (PHX)"></option>
                  <option value="Houston Intercontinental, TX (IAH)"></option>
                  <option value="Miami, FL (MIA)"></option>
                  <option value="Boston, MA (BOS)"></option>
                  <option value="Minneapolis–St Paul, MN (MSP)"></option>
                  <option value="Fort Lauderdale, FL (FLL)"></option>
                  <option value="Detroit, MI (DTW)"></option>
                  <option value="Philadelphia, PA (PHL)"></option>
                  <option value="New York LaGuardia, NY (LGA)"></option>
                  <option value="Baltimore, MD (BWI)"></option>
                  <option value="Salt Lake City, UT (SLC)"></option>
                  <option value="Washington Reagan, DC (DCA)"></option>
                  <option value="Washington Dulles, VA (IAD)"></option>
                  <option value="San Diego, CA (SAN)"></option>
                  <option value="Honolulu, HI (HNL)"></option>
                  <option value="Tampa, FL (TPA)"></option>
                  <option value="Portland, OR (PDX)"></option>
                  <option value="St. Louis, MO (STL)"></option>
                  <option value="Chicago Midway, IL (MDW)"></option>
                  <option value="Nashville, TN (BNA)"></option>
                  <option value="Austin, TX (AUS)"></option>
                  <option value="Kansas City, MO (MCI)"></option>
                  <option value="Raleigh–Durham, NC (RDU)"></option>
                  <option value="Sacramento, CA (SMF)"></option>
                  <option value="San Jose, CA (SJC)"></option>
                  <option value="Orange County (Santa Ana), CA (SNA)"></option>
                  <option value="New Orleans, LA (MSY)"></option>
                  <option value="Fort Myers, FL (RSW)"></option>
                  <option value="Dallas Love Field, TX (DAL)"></option>
                  <option value="Houston Hobby, TX (HOU)"></option>
                  <option value="Oakland, CA (OAK)"></option>
                  <option value="San Antonio, TX (SAT)"></option>
                  <option value="Cleveland, OH (CLE)"></option>
                  <option value="Indianapolis, IN (IND)"></option>
                  <option value="Pittsburgh, PA (PIT)"></option>
                  <option value="Columbus, OH (CMH)"></option>
                  <option value="West Palm Beach, FL (PBI)"></option>
                  <option value="Jacksonville, FL (JAX)"></option>
                  <option value="Hartford, CT (BDL)"></option>
                  <option value="Cincinnati, OH/KY (CVG)"></option>
                  <option value="Ontario, CA (ONT)"></option>
                  <option value="Hollywood Burbank, CA (BUR)"></option>
                  <option value="Anchorage, AK (ANC)"></option>
                  <option value="Oklahoma City, OK (OKC)"></option>
                  <option value="Omaha, NE (OMA)"></option>
                  <option value="Albuquerque, NM (ABQ)"></option>
                  <option value="Tucson, AZ (TUS)"></option>
                  <option value="Richmond, VA (RIC)"></option>
                  <option value="Birmingham, AL (BHM)"></option>
                  <option value="Grand Rapids, MI (GRR)"></option>
                  <option value="Reno, NV (RNO)"></option>
                  <option value="Boise, ID (BOI)"></option>
                  <option value="El Paso, TX (ELP)"></option>
                  <option value="Tulsa, OK (TUL)"></option>
                  <option value="Norfolk, VA (ORF)"></option>
                  <option value="Providence, RI (PVD)"></option>
                  <option value="Charleston, SC (CHS)"></option>
                  <option value="Greensboro, NC (GSO)"></option>
                  <option value="Louisville, KY (SDF)"></option>
                  <option value="Memphis, TN (MEM)"></option>
                  <option value="Des Moines, IA (DSM)"></option>
                  <option value="Rochester, NY (ROC)"></option>
                  <option value="Syracuse, NY (SYR)"></option>
                  <option value="Spokane, WA (GEG)"></option>
                  <option value="Buffalo, NY (BUF)"></option>
                  <option value="Albany, NY (ALB)"></option>
                  <option value="Portland, ME (PWM)"></option>
                  <option value="Manchester, NH (MHT)"></option>
                  <option value="Little Rock, AR (LIT)"></option>
                  <option value="Myrtle Beach, SC (MYR)"></option>
                  <option value="Savannah, GA (SAV)"></option>
                  <option value="Pensacola, FL (PNS)"></option>
                  <option value="Knoxville, TN (TYS)"></option>
                  <option value="Huntsville, AL (HSV)"></option>
                  <option value="Mobile, AL (MOB)"></option>
                  <option value="Wichita, KS (ICT)"></option>
                  <option value="Lexington, KY (LEX)"></option>
                  <option value="Dayton, OH (DAY)"></option>
                  <option value="Fresno, CA (FAT)"></option>
                  <option value="Palm Springs, CA (PSP)"></option>
                  <option value="Santa Barbara, CA (SBA)"></option>
                  <option value="Eugene, OR (EUG)"></option>
                  <option value="Burlington, VT (BTV)"></option>
                  <option value="Bangor, ME (BGR)"></option>
                  <option value="Asheville, NC (AVL)"></option>
                  <option value="Columbia, SC (CAE)"></option>
                  <option value="Greenville–Spartanburg, SC (GSP)"></option>
                  <option value="Tallahassee, FL (TLH)"></option>
                  <option value="Gainesville, FL (GNV)"></option>
                  <option value="Sarasota, FL (SRQ)"></option>
                  <option value="Madison, WI (MSN)"></option>
                  <option value="Green Bay, WI (GRB)"></option>
                  <option value="Fargo, ND (FAR)"></option>
                  <option value="Billings, MT (BIL)"></option>
                  <option value="Kalispell, MT (FCA)"></option>
                  <option value="Jackson Hole, WY (JAC)"></option>
                  <option value="Aspen, CO (ASE)"></option>
                  <option value="Vail–Eagle, CO (EGE)"></option>
                  <option value="Colorado Springs, CO (COS)"></option>
                  <option value="Bozeman, MT (BZN)"></option>
                  <option value="Long Beach, CA (LGB)"></option>
                  <option value="Monterey, CA (MRY)"></option>
                  <option value="Northwest Arkansas (XNA)"></option>
                  <option value="Springfield, MO (SGF)"></option>
                  <option value="Cedar Rapids, IA (CID)"></option>
                  <option value="Lincoln, NE (LNK)"></option>
                  <option value="Baton Rouge, LA (BTR)"></option>
                  <option value="Shreveport, LA (SHV)"></option>
                  <option value="Jackson, MS (JAN)"></option>
                  <option value="Gulfport, MS (GPT)"></option>
                  <option value="Montgomery, AL (MGM)"></option>
                  <option value="Roanoke, VA (ROA)"></option>
                  <option value="Akron–Canton, OH (CAK)"></option>
                  <option value="Toledo, OH (TOL)"></option>
                  <option value="South Bend, IN (SBN)"></option>
                  <option value="Allentown, PA (ABE)"></option>
                  <option value="New York, NY"></option>
                  <option value="Los Angeles, CA"></option>
                  <option value="Chicago, IL"></option>
                  <option value="Houston, TX"></option>
                  <option value="Phoenix, AZ"></option>
                  <option value="Philadelphia, PA"></option>
                  <option value="San Antonio, TX"></option>
                  <option value="San Diego, CA"></option>
                  <option value="Dallas, TX"></option>
                  <option value="San Jose, CA"></option>
                  <option value="Austin, TX"></option>
                  <option value="Jacksonville, FL"></option>
                  <option value="Fort Worth, TX"></option>
                  <option value="Columbus, OH"></option>
                  <option value="Charlotte, NC"></option>
                  <option value="Indianapolis, IN"></option>
                  <option value="San Francisco, CA"></option>
                  <option value="Seattle, WA"></option>
                  <option value="Denver, CO"></option>
                  <option value="Washington, DC"></option>
                  <option value="Boston, MA"></option>
                  <option value="El Paso, TX"></option>
                  <option value="Nashville, TN"></option>
                  <option value="Detroit, MI"></option>
                  <option value="Oklahoma City, OK"></option>
                  <option value="Portland, OR"></option>
                  <option value="Las Vegas, NV"></option>
                  <option value="Memphis, TN"></option>
                  <option value="Louisville, KY"></option>
                  <option value="Baltimore, MD"></option>
                  <option value="Milwaukee, WI"></option>
                  <option value="Albuquerque, NM"></option>
                  <option value="Tucson, AZ"></option>
                  <option value="Fresno, CA"></option>
                  <option value="Sacramento, CA"></option>
                  <option value="Kansas City, MO"></option>
                  <option value="Mesa, AZ"></option>
                  <option value="Atlanta, GA"></option>
                  <option value="Omaha, NE"></option>
                  <option value="Colorado Springs, CO"></option>
                  <option value="Raleigh, NC"></option>
                  <option value="Miami, FL"></option>
                  <option value="Long Beach, CA"></option>
                  <option value="Virginia Beach, VA"></option>
                  <option value="Oakland, CA"></option>
                  <option value="Minneapolis, MN"></option>
                  <option value="Tulsa, OK"></option>
                  <option value="Tampa, FL"></option>
                  <option value="Arlington, TX"></option>
                  <option value="New Orleans, LA"></option>
                  <option value="Wichita, KS"></option>
                  <option value="Cleveland, OH"></option>
                  <option value="Bakersfield, CA"></option>
                  <option value="Aurora, CO"></option>
                  <option value="Anaheim, CA"></option>
                  <option value="Honolulu, HI"></option>
                  <option value="Santa Ana, CA"></option>
                  <option value="Riverside, CA"></option>
                  <option value="Corpus Christi, TX"></option>
                  <option value="Lexington, KY"></option>
                  <option value="Henderson, NV"></option>
                  <option value="Stockton, CA"></option>
                  <option value="Saint Paul, MN"></option>
                  <option value="Cincinnati, OH"></option>
                  <option value="Pittsburgh, PA"></option>
                  <option value="Greensboro, NC"></option>
                  <option value="Anchorage, AK"></option>
                  <option value="Plano, TX"></option>
                  <option value="Orlando, FL"></option>
                  <option value="Irvine, CA"></option>
                  <option value="Newark, NJ"></option>
                  <option value="Durham, NC"></option>
                  <option value="Chula Vista, CA"></option>
                  <option value="Toledo, OH"></option>
                  <option value="Fort Wayne, IN"></option>
                  <option value="St. Petersburg, FL"></option>
                  <option value="Laredo, TX"></option>
                  <option value="Jersey City, NJ"></option>
                  <option value="Chandler, AZ"></option>
                  <option value="Madison, WI"></option>
                  <option value="Lubbock, TX"></option>
                  <option value="Buffalo, NY"></option>
                  <option value="Reno, NV"></option>
                  <option value="Boise, ID"></option>
                  <option value="Salt Lake City, UT"></option>
                  <option value="Charleston, SC"></option>
                  <option value="Savannah, GA"></option>
                  <option value="Asheville, AL"></option>
                  <option value="Scottsdale, AZ"></option>
                  <option value="Chattanooga, TN"></option>
                  <option value="Alabama"></option>
                  <option value="Alaska"></option>
                  <option value="Arizona"></option>
                  <option value="Arkansas"></option>
                  <option value="California"></option>
                  <option value="Colorado"></option>
                  <option value="Connecticut"></option>
                  <option value="Delaware"></option>
                  <option value="Florida"></option>
                  <option value="Georgia"></option>
                  <option value="Hawaii"></option>
                  <option value="Idaho"></option>
                  <option value="Illinois"></option>
                  <option value="Indiana"></option>
                  <option value="Iowa"></option>
                  <option value="Kansas"></option>
                  <option value="Kentucky"></option>
                  <option value="Louisiana"></option>
                  <option value="Maine"></option>
                  <option value="Maryland"></option>
                  <option value="Massachusetts"></option>
                  <option value="Michigan"></option>
                  <option value="Minnesota"></option>
                  <option value="Mississippi"></option>
                  <option value="Missouri"></option>
                  <option value="Montana"></option>
                  <option value="Nebraska"></option>
                  <option value="Nevada"></option>
                  <option value="New Hampshire"></option>
                  <option value="New Jersey"></option>
                  <option value="New Mexico"></option>
                  <option value="New York"></option>
                  <option value="North Carolina"></option>
                  <option value="North Dakota"></option>
                  <option value="Ohio"></option>
                  <option value="Oklahoma"></option>
                  <option value="Oregon"></option>
                  <option value="Pennsylvania"></option>
                  <option value="Rhode Island"></option>
                  <option value="South Carolina"></option>
                  <option value="South Dakota"></option>
                  <option value="Tennessee"></option>
                  <option value="Texas"></option>
                  <option value="Utah"></option>
                  <option value="Vermont"></option>
                  <option value="Virginia"></option>
                  <option value="Washington"></option>
                  <option value="West Virginia"></option>
                  <option value="Wisconsin"></option>
                  <option value="Wyoming"></option>
                  <option value="Washington, D.C."></option>
                  <option value="Los Angeles County, CA"></option>
                  <option value="Cook County, IL"></option>
                  <option value="Harris County, TX"></option>
                  <option value="Maricopa County, AZ"></option>
                  <option value="San Diego County, CA"></option>
                  <option value="Orange County, CA"></option>
                  <option value="Miami-Dade County, FL"></option>
                  <option value="Dallas County, TX"></option>
                  <option value="Kings County, NY"></option>
                  <option value="Riverside County, CA"></option>
                  <option value="Clark County, NV"></option>
                  <option value="King County, WA"></option>
                  <option value="Tarrant County, TX"></option>
                  <option value="Santa Clara County, CA"></option>
                  <option value="Broward County, FL"></option>
                  <option value="Bexar County, TX"></option>
                  <option value="Wayne County, MI"></option>
                  <option value="Alameda County, CA"></option>
                  <option value="Middlesex County, MA"></option>
                  <option value="Sacramento County, CA"></option>
                  <option value="Palm Beach County, FL"></option>
                  <option value="Travis County, TX"></option>
                  <option value="Fulton County, GA"></option>
                  <option value="Hennepin County, MN"></option>
                  <option value="10001 — New York, NY"></option>
                  <option value="90012 — Los Angeles, CA"></option>
                  <option value="90045 — Los Angeles LAX area, CA"></option>
                  <option value="60601 — Chicago, IL"></option>
                  <option value="77002 — Houston, TX"></option>
                  <option value="85003 — Phoenix, AZ"></option>
                  <option value="19107 — Philadelphia, PA"></option>
                  <option value="78205 — San Antonio, TX"></option>
                  <option value="92101 — San Diego, CA"></option>
                  <option value="75201 — Dallas, TX"></option>
                  <option value="95113 — San Jose, CA"></option>
                  <option value="78701 — Austin, TX"></option>
                  <option value="32202 — Jacksonville, FL"></option>
                  <option value="43215 — Columbus, OH"></option>
                  <option value="28202 — Charlotte, NC"></option>
                  <option value="46204 — Indianapolis, IN"></option>
                  <option value="94103 — San Francisco, CA"></option>
                  <option value="98101 — Seattle, WA"></option>
                  <option value="80202 — Denver, CO"></option>
                  <option value="20001 — Washington, DC"></option>
                  <option value="02108 — Boston, MA"></option>
                  <option value="37203 — Nashville, TN"></option>
                  <option value="48226 — Detroit, MI"></option>
                  <option value="73102 — Oklahoma City, OK"></option>
                  <option value="97205 — Portland, OR"></option>
                  <option value="89101 — Las Vegas, NV"></option>
                  <option value="38103 — Memphis, TN"></option>
                  <option value="40202 — Louisville, KY"></option>
                  <option value="21201 — Baltimore, MD"></option>
                  <option value="53202 — Milwaukee, WI"></option>
                  <option value="87102 — Albuquerque, NM"></option>
                  <option value="85701 — Tucson, AZ"></option>
                  <option value="93721 — Fresno, CA"></option>
                  <option value="95814 — Sacramento, CA"></option>
                  <option value="64106 — Kansas City, MO"></option>
                  <option value="30303 — Atlanta, GA"></option>
                  <option value="68102 — Omaha, NE"></option>
                  <option value="80903 — Colorado Springs, CO"></option>
                  <option value="27601 — Raleigh, NC"></option>
                  <option value="33130 — Miami, FL"></option>
                  <option value="90802 — Long Beach, CA"></option>
                  <option value="23451 — Virginia Beach, VA"></option>
                  <option value="94607 — Oakland, CA"></option>
                  <option value="55401 — Minneapolis, MN"></option>
                  <option value="74103 — Tulsa, OK"></option>
                  <option value="33602 — Tampa, FL"></option>
                  <option value="70112 — New Orleans, LA"></option>
                  <option value="67202 — Wichita, KS"></option>
                  <option value="44113 — Cleveland, OH"></option>
                  <option value="93301 — Bakersfield, CA"></option>
                  <option value="92805 — Anaheim, CA"></option>
                  <option value="96813 — Honolulu, HI"></option>
                  <option value="92701 — Santa Ana, CA"></option>
                  <option value="92501 — Riverside, CA"></option>
                  <option value="45202 — Cincinnati, OH"></option>
                  <option value="15222 — Pittsburgh, PA"></option>
                  <option value="27401 — Greensboro, NC"></option>
                  <option value="99501 — Anchorage, AK"></option>
                  <option value="32801 — Orlando, FL"></option>
                  <option value="07102 — Newark, NJ"></option>
                  <option value="27701 — Durham, NC"></option>
                  <option value="63101 — St. Louis, MO"></option>
                  <option value="14202 — Buffalo, NY"></option>
                  <option value="89501 — Reno, NV"></option>
                  <option value="83702 — Boise, ID"></option>
                  <option value="84101 — Salt Lake City, UT"></option>
                  <option value="29401 — Charleston, SC"></option>
                  <option value="31401 — Savannah, GA"></option>
                  <option value="23219 — Richmond, VA"></option>
                  <option value="02903 — Providence, RI"></option>
                  <option value="06103 — Hartford, CT"></option>
                  <option value="33301 — Fort Lauderdale, FL"></option>
                  <option value="33401 — West Palm Beach, FL"></option>
                  <option value="32207 — Jacksonville, FL"></option>
                  <option value="70808 — Baton Rouge, LA"></option>
                  <option value="36104 — Montgomery, AL"></option>
                  <option value="35203 — Birmingham, AL"></option>
                  <option value="37902 — Knoxville, TN"></option>
                  <option value="49503 — Grand Rapids, MI"></option>
                  <option value="53703 — Madison, WI"></option>
                  <option value="50309 — Des Moines, IA"></option>
                  <option value="68508 — Lincoln, NE"></option>
                </datalist>
              </form>
            </div>
            <div className="chips">
              <span className="chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5 10 17.5 19 6.5"></path>
                </svg>
                Card rule confirmed
              </span>
              <span className="chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5 10 17.5 19 6.5"></path>
                </svg>
                Deposit hold checked
              </span>
              <span className="chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5 10 17.5 19 6.5"></path>
                </svg>
                Under-25 fee
              </span>
              <span className="chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5 10 17.5 19 6.5"></path>
                </svg>
                Documents to bring
              </span>
            </div>
          </div>
          <div>
            <div className="media" data-label="MIA — airport / rental centre photo"><img src="https://images.unsplash.com/photo-1596226004757-09d33a19ea5d?auto=format&fit=crop&w=1200&q=70" alt="MIA — RentalForCar" loading="lazy" width="1200" height="750" /></div>
            <div className="counter">
              <h3>
                What we check before you book
              </h3>
              <div className="ck">
                <span className="tick">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12.5 10 17.5 19 6.5"></path>
                  </svg>
                </span>
                <div>
                  <b>
                    The card rule
                  </b>
                  <span>
                    Credit or debit? Whose name? We confirm what your counter takes.
                  </span>
                </div>
              </div>
              <div className="ck">
                <span className="tick">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12.5 10 17.5 19 6.5"></path>
                  </svg>
                </span>
                <div>
                  <b>
                    The deposit hold
                  </b>
                  <span>
                    How much they freeze at pick-up, and when it comes back.
                  </span>
                </div>
              </div>
              <div className="ck">
                <span className="tick">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12.5 10 17.5 19 6.5"></path>
                  </svg>
                </span>
                <div>
                  <b>
                    The age policy
                  </b>
                  <span>
                    Under-25 fees and which classes are off-limits at that branch.
                  </span>
                </div>
              </div>
              <div className="ck">
                <span className="tick">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12.5 10 17.5 19 6.5"></path>
                  </svg>
                </span>
                <div>
                  <b>
                    The documents
                  </b>
                  <span>
                    Second ID, proof of return travel, address — before you fly.
                  </span>
                </div>
              </div>
              <p className="note">
                Because the headline rate isn’t what strands people at the desk — the fine print is.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
