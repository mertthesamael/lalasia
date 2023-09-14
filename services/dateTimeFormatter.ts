export const formatDateToSQLDateTime = (date: Date) : string => {
    // Get the ISO string of the Date object
    const isoString = date.toISOString();
  
    // Extract the date and time components
    const datePart = isoString.slice(0, 10);
    const timePart = isoString.slice(11, 19);
  
    // Combine them in the SQL datetime format
    const sqlDateTime = `${datePart} ${timePart}`;
  
    return sqlDateTime;
}