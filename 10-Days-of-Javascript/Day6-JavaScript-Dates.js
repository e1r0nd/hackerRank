/**
 * Day 6: JavaScript Dates
 * https://www.hackerrank.com/challenges/js10-date
 */
// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here
    const dayTitle = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    dayName = new Date(dateString).getDay();
    
    return dayTitle[dayName];
}
