import './dash-main.css'

import { generateClient } from 'aws-amplify/api';
// import { createMed } from '../../graphql/mutations';
import { listMeds } from '../../graphql/queries';
import { useEffect, useState } from 'react';

const client = generateClient();

function DashMain() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        // used for create initial dummy user meds, comment out when running
        /* async function createMedItem() {
            const medDetails = {
                hugID: "4636565386BSJ-02",
                userID: "4636565386BSJ",
                medname: "Gabapentin"
            };
            await client.graphql({
                query: createMed,
                variables: { input: medDetails }
            });
        } */

        async function listMedItems() {
            const meds = await client.graphql({ query: listMeds });
            console.log(30, meds.data.listMeds.items);
            setItems(meds.data.listMeds.items)
        }

        // createMedItem();
        listMedItems();
    }, []);

    return (
        <>
            <div id="medications-container">
                <div id='medications-header'>
                    <h1>Medications</h1>
                    <button>+ Add Medication</button>
                </div>
                <ul id="medications-list">
                    {items.map((item, index) => (
                        <li key={index}>
                            {item.medname}
                        </li>
                    ))}
                </ul>
            </div>

            <div id='daily-record-container'>

            </div>

        </>
    )
}

export default DashMain