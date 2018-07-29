export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const DATA_FIND = 'DATA_FIND';

//Import the sample data
const Datastore = require('react-native-local-mongodb')
const db = new Datastore({ filename: 'asyncStorageKey' });

export function dbLoad() {

    return (dispatch) => {

        //Make API Call
        //For this example, I will be using the sample data in the json file
        //delay the retrieval [Sample reasons only]
        // setTimeout(() => {
        //     const data = Data.instructions;
        //     dispatch({ type: DATA_AVAILABLE, data: data });
        // }, 2000);
        db.loadDatabase(function (error) {    // Callback is optional
            dispatch({ type: DATA_AVAILABLE, error: error });
            console.log('db loaded....')
        });

    };
}

export function insert(param) {

    return (dispatch) => {
        //[{ a: 5 }, { a: 42 }]
        db.insert(param, function (error, newDocs) {
            dispatch(find({}));
        });
    };
}

export function find(param) {

    return (dispatch) => {
        db.find(param, function (error, docs) {
            dispatch({ type: DATA_FIND, error: error, docs: docs });
        });
    };
}

export function remove(param) {

    return (dispatch) => {
        db.remove(param, {multi: true}, function (err, numRemoved) {
            console.log('numRemoved',numRemoved,err)
            dispatch(find({})); 
        });
    };
}