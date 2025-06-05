const inputText = document.getElementById('input-text');
const submitButton = document.getElementById('submit-btn');
const locationName = document.getElementById('location');
const dateTime = document.getElementById('date-time');
const temp = document.getElementById('temp');
const condition = document.getElementById('condition');

async function getData(location) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=c70c7dbd023f421590e50024250506&q=${location}&aqi=yes`);
    return await promise.json();
}

submitButton.addEventListener('click', async () => {
    const inputValue = inputText.value;
    const result = await getData(inputValue)
    locationName.innerText = result.location.name;
    dateTime.innerText = result.location.localtime;
    temp.innerText = result.current.temp_c;
    condition.innerText = result.current.condition.text
});
