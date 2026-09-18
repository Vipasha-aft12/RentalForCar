import './BandTight2.css';
export default function BandTight2() {
  return (
    <section className="band-tight">
       <div className="wrap">
         <div className="prose">
           <h2 className="h-2" id="at-a-glance-dfw-airport">
            DFW at a glance
          </h2>
           <table className="fact-table">
             <caption className="sr-only">
              Renting a car at Dallas/Fort Worth International Airport
            </caption>
             <tbody>
               <tr>
                <th scope="row">
                  Rental facility
                </th>
                <td>
                  Consolidated Rental Car Center, all brands in one building
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Getting there
                </th>
                <td>
                  Free shuttle from the lower level of every terminal, every ten minutes or so, around the clock
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Terminals served
                </th>
                <td>
                  A, B, C, D and E — one shuttle route serves them all
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Toll system
                </th>
                <td>
                  TollTag (NTTA). Most Dallas-area toll roads are all-electronic with no cash lanes
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Drive into town
                </th>
                <td>
                  Downtown Dallas 25–35 minutes; downtown Fort Worth about the same in the other direction
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
              DFW sits between two city centres; without a car you are committed to one of them
            </li>
             <li>
              Everything worth driving to in North Texas is a highway trip — Fort Worth Stockyards, Waco, Austin
            </li>
             <li>
              Public transport between Dallas and Fort Worth exists but is slow enough that most visitors drive
            </li>
           </ul>
         </div>
       </div>
     </section>
  );
}
