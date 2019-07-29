/**
 * Public API provided by Singapore Airlines App Challenge
 */

const fetch = require('node-fetch');

import { clientUUID, flightStatus, flightSearch } from '../../config/Credentials';

const baseUrl = 'https://apigw.singaporeair.com/api';

module.exports = {
  /*https://developer.singaporeair.com/docs/read/flight_status/Flight_Status_by_Flight_Number*/
  getFlightStatusByRoute: async ({
    originAirportCode,
    scheduledDepartureDate,
    destinationAirportCode,
    scheduledArrivalDate
  }) => {
    const path = `${baseUrl}/v3/flightstatus/getbyroute`;
    let response = await fetch(path, {
      method: 'POST',
      headers: flightStatus,
      body: JSON.stringify({
        request: {
          originAirportCode,
          scheduledDepartureDate,
          destinationAirportCode,
          scheduledArrivalDate
        },
        clientUUID: clientUUID
      })
    });
    let resBody = await response.json();
    console.log(resBody);
    return resBody;
  },

  /**https://developer.singaporeair.com/docs/read/flight_status/Flight_Status_by_Route */
  getFlightStatusByNumber: async ({
    airlineCode,
    flightNumber,
    originAirportCode,
    scheduledDepartureDate,
    destinationAirportCode,
    scheduledArrivalDate
  }) => {
    const path = `${baseUrl}/v3/flightstatus/getbynumber`;
    let response = await fetch(path, {
      method: 'POST',
      headers: flightStatus,
      body: JSON.stringify({
        request: {
          airlineCode,
          flightNumber,
          originAirportCode,
          scheduledDepartureDate,
          destinationAirportCode,
          scheduledArrivalDate
        },
        clientUUID: clientUUID
      })
    });
    let resBody = await response.json();
    return resBody;
  },

  /**https://developer.singaporeair.com/docs/read/flight_search/flightavailability */
  flightSearch: async ({
    itineraryDetails,
    cabinClass,
    adultCount,
    childCount,
    infantCount,
    flightSortingRequired,
    flexibleDates,
    dateRange
  }) => {
    const path = `${baseUrl}/v1/commercial/flightavailability/get`;
    let response = await fetch(path, {
      method: 'POST',
      headers: flightSearch,
      body: JSON.stringify({
        request: {
          itineraryDetails,
          cabinClass,
          adultCount,
          childCount,
          infantCount,
          flightSortingRequired,
          flexibleDates,
          dateRange
        },
        clientUUID: clientUUID
      })
    });
    let resBody = await response.json();
    return resBody;
  }
};
