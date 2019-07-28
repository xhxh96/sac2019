module.exports = {
  getFlightStatusByRoute: async ({
    originAirportCode,
    scheduledDepartureDate,
    destinationAirportCode,
    scheduledArrivalDate
  }) => {
    let response = await fetch(
      'https://apigw.singaporeair.com/api/v3/flightstatus/getbyroute',
      {
        method: 'POST',
        headers: {
          apikey: '9vghg66sfg7bfnntyshm54fm',
          'X-Originating-IP': '67.85.215.220',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          request: {
            originAirportCode,
            scheduledDepartureDate,
            destinationAirportCode,
            scheduledArrivalDate
          },
          clientUUID: 'TestIODocs'
        })
      }
    );
    let responseJson = await response.json();
    console.log(responseJson);
  }
};
