import React from 'react';
import {Tabs , Tab} from 'react-bootstrap' 
import CryptoTable from '../sections/CryptoTable';
import CryptoCards from '../sections/CryptoCards';
import CryptoChart from '../sections/CryptoChart';
import CryptoTracking from '../sections/CryptoTracking';

function Crypto(props) {

    return (
        <div>
          <div className="bg-dash-dark-2 py-4">
                <div className="container-fluid">
                <h2 className="h5 mb-0">Crypto</h2>
            </div>
         </div>
         <Tabs
                    defaultActiveKey="performence"
                    transition={false}
                    id="noanim-tab-example"
                    >
                          <Tab eventKey="performence" title="Performence">
                                 <CryptoCards/>
                                 <CryptoTable/>
                           
                            </Tab>
                            <Tab eventKey="recent" title="Recent Top">
                                <CryptoTracking/>
                            </Tab>
                            <Tab eventKey="chart" title="Chart">
                                <CryptoChart/>
                            </Tab>

                </Tabs>

        
        </div>
    );
}

export default Crypto;