function fetchDataWithCallback(callback) {
    setTimeout(() => {
        let error =false;
        try {
            if (error) {
                throw new Error('Fetch Error');
            }else {
                callback('Data Fetched');
            } 
        } catch (error) {
            console.error('Error:', error.message)
        }
    }, 2000);
};

fetchDataWithCallback((result) => {
    console.log(result);
})