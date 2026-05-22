const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const storyText = document.getElementById('storyText');
const choiceGrid = document.getElementById('choiceGrid');
const statusText = document.getElementById('statusText');
const nameInput = document.getElementById('nameInput');
const classSelect = document.getElementById('classSelect');
const healthValue = document.getElementById('healthValue');
const magickaValue = document.getElementById('magickaValue');
const dragonSoulValue = document.getElementById('dragonSoulValue');

const scenes = {
  start: {
    text: "You arrive at the gates of Whiterun as dragons stir above the Greybeards' mountain. The old prophecies whisper of a Dragonborn's first trial.",
    choices: [
      { label: 'Seek counsel at Jorrvaskr', next: 'jorrvaskr' },
      { label: 'Climb toward High Hrothgar', next: 'hrothgar' }
    ]
  },
  jorrvaskr: {
    text: "A Nord warrior greets you. He speaks of a stormcloak raid and a dragon seen near Bleak Falls Barrow.",
    choices: [
      { label: 'Join the hunting party', next: 'hunter' },
      { label: 'Explore the barrow alone', next: 'barrow' }
    ]
  },
  hrothgar: {
    text: "The wind cuts deep as you climb. The Greybeards sense your voice and say the Dragonborn must prove their Thu'um.",
    choices: [
      { label: 'Shout with all your power', next: 'shout' },
      { label: 'Train in shadow and patience', next: 'stealth' }
    ]
  },
  hunter: {
    text: "The hunting party finds a dragon's remains. Your blade proves true, and you recover a dragonbone dagger.",
    effect: (state) => {
      state.inventory.push('Dragonbone Dagger');
      state.health += 10;
      state.dragonSoul += 2;
    },
    next: 'barrow'
  },
  barrow: {
    text: "Inside Bleak Falls Barrow you find a glowing Word Wall and an echoed whisper of power.",
    choices: [
      { label: 'Learn the shout from the wall', next: 'wordWall' },
      { label: 'Claim the hidden ring', next: 'ring' }
    ]
  },
  shout: {
    text: "Your voice shakes the mountain. The Greybeards nod in approval, and the Thu'um flows through you.",
    effect: (state) => {
      state.magicka += 15;
      state.dragonSoul += 3;
    },
    next: 'rival'
  },
  stealth: {
    text: "You move like a shadow. Your senses sharpen and the climb becomes a quiet test of patience.",
    effect: (state) => {
      state.dragonSoul += 1;
    },
    next: 'rival'
  },
  wordWall: {
    text: "You study the ancient word. It grants you a new shout and a surge of arcane energy.",
    effect: (state) => {
      state.magicka += 20;
      state.dragonSoul += 2;
      state.inventory.push('Unrelenting Force');
    },
    next: 'rival'
  },
  ring: {
    text: "The ring pulses with hidden magic. You slip it on and feel luck walk beside you.",
    effect: (state) => {
      state.health += 8;
      state.magicka += 5;
      state.inventory.push('Ring of the Gray Fox');
    },
    next: 'rival'
  },
  rival: {
    text: "A rival Dragonborn steps forward in the cold ruins. Their eyes burn with draconic power.",
    choices: [
      { label: 'Shout them down', next: 'dragonborn' },
      { label: 'Strike from the shadows', next: 'shadow' },
      { label: 'Offer peace and knowledge', next: 'peace' }
    ]
  },
  dragonborn: {
    text: "You unleash the Thu'um. The rival yields, and the voice of the dragons acknowledges your destiny.",
    effect: (state) => {
      state.magicka -= 15;
      state.dragonSoul += 4;
      state.inventory.push('Dragon Shout');
    },
    end: true
  },
  shadow: {
    text: "You strike from the darkness with deadly precision. The rival falls, but the victory leaves a cold weight behind.",
    effect: (state) => {
      state.health -= 12;
      state.dragonSoul += 2;
      state.inventory.push('Nightingale Gear');
    },
    end: true
  },
  peace: {
    text: "Your calm words win trust. The rival shares a secret map to a lost dragon altar.",
    effect: (state) => {
      state.magicka += 10;
      state.dragonSoul += 1;
      state.inventory.push('Secret Map');
    },
    end: true
  }
};

const defaultState = () => ({
  name: 'Dovahkiin',
  class: 'Dragonborn',
  health: 120,
  magicka: 70,
  dragonSoul: 14,
  inventory: [],
  currentScene: 'start'
});

let state = defaultState();

function updateDisplay() {
  nameInput.value = state.name;
  classSelect.value = state.class;
  healthValue.textContent = state.health;
  magickaValue.textContent = state.magicka;
  dragonSoulValue.textContent = state.dragonSoul;
  statusText.textContent = `${state.name} the ${state.class} prepares to claim Skyrim.`;

  const scene = scenes[state.currentScene];
  storyText.textContent = scene.text;
  choiceGrid.innerHTML = '';

  if (scene.effect && !scene.choices) {
    scene.effect(state);
    if (scene.next) {
      state.currentScene = scene.next;
      return updateDisplay();
    }
  }

  if (scene.choices) {
    scene.choices.forEach((choice) => {
      const button = document.createElement('button');
      button.className = 'choice-button';
      button.textContent = choice.label;
      button.addEventListener('click', () => {
        state.currentScene = choice.next;
        updateDisplay();
      });
      choiceGrid.appendChild(button);
    });
  } else if (scene.end) {
    const result = document.createElement('p');
    result.textContent = `Final result: Health ${state.health}, Magicka ${state.magicka}, Dragon Soul ${state.dragonSoul}. Inventory: ${state.inventory.join(', ') || 'none'}.`;
    result.style.marginTop = '14px';
    result.style.color = 'var(--success)';
    choiceGrid.appendChild(result);
  }
}

function startAdventure() {
  state.name = nameInput.value.trim() || 'Dovahkiin';
  state.class = classSelect.value;
  state.currentScene = 'start';
  state.health = 120;
  state.magicka = classSelect.value === 'Mage' ? 90 : classSelect.value === 'Dragonborn' ? 70 : classSelect.value === 'Thief' ? 60 : 80;
  state.dragonSoul = classSelect.value === 'Dragonborn' ? 14 : classSelect.value === 'Warrior' ? 10 : classSelect.value === 'Mage' ? 12 : 11;
  state.inventory = [];
  updateDisplay();
}

function resetAdventure() {
  state = defaultState();
  updateDisplay();
}

startButton.addEventListener('click', startAdventure);
resetButton.addEventListener('click', resetAdventure);
nameInput.addEventListener('input', () => {
  state.name = nameInput.value.trim() || 'Dovahkiin';
  updateDisplay();
});
classSelect.addEventListener('change', () => {
  state.class = classSelect.value;
  updateDisplay();
});

updateDisplay();
