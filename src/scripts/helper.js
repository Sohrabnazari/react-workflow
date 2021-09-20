import path from 'path';

let helper = {

    array_chunk: (array, chunkSize) => {

        var results = [];
        
        while (array.length) {
            results.push(array.splice(0, chunkSize));
        }
        
        return results;
    }
}

export default helper;
