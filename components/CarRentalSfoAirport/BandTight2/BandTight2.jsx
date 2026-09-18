import './BandTight2.css';
export default function BandTight2() {
  return (
    <section className="band-tight">
       <div className="wrap">
         <div className="prose">
           <h2 className="h-2" id="at-a-glance-sfo-airport">
            SFO at a glance
          </h2>
           <table className="fact-table">
             <caption className="sr-only">
              Renting a car at San Francisco International Airport
            </caption>
             <tbody>
               <tr>
                <th scope="row">
                  Rental facility
                </th>
                <td>
                  Rental Car Center, all brands on one site
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Getting there
                </th>
                <td>
                  AirTrain Blue line from every terminal — free, runs around the clock
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Terminals served
                </th>
                <td>
                  1, 2, 3 and International, all on the AirTrain loop
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Toll system
                </th>
                <td>
                  FasTrak. Every Bay Area bridge is cashless, including the Golden Gate
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Drive into town
                </th>
                <td>
                  Downtown San Francisco 20–35 minutes on US-101; Silicon Valley 30–40 south
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
              Wine country, Big Sur, Yosemite and the coast all start with a car
            </li>
             <li>
              In the city itself parking is expensive and hills are real; many visitors rent for the days they leave town
            </li>
             <li>
              Caltrain and BART cover the corridor well, so a car is about the trips beyond it
            </li>
           </ul>
         </div>
       </div>
     </section>
  );
}
