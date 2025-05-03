
    const birds = [
      { name: "Blue Tit", count: 16, latin: "Cyanistes caeruleus", audio: "https://xeno-canto.org/sounds/uploaded/XXX/blue_tit.mp3", notes: "Seen frequently near window feeders." },
      { name: "Blackbird", count: 10, latin: "Turdus merula", audio: "https://xeno-canto.org/sounds/uploaded/XXX/blackbird.mp3", notes: "Includes 2 females." },
      { name: "Fieldfare", count: 7, latin: "Turdus pilaris", audio: "https://xeno-canto.org/sounds/uploaded/XXX/fieldfare.mp3", notes: "Common in winter." },
      { name: "Starling", count: 4, latin: "Sturnus vulgaris", audio: "https://xeno-canto.org/sounds/uploaded/XXX/starling.mp3", notes: "Often in flocks." },
      { name: "Sparrow", count: 4, latin: "Passer domesticus", audio: "https://xeno-canto.org/sounds/uploaded/XXX/sparrow.mp3", notes: "Chirpy and common." },
      { name: "Eurasian Magpie", count: 2, latin: "Pica pica", audio: "https://xeno-canto.org/sounds/uploaded/XXX/magpie.mp3", notes: "Distinctive call." },
      { name: "Nuthatch", count: 2, latin: "Sitta europaea", audio: "https://xeno-canto.org/sounds/uploaded/XXX/nuthatch.mp3", notes: "Creeps down trees headfirst." },
      { name: "Eurasian Jay", count: 2, latin: "Garrulus glandarius", audio: "https://xeno-canto.org/sounds/uploaded/XXX/jay.mp3", notes: "Colorful and loud." },
      { name: "Greenfinch", count: 2, latin: "Chloris chloris", audio: "https://xeno-canto.org/sounds/uploaded/XXX/greenfinch.mp3", notes: "Bright yellow flashes in flight." },
      { name: "Hawfinch", count: 2, latin: "Coccothraustes coccothraustes", audio: "https://xeno-canto.org/sounds/uploaded/XXX/hawfinch.mp3", notes: "Rare and bulky finch." },
      { name: "European Robin", count: 1, latin: "Erithacus rubecula", audio: "https://xeno-canto.org/sounds/uploaded/XXX/robin.mp3", notes: "Heard singing early morning." },
      { name: "Common Woodpigeon", count: 4, latin: "Columba palumbus", audio: "https://xeno-canto.org/sounds/uploaded/XXX/woodpigeon.mp3", notes: "Very common in parks." },
      { name: "European Green Woodpecker", count: 1, latin: "Picus viridis", audio: "https://xeno-canto.org/sounds/uploaded/XXX/green_woodpecker.mp3", notes: "Distinctive laughing call." },
      { name: "Great Spotted Woodpecker", count: 1, latin: "Dendrocopos major", audio: "https://xeno-canto.org/sounds/uploaded/XXX/spotted_woodpecker.mp3", notes: "Common but shy." },
      { name: "White Wagtail", count: 1, latin: "Motacilla alba", audio: "https://xeno-canto.org/sounds/uploaded/XXX/wagtail.mp3", notes: "Seen trotting along pavement." },
      { name: "Three-toed Woodpecker", count: 1, latin: "Picoides tridactylus", audio: "https://xeno-canto.org/sounds/uploaded/XXX/three_toed_woodpecker.mp3", notes: "Very uncommon." }
    ];

    const container = document.getElementById('bird-container');
    const sortSelect = document.getElementById('sort');

    function renderBirds(data) {
      container.innerHTML = '';
      data.forEach(bird => {
        const card = document.createElement('div');
        card.className = 'bird-card';
        card.innerHTML = `
          <h2>${bird.name}</h2>
          <p><em>${bird.latin}</em></p>
          <p>Count: ${bird.count}</p>
          <p>${bird.notes}</p>
          <audio controls src="${bird.audio}"></audio>
        `;
        container.appendChild(card);
      });
    }

    sortSelect.addEventListener('change', () => {
      const sortBy = sortSelect.value;
      const sorted = [...birds];
      if (sortBy === 'frequency') {
        sorted.sort((a, b) => b.count - a.count);
      } else {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
      }
      renderBirds(sorted);
    });

    // Initial render
    renderBirds(birds.sort((a, b) => b.count - a.count));
