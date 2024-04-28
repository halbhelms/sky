
export const load = (async () => {
    return {chartData: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {locationId: 0, locationName: 'All Locations', data:      [173, 297, 339, 187, 416, 225, 301]},
        {locationId: 100, locationName: 'Bryce Point', data:      [65, 59, 80, 81, 56, 55, 40]},
        {locationId: 200, locationName: 'Central Corners', data:  [28, 48, 40, 19, 86, 27, 90]},
        {locationId: 300, locationName: 'Citywide Concrete', data:[18, 48, 77, 9, 100, 27, 40]},
        {locationId: 400, locationName: 'Baskin Robbins', data:   [18, 64, 81, 29, 94, 77, 80]},
        {locationId: 500, locationName: 'Davis & Davis', data:    [44, 56, 61, 49, 80, 39, 51]},
      ]
    }
    }
  }
)


