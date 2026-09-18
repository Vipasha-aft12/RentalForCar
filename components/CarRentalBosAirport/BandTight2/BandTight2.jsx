import './BandTight2.css';
export default function BandTight2() {
  return (
    <section className="band-tight">
       <div className="wrap">
         <div className="prose">
           <h2 className="h-2" id="at-a-glance-bos-airport">
            BOS at a glance
          </h2>
           <table className="fact-table">
             <caption className="sr-only">
              Renting a car at Boston Logan International Airport
            </caption>
             <tbody>
               <tr>
                <th scope="row">
                  Rental facility
                </th>
                <td>
                  Consolidated Rental Car Center
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Getting there
                </th>
                <td>
                  Free shuttle from every terminal to the rental centre
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Terminals served
                </th>
                <td>
                  A, B, C and E
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Toll system
                </th>
                <td>
                  E-ZPass. Massachusetts tolls and the harbour tunnels are all-electronic
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Drive into town
                </th>
                <td>
                  Downtown Boston 15–30 minutes through the tunnels, unpredictable at peak
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
              Cape Cod, Maine, the White Mountains and the Berkshires are all car country
            </li>
             <li>
              The T covers Boston and Cambridge well, so a car is for the region rather than the city
            </li>
             <li>
              Autumn foliage drives through New England are the single best reason to rent here
            </li>
           </ul>
         </div>
       </div>
     </section>
  );
}
