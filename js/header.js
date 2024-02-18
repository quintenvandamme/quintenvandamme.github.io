  function addSquaresToHeader() {
    const header = document.getElementById('heatmap');
    const intensityThreshold = 0.3; // Set the desired threshold for intensity

    // Remove existing squares
    while (header.firstChild) {
      header.removeChild(header.firstChild);
    }

    // Add new squares
    for (let i = 0; i < 1200; i++) { // Adjust the number of squares as needed
      const intensity = Math.random() * (1 - intensityThreshold) + intensityThreshold;
      const square = document.createElement('div');
      square.classList.add('blue');
      square.setAttribute('data-intensity', intensity);
      square.style.setProperty('--intensity', intensity);
      header.appendChild(square);
    }
  }

  // Execute the function every second
  setInterval(addSquaresToHeader, 1000);

  // Initial execution
  addSquaresToHeader();