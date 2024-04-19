export async function GET() {
  const data =
    [
      {id: 100, name: "Barrington Concrete Plant"},
      {id: 101, name: "Easton Plant"},
      {id: 102, name: "Black Mountain Plant"},
      {id: 103, name: "Weston Concrete Products"},
      {id: 104, name: "Middle Rock Quarry"},
      {id: 105, name: "Fountain Valley Plant"},
      {id: 106, name: "Smithfield Plant"},
      {id: 107, name: "Durham Plant"},
      {id: 108, name: "Brookstone Plant"},
      {id: 109, name: "Anderson Plant"},
      {id: 110, name: "Blue Ridge Plant"}
    ]
        
    return new Response(JSON.stringify(data), {
      headers: {
        'content-type': 'application/json',
      },
      status: 200
    })
    }