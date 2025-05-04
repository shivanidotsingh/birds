
    const localStorageKey = 'birdCounts';
    let currentBird = null;

    let birds = [
      { name: "Blue Tit / Great Tit",
       count: 16, latin: "Cyanistes caeruleus", audio: "https://xeno-canto.org/sounds/uploaded/SWJCTHRKBD/XC798268-Parus_caeruleus_early_morning_song.mp3",
       notes: "Always fluttering around in the city / in sets of two or more / collecting twigs in spring to build their nests / two distinct types of whistles, both shrill and low", image: "img/bluetit.png" 
      },
      { name: "Blackbird",
       count: 10, latin: "Turdus merula", audio: "https://xeno-canto.org/sounds/uploaded/OOECWDJQLV/XC812730-Blackbird%20song%20suburban.mp3",
       notes: "Female is browner / usually seen in pairs / national bird of stockholm / sings a lot", image: "img/blackbird.png" 
      },
      { name: "Fieldfare",
       count: 7, latin: "Turdus pilaris", audio: "https://xeno-canto.org/sounds/uploaded/UTWJHDYIUY/XC773880-Fieldfare_flight_calls_Norway.mp3",
       notes: "terrible mechanical sounding shriek / inelegant flight / angry-looking / seen in sets of two or more / rummaging around in the bushes / sometimes bullying other birds", image: "img/fieldfare.png" 
      },
      { name: "Eurasian Magpie",
       count: 12, latin: "Pica pica", audio: "https://xeno-canto.org/sounds/uploaded/GKCYLPQAKO/XC794867-Magpie%20calls%202.mp3",
       notes: "Large bullies.", image: "img/magpie.png" 
      },
      { name: "Seagull",
       count: 9, latin: "Larinae", audio: "https://xeno-canto.org/sounds/uploaded/GKCYLPQAKO/XC794867-Seagull%20calls%202.mp3",
       notes: "Large bullies / higher flying", image: "img/seagull.png" 
      },
      { name: "Starling",
       count: 4, latin: "Sturnus vulgaris", audio: "https://xeno-canto.org/sounds/uploaded/HMQCNXUAYR/XC781617-Starling%2C%20Sturnus%20vulgaris%2C%20singing.mp3",
       notes: "Often mistaken for the more commonly seen blackbird / unmissable irridiscent feathers / polite?", image: "img/starling.png" 
      },
      
     
      { name: "Nuthatch",
       count: 2, latin: "Sitta europaea", audio: "https://xeno-canto.org/sounds/uploaded/BDYHDUIAEX/XC798264-Eurasian_Nuthatch_calls.mp3",
       notes: "Creeps down trees headfirst.", image: "img/nuthatch.png" 
      },
      { name: "Eurasian Jay",
       count: 2, latin: "Garrulus glandarius", audio: "https://xeno-canto.org/sounds/uploaded/KZMPYAVQOL/XC773321-Eurasian_Jay_calling.mp3",
       notes: "Colorful and large / often in pairs / keep to themselves", image: "img/jay.png" 
      },
      { name: "Greenfinch",
       count: 2, latin: "Chloris chloris", audio: "https://xeno-canto.org/sounds/uploaded/UXCYFHZGDR/XC794866-Greenfinch%20song.mp3",
       notes: "Shy / prefers the higher branches / identifiable whistle", image: "img/greenfinch.png"
      },
      { name: "Hawfinch",
       count: 2, latin: "Coccothraustes coccothraustes", audio: "https://xeno-canto.org/sounds/uploaded/PUKHGNCKUG/XC773879-Hawfinch_Norway.mp3",
       notes: "Rare and bulky finch.", image: "img/hawfinch.png"
      },
      { name: "European Robin",
       count: 1, latin: "Erithacus rubecula", audio: "https://xeno-canto.org/sounds/uploaded/UWZLJEGNKR/XC781619-European_Robin_song.mp3",
       notes: "Heard singing early morning / Seen only once so far / cute", image: "img/robin.png"
      },
      { name: "Common Woodpigeon",
       count: 4, latin: "Columba palumbus", audio: "https://xeno-canto.org/sounds/uploaded/TTCEKFEUHH/XC781615-Woodpigeon_call.mp3",
       notes: "Always trotting around in sets of two or more / low flying / bulky", image: "img/woodpigeon.png"
      },
        { name: "Sparrow",
       count: 4, latin: "Passer domesticus", audio: "https://xeno-canto.org/sounds/uploaded/GFYHDMLCSF/XC781616-House%20Sparrow%2C%20Passer%20domesticus.mp3",
       notes: "Chirpy and common.", image: "img/sparrow.png" 
      },
        
        { name: "White Wagtail",
       count: 4, latin: "Motacilla alba", audio: "https://xeno-canto.org/sounds/uploaded/YVQCHNRYHD/XC781620-White%20Wagtail.mp3",
       notes: "Like an animated character with it's swiftly moving legs / petite / unmissable", image: "img/wagtail.png"
      },
        
      { name: "European Green Woodpecker",
       count: 1, latin: "Picus viridis", audio: "https://xeno-canto.org/sounds/uploaded/SZPGWNGTLI/XC798261-Eur_Green_Woodpecker.mp3",
       notes: "Distinctive laughing call.", image: "img/greenwoodie.png"
      },
      { name: "Great Spotted Woodpecker",
       count: 1, latin: "Dendrocopos major", audio: "https://xeno-canto.org/sounds/uploaded/WHCKMPAKPT/XC794864-Great_Spotted_Woodpecker.mp3",
       notes: "Common but shy.", image: "img/spottedwoodie.png"
      },
      
      { name: "Three-toed Woodpecker",
       count: 1, latin: "Picoides tridactylus", audio: "https://xeno-canto.org/sounds/uploaded/GDWZKWPIBJ/XC794865-Three-toed_Woodpecker_call.mp3",
       notes: "the more common of the woodpeckers", image: "https://images.unsplash.com/photo-1742849249251-f49a92ad5aef?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      { name: "Hooded Crow",
       count: 4, latin: "Corvus cornix", audio: "https://xeno-canto.org/sounds/uploaded/GDWZKWPIBJ/XC794865-Three-toed_Woodpecker_call.mp3",
       notes: "As large as a puppy / clever as crows are / walks like an old man?", image: "img/hooded.png"
      }
    
    ];

    function saveCounts() {
      localStorage.setItem(localStorageKey, JSON.stringify(birds.map(b => ({ name: b.name, count: b.count }))));
    }

    function loadCounts() {
      const saved = JSON.parse(localStorage.getItem(localStorageKey));
      if (saved) {
        birds.forEach(bird => {
          const match = saved.find(item => item.name === bird.name);
          if (match) bird.count = match.count;
        });
      }
    }

    function showModal(bird) {
      currentBird = bird;
      document.getElementById('modal-name').innerText = bird.name;
      document.getElementById('modal-latin').innerText = bird.latin;
      document.getElementById('modal-notes').innerText = bird.notes;
      document.getElementById('modal-audio').src = bird.audio;
      document.getElementById('modal').style.display = 'flex';
    }

    function incrementCount() {
      if (currentBird) {
        currentBird.count++;
        saveCounts();
        renderBirdCircles();
        showModal(currentBird);
      }
    }

    function closeModal() {
      document.getElementById('modal').style.display = 'none';
    }

   function renderBirdCircles() {
  const container = document.getElementById('bird-container');
  container.innerHTML = '';
  const maxCount = Math.max(...birds.map(b => b.count));
  birds.forEach(bird => {
    const circle = document.createElement('div');
    circle.className = 'bird-circle';
    const size = 50 + (bird.count / maxCount) * 150;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.left = `${Math.random() * (window.innerWidth - size)}px`;
    circle.style.top = `${Math.random() * (window.innerHeight - size - 80)}px`;
    circle.onclick = () => showModal(bird);
    circle.innerHTML = `<img src="${bird.image}" alt="${bird.name}" />`;

    // Add drag event listeners
    let isDragging = false;
    let offsetX, offsetY;

    circle.addEventListener('mousedown', (e) => {
      isDragging = true;
      offsetX = e.clientX - circle.offsetLeft;
      offsetY = e.clientY - circle.offsetTop;
      circle.style.cursor = 'grabbing'; // Change cursor
      e.preventDefault(); // Prevent text selection
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;

      // Keep the circle within the bounds of the container
      const containerRect = container.getBoundingClientRect();
      const circleRect = circle.getBoundingClientRect();

      const maxX = containerRect.width - circleRect.width;
      const maxY = containerRect.height - circleRect.height;

      circle.style.left = `${Math.min(Math.max(x, 0), maxX)}px`;
      circle.style.top = `${Math.min(Math.max(y, 0), maxY)}px`;
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
      circle.style.cursor = 'pointer'; // Reset cursor
    });

    container.appendChild(circle);
  });
}

    loadCounts();
    renderBirdCircles();
