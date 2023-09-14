export const formatDateToSQLDateTime = (date: Date) : string => {
    // Get the ISO string of the Date object
    const dateString = date.toString();
  
    // Extract the date and time components
    const datePart = dateString.slice(0, 10);
    const timePart = dateString.slice(11, 16);
  
    // Combine them in the SQL datetime format
    const sqlDateTime = `${datePart} ${timePart}`;
  
    return sqlDateTime;
}