import './BandTight2.css';
export default function BandTight2() {
  return (
    <section className="band-tight">
       <div className="wrap">
         <div className="prose">
           <h2 className="h-2" id="at-a-glance-sea-airport">
            SEA at a glance
          </h2>
           <table className="fact-table">
             <caption className="sr-only">
              Renting a car at Seattle-Tacoma International Airport
            </caption>
             <tbody>
               <tr>
                <th scope="row">
                  Rental facility
                </th>
                <td>
                  Consolidated Rental Car Facility, all brands together
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Getting there
                </th>
                <td>
                  Free shuttle from the terminal, running 24 hours
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Terminals served
                </th>
                <td>
                  Single terminal, all concourses served by one shuttle route
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Toll system
                </th>
                <td>
                  Good To Go!. The SR 520 bridge and the SR 99 tunnel are all-electronic
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Drive into town
                </th>
                <td>
                  Downtown Seattle 25–40 minutes on I-5, longer at peak
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
              Mount Rainier, the Olympic Peninsula and the North Cascades are all car trips and all worth the drive
            </li>
             <li>
              Link light rail reaches downtown from the airport, so a car is really about leaving the city
            </li>
             <li>
              Ferries take vehicles to the islands and the peninsula, which opens up trips no train reaches
            </li>
           </ul>
         </div>
       </div>
     </section>
  );
}
