export const DATA_AVAILABLE = 'DATA_AVAILABLE';

//Import the sample data
import Data from '../instructions.json';
const Datastore = require('react-native-local-mongodb')
const db = new Datastore({ filename: 'asyncStorageKey' });

export function getData() {
    
    return (dispatch) => {

        //Make API Call
        //For this example, I will be using the sample data in the json file
        //delay the retrieval [Sample reasons only]
        // setTimeout(() => {
        //     const data = Data.instructions;
        //     dispatch({ type: DATA_AVAILABLE, data: data });
        // }, 2000);
        db.loadDatabase(function (err) {    // Callback is optional
            dispatch({ type: DATA_AVAILABLE, db: db, data: [] });
            console.log('db loaded....')
        });

    };
}
