import './BandTight2.css';
export default function BandTight2() {
  return (
    <section className="band-tight">
       <div className="wrap">
         <div className="prose">
           <h2 className="h-2" id="at-a-glance-ord-airport">
            ORD at a glance
          </h2>
           <table className="fact-table">
             <caption className="sr-only">
              Renting a car at Chicago O'Hare International Airport
            </caption>
             <tbody>
               <tr>
                <th scope="row">
                  Rental facility
                </th>
                <td>
                  Multi-Modal Facility (MMF), all brands in one building
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Getting there
                </th>
                <td>
                  Airport Transit System train from every terminal — free, runs continuously
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Terminals served
                </th>
                <td>
                  1, 2, 3 and 5, all on the ATS line
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Toll system
                </th>
                <td>
                  I-PASS. Illinois tollways have been entirely cashless since 2020
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Drive into town
                </th>
                <td>
                  The Loop 30–50 minutes on I-90, considerably more at peak
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
              Illinois, Wisconsin and Michigan road trips all start here — Milwaukee, Madison, the lakeshore
            </li>
             <li>
              The CTA Blue Line runs from the airport into the Loop, so a car is for leaving the city
            </li>
             <li>
              Winter driving is a genuine consideration from December to March; ask what the vehicle has on it
            </li>
           </ul>
         </div>
       </div>
     </section>
  );
}
