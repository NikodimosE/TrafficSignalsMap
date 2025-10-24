console.log('✅ layers.js loaded');

// Object to hold each toggleable layer
const overlayLayers = {};

// Utility: Wrap a signal-adding function into a LayerGroup and return count
function wrapLayer(fn) {
  const group = L.layerGroup();
  let count = 0;

  // Intercept marker additions
  const originalAddTo = L.Marker.prototype.addTo;
  L.Marker.prototype.addTo = function () {
    group.addLayer(this);
    count++;
    return this;
  };

  // Call the module function
  try {
    fn(window.map);
  } catch (err) {
    console.warn(`⚠️ Error calling layer function:`, err);
  }

  // Restore original method
  L.Marker.prototype.addTo = originalAddTo;

  return { group, count };
}

// Define each layer with icon and label
const layerDefinitions = [
  { fn: addEquestrian, label: 'Equestrian Crossings', icon: 'Equestrian.svg' },
  { fn: addLiftBridge, label: 'Lift Bridges', icon: 'LiftingBridge.svg' },
  { fn: addPelican, label: 'Pelican Crossings', icon: 'Pelican.svg' },
  { fn: addPuffin, label: 'Puffin Crossings', icon: 'Puffin.svg' },
  { fn: addRoadNarrows, label: 'Road Narrows', icon: 'RN.svg' },
  { fn: addSignalControlledJunctions, label: 'Signal Controlled Junctions', icon: 'SCJ.svg' },
  { fn: addToucan, label: 'Toucan Crossings', icon: 'Toucan.svg' },
  { fn: addHorseTram, label: 'Horse Tram Crossings', icon: 'Tram.svg' },
  { fn: addZebra, label: 'Zebra Crossings', icon: 'Zebra.svg' },
  { fn: addSignalLC, label: 'Signalised Level Crossings', icon: 'SignalLC.svg' },
  { fn: addRemoved, label: 'Removed Traffic Signals', icon: 'Removed.svg' }
];

// Wrap and count each layer
const wrappedLayers = layerDefinitions.map(({ fn, label, icon }) => {
  const { group, count } = wrapLayer(fn);
  return {
    htmlLabel: `<img src="icons/${icon}" width="16" style="vertical-align:middle;"> ${label} (${count})`,
    group,
    count
  };
});

// Sort by descending count
wrappedLayers.sort((a, b) => b.count - a.count);

// Build overlayLayers object
wrappedLayers.forEach(({ htmlLabel, group }) => {
  overlayLayers[htmlLabel] = group;
});

// Add the layer control to the map
L.control.layers(null, overlayLayers, { collapsed: false }).addTo(window.map);
