console.log('✅ Signals.js loaded');

function addSignalLC(map) {
  const signals = [
    {
      id: 'SLC-000',
      name: 'Ballure Crossing',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.31351945735496, -4.373359301987855',
      notes: ''
    },
	  	  
    {
      id: 'SLC-001',
      name: 'Ballabeg Crossing',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.21234729180318, -4.406766354280579',
      notes: ''
    },
	  	  
    {
      id: 'SLC-002',
      name: 'Halfway Crossing',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.195078657911566, -4.422805474164509',
      notes: ''
    },
	  	  
    {
      id: 'SLC-003',
      name: 'Summerland Crossing',
	  type: 'Open Tramway Crossing',
	  barriers: 'None',
	  operator:'Manx Electric Railway',
      latlng: '54.16685366467696, -4.458128799571784',
      notes: ''
    },
	  	  
    {
      id: 'SLC-004',
      name: 'White Hoe Level Crossing',
	  type: 'Signalled Railway Crossing',
	  barriers: 'Automatic Full Barriers',
	  operator:'Isle of Man Steam Railway',
      latlng: '54.14503054024809, -4.505436766118477',
      notes: ''
    },
	  	  
    {
      id: 'SLC-005',
      name: 'Ballalonnan Crossing',
	  type: 'Signalled Railway Crossing',
	  barriers: 'Automatic Full Barriers',
	  operator:'Isle of Man Steam Railway',
      latlng: '54.1153722718411, -4.596410104166853',
      notes: ''
    },
	  	  
    {
      id: 'SLC-006',
      name: 'Level Crossing',
	  type: 'Signalled Railway Crossing',
	  barriers: 'Automatic Full Barriers',
	  operator:'Isle of Man Steam Railway',
      latlng: '54.11350729344912, -4.598666257254565',
      notes: ''
    },
	  	  
    {
      id: 'SLC-007',
      name: 'Carragher Rd Level Crossing',
	  type: 'Signalled Railway Crossing',
	  barriers: 'Automatic Full Barriers',
	  operator:'Isle of Man Steam Railway',
      latlng: '54.099662146214584, -4.611200381548136',
      notes: ''
    },
	  	  
    {
      id: 'SLC-008',
      name: 'Ballhick Level Crossing',
	  type: 'Signalled Railway Crossing',
	  barriers: 'Automatic Full Barriers',
	  operator:'Isle of Man Steam Railway',
      latlng: '54.09876106580093, -4.624420457878701',
      notes: ''
    },
	  	  
    {
      id: 'SLC-009',
      name: 'Ballasalla Level Crossing',
	  type: 'Signalled Railway Crossing',
	  barriers: 'Automatic Full Barriers',
	  operator:'Isle of Man Steam Railway',
      latlng: '54.09571017478199, -4.629503337221804',
      notes: ''
    },
	  	  
    {
      id: 'SLC-010',
      name: 'Mill Rd Level Crossing',
	  type: 'Signalled Railway Crossing',
	  barriers: 'Automatic Full Barriers',
	  operator:'Isle of Man Steam Railway',
      latlng: '54.07803726225586, -4.653258999459894',
      notes: ''
    },	 
	  	  
    {
      id: 'SLC-011',
      name: 'Colby Juniors Level Crossing',
	  type: 'Signalled Railway Crossing',
	  barriers: 'Automatic Full Barriers',
	  operator:'Isle of Man Steam Railway',
      latlng: '54.09504042519782, -4.700716389710445',
      notes: ''
    },	 
	  	  
    {
      id: 'SLC-012',
      name: 'The Level Level Crossing',
	  type: 'Signalled Railway Crossing',
	  barriers: 'Automatic Full Barriers',
	  operator:'Isle of Man Steam Railway',
      latlng: '54.09256634536307, -4.715723385477519',
      notes: ''
    },	 
	  	  
    {
      id: 'SLC-013',
      name: 'Colby Level Level Crossing',
	  type: 'Signalled Railway Crossing',
	  barriers: 'Automatic Full Barriers',
	  operator:'Isle of Man Steam Railway',
      latlng: '54.09160335391322, -4.721243802686309',
      notes: ''
    }, 
	  	  
    {
      id: 'SLC-014',
      name: 'Mount Gawne Level Crossing',
	  type: 'Signalled Railway Crossing',
	  barriers: 'Automatic Full Barriers',
	  operator:'Isle of Man Steam Railway',
      latlng: '54.0883740194554, -4.7314140065182055',
      notes: ''
    },
	  	  
    {
      id: 'SLC-015',
      name: 'Castletown Rd Level Crossing',
	  type: 'Signalled Railway Crossing',
	  barriers: 'Automatic Full Barriers',
	  operator:'Isle of Man Steam Railway',
      latlng: '54.08348192865099, -4.737092795803001',
      notes: ''
    },
	  	  
    {
      id: 'SLC-016',
      name: 'Port St Mary Level Crossing',
	  type: 'Signalled Railway Crossing',
	  barriers: 'Automatic Full Barriers',
	  operator:'Isle of Man Steam Railway',
      latlng: '54.080764627118484, -4.742631560376179',
      notes: ''
    },
	  	  
    {
      id: 'SLC-017',
      name: 'Droghadfayle Road Level Crossing',
	  type: 'Signalled Railway Crossing',
	  barriers: 'Automatic Full Barriers',
	  operator:'Isle of Man Steam Railway',
      latlng: '54.0838782450077, -4.75454771575198',
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
      iconUrl: 'icons/SignalLC.svg',
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
