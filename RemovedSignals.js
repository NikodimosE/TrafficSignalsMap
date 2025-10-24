console.log('✅ Signals.js loaded');

function addRemoved(map) {
  const signals = [
    {
      id: 'REM-000',
      name: 'Harris Promenade/Broadway',
	  type: 'Signal Controlled Junction',
      latlng: '54.15715986347946, -4.477221112688046',
      makeModel: 'TSEU 3G',
      installDate: '2006',
      DecomDate: 'September 2019',
      notes: 'Originally Mellors, Install Date:Unknown'
    },
	  
    {
      id: 'REM-001',
      name: 'Bridge Road/Banks Circus/Bank Hill/North Quay',
	  type: 'Signal Controlled Junction',
      latlng: '54.14743467328775, -4.48462095647429',
      makeModel: 'Microsense MSH',
      installDate: '2000s',
      DecomDate: '2006 or 2007',
      notes: 'Removed due to North Quay Regeneration Scheme'
    },
	  
    {
      id: 'REM-002',
      name: 'Church Road Marina',
	  type: 'Pelican Crossing',
      latlng: '54.15440758176476, -4.4788732939129305',
      makeModel: 'Mellors',
      installDate: '1980s',
      DecomDate: '2019',
      notes: 'Removed due to Douglas Promenade Regeneration Scheme'
    },
	  
    {
      id: 'REM-003',
      name: 'Cranstal Road',
	  type: 'Puffin Crossing',
      latlng: '54.38266720396624, -4.388047580858617',
      makeModel: 'Microsense LSH',
      installDate: '2000s',
      DecomDate: 'Early 2010s',
      notes: 'Removed due to closure of Bride School'
    },
	  
    {
      id: 'REM-004',
      name: 'Peveril Square/Bath Place',
	  type: 'Signal Controlled Junction',
      latlng: '54.14830064354859, -4.474870695995546',
      makeModel: 'Mellors',
      installDate: '1970s',
      DecomDate: 'Late 1900s',
      notes: 'Cannot find a lot of information on this location, apart from one or two images with signals here.'
    },
	  
    {
      id: 'REM-005',
      name: 'Derbyhaven Road',
	  type: 'Airfield',
      latlng: '54.07679874448035, -4.631766693091559',
      makeModel: 'Unknown',
      installDate: 'Unknown',
      DecomDate: '1990s?',
      notes: 'Cannot find a lot of information on this location, apart from one or two access covers here and a STOP line (Now removed in September 2025 when road was resurfaced.'
    },
  ];
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

  signals.forEach(signal => {
    const [lat, lng] = signal.latlng.split(',').map(coord => Number(coord.trim()));

    const popupText = `
      <strong>${signal.name}</strong><br><br>
      <strong>Signal Context:</strong><br>${signal.type}<br>
      <strong>Signal Make/Model:</strong><br>${signal.makeModel}<br>
      <strong>Installation Date:</strong><br>${signal.installDate}<br>
      <strong>Decomission Date:</strong><br>${signal.DecomDate}<br>
      <strong>Notes:</strong><br>${signal.notes}
    `;

    const icon = L.icon({
      iconUrl: 'icons/Removed.svg',
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

