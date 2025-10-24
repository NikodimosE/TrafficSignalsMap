console.log('✅ Signals.js loaded');

function addOpenLC(map) {
  const signals = [
    {
      id: 'ULC-000',
      name: 'Parsonage Rd',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.32024542933102, -4.381406488647732',
      notes: ''
    },
	  
    {
      id: 'ULC-001',
      name: 'Queens Drive West',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.31785494180274, -4.377517285568667',
      notes: ''
    },
	  
    {
      id: 'ULC-002',
      name: 'Queens Valley',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.315432129122236, -4.376282468875731',
      notes: ''
    },
	  
    {
      id: 'ULC-003',
      name: 'Maughold Rd',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.30948279040328, -4.360807093302397',
      notes: ''
    },
	  
    {
      id: 'ULC-004',
      name: 'Jacks Ln',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.30218694389207, -4.3522596664082664',
      notes: ''
    },
	  
    {
      id: 'ULC-005',
      name: 'Dreemskerry Hill',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.29331104045526, -4.340932348312627',
      notes: ''
    },
	  
    {
      id: 'ULC-006',
      name: 'Maughold Rd',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.28892680915551, -4.336106773564614',
      notes: ''
    },
	  
    {
      id: 'ULC-007',
      name: 'Benussies Rd',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.28088179165055, -4.352844657772081',
      notes: ''
    },
	  
    {
      id: 'ULC-008',
      name: 'Ballaglass Glen Rd',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.283180219402, -4.357220084020524',
      notes: ''
    },
	  
    {
      id: 'ULC-009',
      name: 'Glen Mona Loop Rd',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.26882357229162, -4.37662862982433',
      notes: ''
    },
	  
    {
      id: 'ULC-010',
      name: 'Glen Mona Loop Rd',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.25956159469557, -4.371950889403607',
      notes: ''
    },
	  
    {
      id: 'ULC-011',
      name: 'Dhoon Loop Rd',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.25750287791109, -4.371647799771377',
      notes: ''
    },
	  
    {
      id: 'ULC-012',
      name: 'Dhoon Loop Rd',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.25580130381633, -4.371714854983356',
      notes: ''
    },
	  
    {
      id: 'ULC-013',
      name: 'Dhoon Loop Rd',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.24954607478664, -4.376832619754293',
      notes: ''
    },
	  
    {
      id: 'ULC-014',
      name: 'Footpath',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.228232331541854, -4.388759863830724',
      notes: 'Pedestrian Footpath'
    },
	  
    {
      id: 'ULC-015',
      name: 'Ramsey Rd',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.234002562727866, -4.404989833645218',
      notes: ''
    },
	  
    {
      id: 'ULC-016',
      name: 'Mines Rd',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.23373762269656, -4.406140501320773',
      notes: ''
    },
	  
    {
      id: 'ULC-017',
      name: 'Ramsey Rd',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway, Snaefell Mountain Railway',
      latlng: '54.23295690196269, -4.406014437488546',
      notes: ''
    },
	  
    {
      id: 'ULC-018',
      name: 'Unamed Rd',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.23153076808516, -4.405634104688977',
      notes: ''
    },
	  
    {
      id: 'ULC-019',
      name: 'Lhergy Grawe',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.22558302033576, -4.395149099842095',
      notes: ''
    },
	  
    {
      id: 'ULC-020',
      name: 'Old School Hill',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.224330163537594, -4.394947934141304',
      notes: ''
    },
	  
    {
      id: 'ULC-021',
      name: 'Old Laxey Hill',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.22251509094708, -4.396811093604785',
      notes: ''
    },
	  
    {
      id: 'ULC-022',
      name: 'Ballagawne Rd',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.20737905397707, -4.407002641991098',
      notes: ''
    },
	  
    {
      id: 'ULC-023',
      name: 'Packhorse Lane',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.20346069334276, -4.412287843057396',
      notes: ''
    },
	  
    {
      id: 'ULC-024',
      name: 'Baldrine Rd',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.202478583237365, -4.412282478639004',
      notes: ''
    },
	  
    {
      id: 'ULC-025',
      name: 'Barroose Ln',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.19675367387236, -4.419775629494201',
      notes: ''
    },
	  
    {
      id: 'ULC-026',
      name: 'King Edward Road',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.19375405743537, -4.424415459738353',
      notes: ''
    },
	  
    {
      id: 'ULC-027',
      name: 'Bibaloe Beg Rd',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.18461704434731, -4.427903500589026',
      notes: ''
    },
	  
    {
      id: 'ULC-028',
      name: 'Groudle Rd',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.177400135948574, -4.426625952442584',
      notes: ''
    },
	  
    {
      id: 'ULC-029',
      name: 'Howe Rd',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.170750432724155, -4.444980283780524',
      notes: ''
    },
	  
    {
      id: 'ULC-030',
      name: 'Harbour Rd',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.16985278981156, -4.446962355853905',
      notes: ''
    },
	  
    {
      id: 'ULC-031',
      name: 'Royal Terrace',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.16719880172497, -4.452211768665096',
      notes: ''
    },
	  
	  
	  
  ];
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

  signals.forEach(signal => {
    const [lat, lng] = signal.latlng.split(',').map(coord => Number(coord.trim()));

    const popupText = `
      <strong>${signal.name}</strong><br><br>
      <strong>Crossing Type:</strong><br>${signal.type}<br>
      <strong>Barrier Systems:</strong><br>${signal.barriers}<br>
      <strong>Railway Operator:</strong><br>${signal.operator}<br>
      <strong>Notes:</strong><br>${signal.notes}
    `;

    const icon = L.icon({
      iconUrl: 'icons/OpenLC.svg',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    L.marker([lat, lng], { icon })
      .addTo(map)
      .bindPopup(popupText);
  });
}
