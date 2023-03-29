//Organizuojate vestuves - pasiimkite informaciją iš "https://boiling-reaches-93648.herokuapp.com/week-3/wedding" 
//ir atvaizduokite lentelėje: vardą, plusOne ir attending. Parašykite taip, 
//kad plusOne ir attending būtų ne true/false, bet "+" arba "-".

const displayGuests = (guests) => {
 const tbody = document.querySelector('tbody');
 guests.forEach(guests => {
    const name = document.createElement('td');
    name.innerText = guests.name;

    const attending = document.createElement('td') ;
    attending.innerText = guests.attending ? '+' : '-';

    const plusOne = document.createElement('td');
    plusOne.innerText = guests.plusOne? '+' : '-';

   const tr = document.createElement('tr');
    tr.append(name, attending, plusOne);
    tbody.append(tr); 
 })
}

const fetchPartyGuests = async () => {
    try {
        const response = await fetch('https://boiling-reaches-93648.herokuapp.com/week-3/wedding');
        if (response.ok) {
            const guests = await response.json();
            displayGuests(guests);
        }
    } catch (error) {
        console.error(error);
    }
};

fetchPartyGuests();


