
const login = async () => {
  const url = 'https://fedskillstest.coalitiontechnologies.workers.dev'; 

  const username = "coalition";
  const password = "skills-test";

  if (!username || !password) {
    throw new Error('Username or password is not provided');
  }

  const basicAuth = btoa(`${username}:${password }`);
  const headers = new Headers();
  headers.set('Authorization', `Basic ${basicAuth}`);

  try {
    const response = await fetch(url, {
      method: 'GET', 
      headers: headers,
      // Optionally, include body data if required by your API
    
    }); 

    if (!response.ok) {
      const errorMessage = await response.text(); // Get the error message from the response body
      throw new Error(errorMessage);
    }
    
    const responseData = await response.json();

    const desiredUserName = 'Jessica Taylor'; // worked
    const desiredUserData = responseData.find(user => user.name === desiredUserName);

    if (!desiredUserData) {
      throw new Error('User not found');
    }

    // Extract the desired fields
    const { name,gender,age,profile_picture,date_of_birth,emergency_contact,insurance_type } = desiredUserData;
    const {lab_results} = desiredUserData;
    const {diagnostic_list} = desiredUserData;
    const {diagnosis_history} = desiredUserData;

    //iterating over the array for diagnostic history
    const March = diagnosis_history[0];
    const Feb = diagnosis_history[1];
    const Jan = diagnosis_history[2];
    const Dec = diagnosis_history[3];
    const Nov = diagnosis_history[4];
    const Oct = diagnosis_history[5];

    //iterating for blood pressure
    const {blood_pressure:bloodpressure} = March
    const {blood_pressure:bloodpressure1} = Feb
    const {blood_pressure:bloodpressure2} = Jan
    const {blood_pressure:bloodpressure3} = Dec
    const {blood_pressure:bloodpressure4} = Nov
    const {blood_pressure:bloodpressure5} = Oct

    //iterating for systolic values
    const {systolic:sys} = bloodpressure
    const {systolic:sys1} = bloodpressure1
    const {systolic:sys2} = bloodpressure2
    const {systolic:sys3} = bloodpressure3
    const {systolic:sys4} = bloodpressure4
    const {systolic:sys5} = bloodpressure5

    const {value:val} = sys
    const {value:val1} = sys1
    const {value:val2} = sys2
    const {value:val3} = sys3
    const {value:val4} = sys4
    const {value:val5} = sys5
    
    const{levels:level} = sys

    //iterating for diastolic values
    const {diastolic:dia} = bloodpressure
    const {diastolic:dia1} = bloodpressure1
    const {diastolic:dia2} = bloodpressure2
    const {diastolic:dia3} = bloodpressure3
    const {diastolic:dia4} = bloodpressure4
    const {diastolic:dia5} = bloodpressure5

    const {value:val6} = dia
    const {value:val7} = dia1
    const {value:val8} = dia2
    const {value:val9} = dia3
    const {value:val10} = dia4
    const {value:val11} = dia5

    const {levels:level1} = dia

    //Charts
    const xValues = ["Oct 2023","Nov 2023","Dec 2023","Jan 2024","Feb 2024","Mar 2024"];

    new Chart("MyChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [
          {
            fill: false,
            backgroundColor:"rgba(230, 111, 210, 2)",
            borderColor: "rgba(230, 111, 210, 2)",
            pointRadius:5,
            data: [val,val1,val2,val3,val4,val5]
          },
          {
            fill: false,
            backgroundColor: " rgba(140, 111, 230, 1)",
            borderColor: "rgba(140, 111, 230, 1)",
            pointRadius:5,
            data: [val6,val7,val8,val9,val10,val11]
          }
        ]
      },
      options: {
        legend: {display: false},
        scales: {
          xAxes: [{
            display: true,
            gridLines: {
              display: false // Remove x-axis grid lines
            },
            ticks: {
              min: 0,
              max: xValues.length - 1,
              stepSize: 1,
              callback: function(value, index, values) {
                return xValues[index]; // Display custom string labels
              }
            }
          }],
          yAxes: [{
            ticks: {
              min: 60,  
              max: 180,
              stepSize: 20
            }
          }]
        }
      }
    });
    

    //iterating over heart,respiratory and temperature values
    const {heart_rate:heartrate} = March
    const {respiratory_rate:respiratoryrate} = March
    const {temperature:temperature} = March

    const {value:value1} = heartrate
    const {levels:lvl1} = heartrate

    const {value:value2} = respiratoryrate
    const {levels:lvl2} = respiratoryrate

    const {value:value3} = temperature
    const {levels:lvl3} = temperature


    //iterating over the array for lab results
    const blood_tests = lab_results[0];
    const ctscans = lab_results[1];
    const radiology = lab_results[2];
    const xrays = lab_results[3];

    const { name: name1, description: description1, status: status1 } = diagnostic_list[0];
    const { name: name2, description: description2, status: status2 } = diagnostic_list[1];
    const { name: name3, description: description3, status: status3 } = diagnostic_list[2];
    const { name: name4, description: description4, status: status4 } = diagnostic_list[3];
    
    const female = gender +", "+ age

    //User details
    document.getElementById('jessica').innerHTML = name
    document.getElementById('female-28').innerHTML = female
    document.getElementById('image').src = profile_picture

    //User profile
    document.getElementById('jessica-female-28').src = profile_picture
    document.getElementById('name').innerHTML = name;
    document.getElementById('dob-data').innerHTML = date_of_birth;
    document.getElementById('gender-data').innerHTML = gender
    document.getElementById('phone-data').innerHTML = emergency_contact
    document.getElementById('insurance-data').innerHTML = insurance_type

    //lab results
    document.getElementById('blood-tests').innerHTML = blood_tests
    document.getElementById('ct-scans').innerHTML = ctscans
    document.getElementById('radiology-reports').innerHTML = radiology
    document.getElementById('x-rays').innerHTML = xrays

    //diagnostic lists 
    document.getElementById('hypertension').innerHTML = name1
    document.getElementById('description').innerHTML = description1
    document.getElementById('status').innerHTML = status1


    document.getElementById('diabetes').innerHTML = name2
    document.getElementById('description-1').innerHTML = description2
    document.getElementById('status-1').innerHTML = status2

    document.getElementById('asthma').innerHTML = name3
    document.getElementById('description-2').innerHTML = description3
    document.getElementById('status-2').innerHTML = status3
    
    document.getElementById('osteo').innerHTML = name4
    document.getElementById('description-3').innerHTML = description4
    document.getElementById('status-3').innerHTML = status4
    
    //Systolic values
    document.getElementById('sys-value').innerHTML = val
    document.getElementById('sys-level').innerHTML = level

    //Diastolic values 
    document.getElementById('dia-value').innerHTML = val6
    document.getElementById('dia-level').innerHTML = level1


    //Respiratory
    const values1 = value2 + " " + "bpm"
    document.getElementById('values1').innerHTML = values1
    document.getElementById('levels1').innerHTML = lvl2

    //Temperature
    const values2 = value3 + " " + "°F"
    document.getElementById('values2').innerHTML = values2
    document.getElementById('levels2').innerHTML = lvl3

    //Heartrate
    const values = value1 + " " + "bpm"
    document.getElementById('values3').innerHTML = values
    document.getElementById('levels3').innerHTML = lvl1


  } catch (error) {
    console.error('Error:', error);
    // Display the error message in the frontend
    alert(error.message); // Show the error message in a popup
  }
};

document.addEventListener('DOMContentLoaded', () => {
    login();
  });