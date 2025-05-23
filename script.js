
    const localStorageKey = 'birdCounts';
    let currentBird = null;

    let birds = [
      { name: "Blue Tit",
       count: 16, latin: "Cyanistes caeruleus", audio: "sounds/bluetit.mp3",
       notes: "two distinct types of whistles - shrill and low / entry also includes sightings of great tits (Parus major)", image: "img/bluetit.png" 
      },
      { name: "Blackbird",
       count: 12, latin: "Turdus merula", audio: "sounds/blackbird.mp3",
       notes: "female is brownish / national bird of stockholm / melodious", image: "img/blackbird.png" 
      },
      { name: "Fieldfare",
       count: 7, latin: "Turdus pilaris", audio: "sounds/fieldfare.mp3",
       notes: "mechanical sounding / angry-looking / common", image: "img/fieldfare.png" 
      },
      { name: "Eurasian Magpie",
       count: 12, latin: "Pica pica", audio: "sounds/magpie.mp3",
       notes: "large bullies", image: "img/magpie.png" 
      },
      { name: "Seagull",
       count: 9, latin: "Larinae", audio: "sounds/gull.mp3",
       notes: "higher flying large bullies", image: "img/seagull.png" 
      },
      { name: "Starling",
       count: 4, latin: "Sturnus vulgaris", audio: "sounds/starling.mp3",
       notes: "irridiscent / was common in san fransisco too", image: "img/starling.png" 
      },
      { name: "Nuthatch",
       count: 3, latin: "Sitta europaea", audio: "sounds/nuthatch.mp3",
       notes: "creeps down trees headfirst", image: "img/nuthatch.png" 
      },
        
      { name: "Eurasian Jay",
       count: 4, latin: "Garrulus glandarius", audio: "sounds/jay.mp3",
       notes: "colorful and large / often in pairs / loud", image: "img/jay.png" 
      },
      { name: "Greenfinch",
       count: 2, latin: "Chloris chloris", audio: "sounds/greenfinch.mp3",
       notes: "shy / prefers the higher branches / distinct whistle", image: "img/greenfinch.png"
      },
      { name: "Hawfinch",
       count: 2, latin: "Coccothraustes coccothraustes", audio: "sounds/hawfinch.mp3",
       notes: "rare and bulky finch", image: "img/hawfinch.png"
      },
        { name: "Goldfinch",
       count: 3, latin: "Carduelis carduelis", audio: "sounds/goldfinch.mp3",
       notes: "colorful", image: "img/goldfinch.png"
      },
      { name: "European Robin",
       count: 3, latin: "Erithacus rubecula", audio: "sounds/robin.wav",
       notes: "looks like a red-breasted flycatcher", image: "img/robin.png"
      },
      { name: "Common Woodpigeon",
       count: 8, latin: "Columba palumbus", audio: "sounds/pigeon.mp3",
       notes: "urban regular / low flying / prefers to walk / bulky", image: "img/woodpigeon.png"
      },
        { name: "Eurasian Tree Sparrow",
       count: 4, latin: "Passer montanus", audio: "sounds/sparrow.mp3",
       notes: "includes sightings of house sparrows, male and female", image: "img/sparrow.png" 
      },
        { name: "Hooded Crow",
       count: 4, latin: "Corvus cornix", audio: "sounds/crow.mp3",
       notes: "bulky / clever / prefers to walk", image: "img/hooded.png"
      },
        { name: "White Wagtail",
       count: 4, latin: "Motacilla alba", audio: "sounds/wagtail.mp3",
       notes: "comically swift walker", image: "img/wagtail.png"
      },
        
      { name: "European Green Woodpecker",
       count: 1, latin: "Picus viridis", audio: "sounds/greenwoodie.mp3",
       notes: "distinct laughing call", image: "img/greenwoodie.png"
      },
      { name: "Great Spotted Woodpecker",
       count: 3, latin: "Dendrocopos major", audio: "sounds/spottedwoodie.mp3",
       notes: "striking, textbook image of a woodpecker", image: "img/spottedwoodie.png"
      },
      { name: "Eurasian three-toed woodpecker",
       count: 1, latin: "Picoides tridactylus", audio: "sounds/toedwoodie.mp3",
       notes: "shy, speckled, pretty", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Three-toed_Woodpecker_-_Finlandia_0005_%283%29.jpg/500px-Three-toed_Woodpecker_-_Finlandia_0005_%283%29.jpg"
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
      document.getElementById('modal-latin').innerText = `(${bird.latin})`; // Add brackets here
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
        circle.innerHTML = `<img src="${bird.image}" alt="${bird.name}" /><span class="tooltip">${bird.name}</span>`;
        container.appendChild(circle);
      });

    }

    loadCounts();
    renderBirdCircles();
