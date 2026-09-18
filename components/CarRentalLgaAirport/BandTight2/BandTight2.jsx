import './BandTight2.css';
export default function BandTight2() {
  return (
    <section className="band-tight">
       <div className="wrap">
         <div className="prose">
           <h2 className="h-2" id="at-a-glance-lga-airport">
            LGA at a glance
          </h2>
           <table className="fact-table">
             <caption className="sr-only">
              Renting a car at LaGuardia Airport
            </caption>
             <tbody>
               <tr>
                <th scope="row">
                  Rental facility
                </th>
                <td>
                  Off-airport rental locations
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Getting there
                </th>
                <td>
                  Company shuttles from the terminal ground transportation level; the branch is a short drive away, not on airport property
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Terminals served
                </th>
                <td>
                  A, B and C, each with its own ground transportation level
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Toll system
                </th>
                <td>
                  E-ZPass. Every crossing into Manhattan is cashless, and Manhattan below 60th Street adds a congestion charge
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Drive into town
                </th>
                <td>
                  Midtown is 20–45 minutes depending entirely on the hour
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
              Only worth it if you are leaving the city — the Hudson Valley, the Catskills, Long Island beaches or New England
            </li>
             <li>
              Collecting at LGA on the way out of town beats paying Manhattan garage rates for days you are not driving
            </li>
             <li>
              JFK has an on-airport rental centre and more inventory; if you can land there instead, collection is simpler
            </li>
           </ul>
         </div>
       </div>
     </section>
  );
}
