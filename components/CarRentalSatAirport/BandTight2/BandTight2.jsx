import './BandTight2.css';
export default function BandTight2() {
  return (
    <section className="band-tight">
       <div className="wrap">
         <div className="prose">
           <h2 className="h-2" id="at-a-glance-sat-airport">
            SAT at a glance
          </h2>
           <table className="fact-table">
             <caption className="sr-only">
              Renting a car at San Antonio International Airport
            </caption>
             <tbody>
               <tr>
                <th scope="row">
                  Rental facility
                </th>
                <td>
                  Consolidated rental facility adjacent to the terminals
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Getting there
                </th>
                <td>
                  A short walk or a brief shuttle depending on terminal and company
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Terminals served
                </th>
                <td>
                  A and B, next to each other
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Toll system
                </th>
                <td>
                  Essentially none. San Antonio has no significant toll roads
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Drive into town
                </th>
                <td>
                  Downtown and the River Walk 15–20 minutes
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
              The Hill Country, Fredericksburg and the missions all need a car
            </li>
             <li>
              Austin is 80 minutes up I-35 and a common pairing
            </li>
             <li>
              No toll network to speak of, so none of the transponder decisions you face in Dallas or Houston
            </li>
           </ul>
         </div>
       </div>
     </section>
  );
}
