
    const localStorageKey = 'birdCounts';
    let currentBird = null;

    let birds = [
      { name: "Blue Tit",
       count: 16, latin: "Cyanistes caeruleus", audio: "https://xeno-canto.org/sounds/uploaded/SWJCTHRKBD/XC798268-Parus_caeruleus_early_morning_song.mp3",
       notes: "Always fluttering around in the city / in sets of two or more / collecting twigs in spring to build their nests / two distinct types of whistles, both shrill and low", image: "https://cdn.cosmos.so/77635670-7d7c-433a-986b-90c6667f9f3d?format=webp&w=1168" 
      },
      { name: "Blackbird",
       count: 10, latin: "Turdus merula", audio: "https://xeno-canto.org/sounds/uploaded/OOECWDJQLV/XC812730-Blackbird%20song%20suburban.mp3",
       notes: "Female is browner / usually seen in pairs / national bird of stockholm / sings a lot", image: "https://cdn.cosmos.so/0520efdf-ce15-43f5-933b-2122bb168bd6?format=webp&w=554" 
      },
      { name: "Fieldfare",
       count: 7, latin: "Turdus pilaris", audio: "https://xeno-canto.org/sounds/uploaded/UTWJHDYIUY/XC773880-Fieldfare_flight_calls_Norway.mp3",
       notes: "terrible mechanical sounding shriek / inelegant flight / angry-looking / seen in sets of two or more / rummaging around in the bushes / sometimes bullying other birds", image: "img/fieldfare.png" 
      },
      { name: "Eurasian Magpie",
       count: 12, latin: "Pica pica", audio: "https://xeno-canto.org/sounds/uploaded/GKCYLPQAKO/XC794867-Magpie%20calls%202.mp3",
       notes: "Large bullies.", image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/258465881/1200" 
      },
      { name: "Seagull",
       count: 9, latin: "Larinae", audio: "https://xeno-canto.org/sounds/uploaded/GKCYLPQAKO/XC794867-Magpie%20calls%202.mp3",
       notes: "Large bullies / higher flying", image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/258465881/1200" 
      },
      { name: "Starling",
       count: 4, latin: "Sturnus vulgaris", audio: "https://xeno-canto.org/sounds/uploaded/HMQCNXUAYR/XC781617-Starling%2C%20Sturnus%20vulgaris%2C%20singing.mp3",
       notes: "Often mistaken for the more commonly seen blackbird / unmissable irridiscent feathers / polite?", image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/309156211/1200" 
      },
      { name: "Sparrow",
       count: 4, latin: "Passer domesticus", audio: "https://xeno-canto.org/sounds/uploaded/GFYHDMLCSF/XC781616-House%20Sparrow%2C%20Passer%20domesticus.mp3",
       notes: "Chirpy and common.", image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/312481191/1200" 
      },
     
      { name: "Nuthatch",
       count: 2, latin: "Sitta europaea", audio: "https://xeno-canto.org/sounds/uploaded/BDYHDUIAEX/XC798264-Eurasian_Nuthatch_calls.mp3",
       notes: "Creeps down trees headfirst.", image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/246325271/1200" 
      },
      { name: "Eurasian Jay",
       count: 2, latin: "Garrulus glandarius", audio: "https://xeno-canto.org/sounds/uploaded/KZMPYAVQOL/XC773321-Eurasian_Jay_calling.mp3",
       notes: "Colorful and large / often in pairs / keep to themselves", image: "https://cdn.cosmos.so/3d0b3f0e-a806-49e2-9b79-e920f1664776?format=webp&w=1168" 
      },
      { name: "Greenfinch",
       count: 2, latin: "Chloris chloris", audio: "https://xeno-canto.org/sounds/uploaded/UXCYFHZGDR/XC794866-Greenfinch%20song.mp3",
       notes: "Shy / prefers the higher branches / identifiable whistle", image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/277825331/1200"
      },
      { name: "Hawfinch",
       count: 2, latin: "Coccothraustes coccothraustes", audio: "https://xeno-canto.org/sounds/uploaded/PUKHGNCKUG/XC773879-Hawfinch_Norway.mp3",
       notes: "Rare and bulky finch.", image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/302264861/1200"
      },
      { name: "European Robin",
       count: 1, latin: "Erithacus rubecula", audio: "https://xeno-canto.org/sounds/uploaded/UWZLJEGNKR/XC781619-European_Robin_song.mp3",
       notes: "Heard singing early morning / Seen only once so far / cute", image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/302264921/1200"
      },
      { name: "Common Woodpigeon",
       count: 4, latin: "Columba palumbus", audio: "https://xeno-canto.org/sounds/uploaded/TTCEKFEUHH/XC781615-Woodpigeon_call.mp3",
       notes: "Always trotting around in sets of two or more / low flying / bulky", image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/246325241/1200"
      },
      { name: "European Green Woodpecker",
       count: 1, latin: "Picus viridis", audio: "https://xeno-canto.org/sounds/uploaded/SZPGWNGTLI/XC798261-Eur_Green_Woodpecker.mp3",
       notes: "Distinctive laughing call.", image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/270373961/1200"
      },
      { name: "Great Spotted Woodpecker",
       count: 1, latin: "Dendrocopos major", audio: "https://xeno-canto.org/sounds/uploaded/WHCKMPAKPT/XC794864-Great_Spotted_Woodpecker.mp3",
       notes: "Common but shy.", image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/246325171/1200"
      },
      { name: "White Wagtail",
       count: 4, latin: "Motacilla alba", audio: "https://xeno-canto.org/sounds/uploaded/YVQCHNRYHD/XC781620-White%20Wagtail.mp3",
       notes: "Like an animated character with it's swiftly moving legs / petite / unmissable", image: "https://cdn.cosmos.so/0520efdf-ce15-43f5-933b-2122bb168bd6?format=webp&w=1168"
      },
      { name: "Three-toed Woodpecker",
       count: 1, latin: "Picoides tridactylus", audio: "https://xeno-canto.org/sounds/uploaded/GDWZKWPIBJ/XC794865-Three-toed_Woodpecker_call.mp3",
       notes: "the more common of the woodpeckers", image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/246325221/1200"
      },
      { name: "Hooded Crow",
       count: 4, latin: "Corvus cornix", audio: "https://xeno-canto.org/sounds/uploaded/GDWZKWPIBJ/XC794865-Three-toed_Woodpecker_call.mp3",
       notes: "As large as a puppy / clever as crows are / walks like an old man?", image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/246325221/1200"
      },
      { name: "Great tit",
       count: 1, latin: "Picoides tridactylus", audio: "https://xeno-canto.org/sounds/uploaded/GDWZKWPIBJ/XC794865-Three-toed_Woodpecker_call.mp3",
       notes: "around", image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/246325221/1200"
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
        container.appendChild(circle);
      });
    }

    loadCounts();
    renderBirdCircles();
