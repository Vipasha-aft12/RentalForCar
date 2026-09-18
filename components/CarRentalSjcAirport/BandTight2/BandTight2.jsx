import './BandTight2.css';
export default function BandTight2() {
  return (
    <section className="band-tight">
       <div className="wrap">
         <div className="prose">
           <h2 className="h-2" id="at-a-glance-sjc-airport">
            SJC at a glance
          </h2>
           <table className="fact-table">
             <caption className="sr-only">
              Renting a car at San Jose Mineta International Airport
            </caption>
             <tbody>
               <tr>
                <th scope="row">
                  Rental facility
                </th>
                <td>
                  Rental car garage close to the terminals
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Getting there
                </th>
                <td>
                  A short walk or brief shuttle depending on the company
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Terminals served
                </th>
                <td>
                  A and B
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Toll system
                </th>
                <td>
                  FasTrak. Bay Area bridges are cashless; the valley itself has few tolls
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Drive into town
                </th>
                <td>
                  Downtown San Jose 10 minutes; Palo Alto 25–35; San Francisco 50–70
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
              Silicon Valley is spread across a dozen towns with limited transit between them
            </li>
             <li>
              Santa Cruz, Monterey, Carmel and Big Sur run south from here on Highway 1
            </li>
             <li>
              Quicker in and out than SFO, which matters on a short business trip
            </li>
           </ul>
         </div>
       </div>
     </section>
  );
}
