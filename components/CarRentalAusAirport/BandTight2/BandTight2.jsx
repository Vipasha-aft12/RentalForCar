import './BandTight2.css';
export default function BandTight2() {
  return (
    <section className="band-tight">
       <div className="wrap">
         <div className="prose">
           <h2 className="h-2" id="at-a-glance-aus-airport">
            AUS at a glance
          </h2>
           <table className="fact-table">
             <caption className="sr-only">
              Renting a car at Austin-Bergstrom International Airport
            </caption>
             <tbody>
               <tr>
                <th scope="row">
                  Rental facility
                </th>
                <td>
                  Rental car facility a short distance from the terminal
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Getting there
                </th>
                <td>
                  Free shuttle from the terminal ground transportation area
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Terminals served
                </th>
                <td>
                  Barbara Jordan Terminal (and the South Terminal for some carriers)
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Toll system
                </th>
                <td>
                  TxTag. The 183A, 290 toll and SH 45 sections are electronic
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Drive into town
                </th>
                <td>
                  Downtown Austin 15–25 minutes, longer during events
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
              The Hill Country, Fredericksburg wineries and the swimming holes are all drives
            </li>
             <li>
              Austin transit is limited for a city its size; distances between districts are real
            </li>
             <li>
              San Antonio is 80 minutes down I-35 and easy to add on
            </li>
           </ul>
         </div>
       </div>
     </section>
  );
}
