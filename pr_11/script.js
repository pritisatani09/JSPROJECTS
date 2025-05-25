const apiURL = "https://api.rootnet.in/covid19-in/stats/history";

async function fetchCovidData() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

async function searchData() {
  const searchDate = document.getElementById("searchDate").value;
  if (!searchDate) {
    alert("Please select a date!");
    return;
  }

  const historyData = await fetchCovidData();
  const result = historyData.find(day => day.day === searchDate);
  const stateDataContainer = document.getElementById("stateData");
  stateDataContainer.innerHTML = "";

  if (result) {
    let htmlContent = "";
    result.regional.forEach(state => {
      htmlContent += `
        <div class="card">
          <h5>${state.loc}</h5>
          <p><strong>Cases:</strong> ${state.totalConfirmed}</p>
          <p><strong>Deaths:</strong> ${state.deaths}</p>
          <p><strong>Recovered:</strong> ${state.discharged}</p>
        </div>
      `;
    });
    stateDataContainer.innerHTML = htmlContent;
  } else {
    alert("No data found for the selected date.");
  }
}
