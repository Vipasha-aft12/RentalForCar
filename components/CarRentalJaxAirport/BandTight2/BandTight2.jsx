import './BandTight2.css';
export default function BandTight2() {
  return (
    <section className="band-tight">
       <div className="wrap">
         <div className="prose">
           <h2 className="h-2" id="at-a-glance-jax-airport">
            JAX at a glance
          </h2>
           <table className="fact-table">
             <caption className="sr-only">
              Renting a car at Jacksonville International Airport
            </caption>
             <tbody>
               <tr>
                <th scope="row">
                  Rental facility
                </th>
                <td>
                  Ground floor of the parking garage, directly opposite the terminal
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Getting there
                </th>
                <td>
                  A short covered walk from baggage claim — no shuttle involved
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Terminals served
                </th>
                <td>
                  Single terminal, concourses A and C
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Toll system
                </th>
                <td>
                  SunPass. Jacksonville itself has few tolls; you meet them heading south
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Drive into town
                </th>
                <td>
                  Downtown Jacksonville 15–20 minutes; the beaches 35–45 minutes
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
              The beaches — Jacksonville Beach, Ponte Vedra, Amelia Island — are all a drive and poorly served otherwise
            </li>
             <li>
              St Augustine is under an hour and worth a day
            </li>
             <li>
              Jacksonville is geographically the largest city in the lower 48 states; nothing is walkable to anything else
            </li>
           </ul>
         </div>
       </div>
     </section>
  );
}
