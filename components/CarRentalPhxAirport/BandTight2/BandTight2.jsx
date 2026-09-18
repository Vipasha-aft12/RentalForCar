import './BandTight2.css';
export default function BandTight2() {
  return (
    <section className="band-tight">
       <div className="wrap">
         <div className="prose">
           <h2 className="h-2" id="at-a-glance-phx-airport">
            PHX at a glance
          </h2>
           <table className="fact-table">
             <caption className="sr-only">
              Renting a car at Phoenix Sky Harbor International Airport
            </caption>
             <tbody>
               <tr>
                <th scope="row">
                  Rental facility
                </th>
                <td>
                  Rental Car Center, all brands under one roof
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Getting there
                </th>
                <td>
                  PHX Sky Train from every terminal — free, frequent, no road traffic involved
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Terminals served
                </th>
                <td>
                  3 and 4, both on the Sky Train line
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Toll system
                </th>
                <td>
                  Effectively none. Arizona has no toll roads to speak of
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Drive into town
                </th>
                <td>
                  Downtown Phoenix 15 minutes; Scottsdale 20–25; Tempe 10
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Minimum driver age
                </th>
                <td>
                  Usually 21, with a young-driver surcharge under 25
                </td>
              </tr>
             </tbody>
           </table>
           <p className="muted" style={{fontSize: '.88rem'}}>
            Facility arrangements and shuttle frequencies change. Check the signage on the day and confirm anything critical with the rental company before you travel.
          </p>
           <h2 className="h-2">
            Why visitors rent here
          </h2>
           <ul>
             <li>
              The Grand Canyon, Sedona and Flagstaff are all day trips and all require a car
            </li>
             <li>
              The Valley sprawls across Phoenix, Scottsdale, Mesa and Tempe with limited transit between them
            </li>
             <li>
              Arizona has essentially no toll roads, so a rental here carries none of the toll-programme cost of Texas or Florida
            </li>
           </ul>
         </div>
       </div>
     </section>
  );
}
