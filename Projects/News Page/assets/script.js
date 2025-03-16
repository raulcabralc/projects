const dateMenu = () => {
    const date = new Date();
    let day = date.getDate();
    let weekDay = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();


    // Week Days
    if (weekDay === 0) {
        weekDay = 'Sunday';
    } if (weekDay === 1) {
        weekDay = 'Monday';
    } if (weekDay === 2) {
        weekDay = 'Tuesday';
    } if (weekDay === 3) {
        weekDay = 'Wednesday';
    } if (weekDay === 4) {
        weekDay = 'Thursday';
    } if (weekDay === 5) {
        weekDay = 'Friday';
    } if (weekDay === 6) {
        weekDay = 'Saturday';
    }

    // Months
    if (month === 0) {
        month = 'January';
    } if (month === 1) {
        month = 'February';
    } if (month === 2) {
        month = 'March';
    } if (month === 3) {
        month = 'April';
    } if (month === 4) {
        month = 'May';
    } if (month === 5) {
        month = 'June';
    } if (month === 6) {
        month = 'July';
    } if (month === 7) {
        month = 'August';
    } if (month === 8) {
        month = 'September';
    } if (month === 9) {
        month = 'October';
    } if (month === 10) {
        month = 'November';
    } if (month === 11) {
        month = 'December';
    }

    return {
        weekDay,
        day,
        month,
        year
    }
}

console.log(dateMenu().weekDay);
console.log(dateMenu().month);
console.log(dateMenu().day);
console.log(dateMenu().year);

const dateHtml = document.querySelector('.date');
let dateText = `${dateMenu().weekDay}, ${dateMenu().month} ${dateMenu().day}, ${dateMenu().year}`
dateHtml.innerHTML = dateText;