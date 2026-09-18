import './BandTight2.css';
export default function BandTight2() {
  return (
    <section className="band-tight">
       <div className="wrap">
         <div className="prose">
           <h2 className="h-2" id="at-a-glance-iah-airport">
            IAH at a glance
          </h2>
           <table className="fact-table">
             <caption className="sr-only">
              Renting a car at George Bush Intercontinental Airport
            </caption>
             <tbody>
               <tr>
                <th scope="row">
                  Rental facility
                </th>
                <td>
                  Consolidated Rental Car Facility
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Getting there
                </th>
                <td>
                  Free shuttle from the ground transportation area at every terminal
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Terminals served
                </th>
                <td>
                  A, B, C, D and E
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Toll system
                </th>
                <td>
                  EZ TAG (Harris County). The Sam Houston and Hardy tollways are electronic
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Drive into town
                </th>
                <td>
                  Downtown Houston 30–45 minutes on I-45 or the Hardy Toll Road
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
              Houston is spread over an enormous area with limited rail; distances between neighbourhoods are real
            </li>
             <li>
              Galveston, NASA Johnson Space Center and the Hill Country are all car trips
            </li>
             <li>
              Summer heat makes walking between destinations unrealistic from June to September
            </li>
           </ul>
         </div>
       </div>
     </section>
  );
}
