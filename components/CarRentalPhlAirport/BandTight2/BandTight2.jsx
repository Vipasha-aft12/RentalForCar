import './BandTight2.css';
export default function BandTight2() {
  return (
    <section className="band-tight">
       <div className="wrap">
         <div className="prose">
           <h2 className="h-2" id="at-a-glance-phl-airport">
            PHL at a glance
          </h2>
           <table className="fact-table">
             <caption className="sr-only">
              Renting a car at Philadelphia International Airport
            </caption>
             <tbody>
               <tr>
                <th scope="row">
                  Rental facility
                </th>
                <td>
                  Off-terminal rental car facility
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Getting there
                </th>
                <td>
                  Free shuttle from the Commercial Transportation area outside baggage claim, running continuously
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Terminals served
                </th>
                <td>
                  A-West, A-East, B, C, D, E and F — all served by the same shuttle loop
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Toll system
                </th>
                <td>
                  E-ZPass. The Pennsylvania Turnpike and every New Jersey crossing are electronic
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Drive into town
                </th>
                <td>
                  Center City is 20–30 minutes on I-95 outside rush hour
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
              Center City hotels charge heavily for overnight parking — check before you commit to a car for the whole stay
            </li>
             <li>
              The Brandywine Valley, Valley Forge and Lancaster County are all inside 90 minutes and awkward without a car
            </li>
             <li>
              I-95 through the city is genuinely slow at peak; leaving at 10am instead of 8am can save half an hour
            </li>
           </ul>
         </div>
       </div>
     </section>
  );
}
