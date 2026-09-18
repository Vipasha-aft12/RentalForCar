import './BandTight2.css';
export default function BandTight2() {
  return (
    <section className="band-tight">
       <div className="wrap">
         <div className="prose">
           <h2 className="h-2" id="at-a-glance-atl-airport">
            ATL at a glance
          </h2>
           <table className="fact-table">
             <caption className="sr-only">
              Renting a car at Hartsfield-Jackson Atlanta International Airport
            </caption>
             <tbody>
               <tr>
                <th scope="row">
                  Rental facility
                </th>
                <td>
                  Rental Car Center, all brands in one building
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Getting there
                </th>
                <td>
                  ATL SkyTrain from the Domestic Terminal — free, a few minutes end to end
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Terminals served
                </th>
                <td>
                  Domestic (North and South) and International (Maynard H. Jackson Jr.)
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Toll system
                </th>
                <td>
                  Peach Pass, and only for the optional express lanes on I-85 and I-75
                </td>
              </tr>
               <tr>
                <th scope="row">
                  Drive into town
                </th>
                <td>
                  Downtown Atlanta 15–25 minutes off-peak, considerably more in rush hour
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
              Atlanta sprawls and MARTA covers only part of it; most neighbourhoods need a car
            </li>
             <li>
              The North Georgia mountains, Savannah and Chattanooga are all drives worth making
            </li>
             <li>
              The express lanes are optional, so a toll device is a convenience here rather than a necessity
            </li>
           </ul>
         </div>
       </div>
     </section>
  );
}
