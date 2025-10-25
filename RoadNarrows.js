console.log('✅ Signals.js loaded');

function addRoadNarrows(map) {
  const signals = [
    {
      id: 'RN-000',
      name: 'Mill Road',
	  type: 'Road Narrows',
      latlng: '54.22163954892855, -4.697525056694475',
      makeModel: 'Telent 4G',
      installDate: '2023',
      notes: 'Upgraded from Mellors'
    },
	  
    {
      id: 'RN-001',
      name: 'Shore Road',
	  type: 'Road Narrows',
      latlng: '54.08401089467461, -4.763074779332317',
      makeModel: 'Microsense LSH',
      installDate: 'Early 2000s',
      notes: 'Due to be Upgraded'
    },
	  
    {
      id: 'RN-002',
      name: 'Braddan Road',
	  type: 'Road Narrows',
      latlng: '54.16414326177997, -4.505772017987993',
      makeModel: 'Telent 4G',
      installDate: '2020',
      notes: 'Only active during TT and MGP road closures'
    },
  ];
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

  signals.forEach(signal => {
    const [lat, lng] = signal.latlng.split(',').map(coord => Number(coord.trim()));

    const popupText = `
      <strong>${signal.name}</strong><br><br>
      <strong>Context Type:</strong><br>${signal.type}<br>
      <strong>Signal Make/Model:</strong><br>${signal.makeModel}<br>
      <strong>Install Date:</strong><br>${signal.installDate}<br>
      <strong>Notes:</strong><br>${signal.notes}
    `;

    const icon = L.icon({
      iconUrl: 'icons/RN.svg',
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


