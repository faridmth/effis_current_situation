// dateUtils.js

// Function to get today's date in the format YYYY-MM-DD
export const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  
  // Function to get yesterday's date in the format YYYY-MM-DD
  export const getYesterdayDate = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const year = yesterday.getFullYear();
    const month = String(yesterday.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(yesterday.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  export const formatDateRange = (startDate, endDate) => {
    const formatDate = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };
    
    return `${formatDate(startDate)}/${formatDate(endDate)}`;
  };
   export const apiKeys = ()=>{
    const apiKeys = [
        'c158c9d02cda4ff1aeae2ad6635dfc9f',
        'b97f40e34f2341ed909a89e7fadf0add',
        'd3c77f64d0504351b6650326d33b7af2',
        'e2a336b21b76476a8fb73b1e1110cde0',
        'd3c77f64d0504351b6650326d33b7af2'
    ];
    
    const randomIndex = Math.floor(Math.random() * apiKeys.length);
    return apiKeys[randomIndex];
}