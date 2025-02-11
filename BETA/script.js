// Fonction pour calculer le nombre de dominoes pour une pyramide 3D
function calculate3DPyramid() {
const size = parseInt(document.getElementById('size3D').value);
const resultElement = document.getElementById('result3D');
if (size > 50000) {
    resultElement.textContent = "Error: The number is too high.";
        return;
}
const totalDominos = calculatePyramidDominosAdapted(size);
resultElement.textContent = `You will need ${totalDominos} dominoes for a 3D pyramid of size ${size}x${size}`;
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Fonction pour calculer le nombre de dominoes pour une pyramide 2D
function calculate2DPyramid() {
const size = parseInt(document.getElementById('size2D').value);
const resultElement = document.getElementById('result2D');
if (size > 50000) {
    resultElement.textContent = "Error: The number is too high.";
    return;
}
const totalDominos = calculate2DPyramidDominos(size);
resultElement.textContent = `You will need ${totalDominos} dominoes for a 2D pyramid of size ${size}`;
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Fonction pour calculer le nombre de dominos pour une speed pyramide 2D
function calculateSpeedPyramid() {
const size = parseInt(document.getElementById('sizeSpeed').value);
const resultElement = document.getElementById('resultSpeed');
if (size > 50000) {
    resultElement.textContent = "Error: The number is too high.";
    return;
}

if (size % 2 !== 0) {
    resultElement.textContent = "Invalid size: The size must be an even number.";
    return;
}

const totalDominos = calculateSpeedDominosPyramid(size);
resultElement.textContent = `You will need ${totalDominos} dominoes for a 2D speed wall of size ${size}`;
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Fonction pour calculer le nombre de dominoes pour un "cube"
function calculateCube() {
const width = parseInt(document.getElementById('width').value);
const length = parseInt(document.getElementById('length').value);
const height = parseInt(document.getElementById('height').value);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Vérifier les conditions minimales : largeur >= 2, longueur >= 4, hauteur >= 1
if (width > 50000 || length > 50000 || height > 50000) {
    const resultElement = document.getElementById('resultCube');
    resultElement.textContent = "Error: The number is too high.";
    return;
}
if (length % 2 !== 0) {
    const resultElement = document.getElementById('resultCube');
    resultElement.textContent = "Invalid length: The length must be an even number.";
    return;
}
if (width === 222 && length === 222 && height === 222) {
    document.querySelectorAll('.frame1, .frame2, .frame3, .frame4').forEach(element => {
        element.classList.add('rainbow');
    });
    const audio = document.getElementById('ZAudio');
    audio.play();
    audio.onended = () => {
        document.querySelectorAll('.frame1, .frame2, .frame3, .frame4').forEach(element => {
            element.classList.remove('rainbow');
        });
    };
}
if (width >= 2 && length >= 4 && height >= 1) {
    const totalDominos = width * length * height;
    const resultElement = document.getElementById('resultCube');
    resultElement.textContent = `You will need ${totalDominos} dominoes for a cube of size ${width}x${length}x${height}`;
} else {
    const resultElement = document.getElementById('resultCube');
    resultElement.textContent = "Invalid dimensions. Width must be >= 2, length >= 4, and height >= 1.";
    }
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Algorithme adapté pour la pyramide 3D
function calculatePyramidDominosAdapted(n) {
    let total = 0;                             // Initialise la variable 'total' à 0. Elle contiendra le nombre total de dominos nécessaires
    let largeur = n;                           // Initialise 'largeur' à la valeur de 'n', qui représente la largeur de la base de la pyramide
    let longueur = n;                          // Initialise 'longueur' à la valeur de 'n', qui représente la longueur de la base de la pyramide
    while (largeur > 0 && longueur > 0) {      // Tant que la largeur et la longueur sont supérieures à 0, on continue de calculer les dominos
        total += largeur * longueur;           // Ajoute à 'total' l'aire du rectangle de largeur × longueur correspondant à l'étage actuel
        if (longueur === largeur) {            // Si la longueur et la largeur sont égales, cela signifie que l’étage est un carré
            longueur -= 1;                     // On réduit la longueur de 1 pour le prochain étage
        } else {                               // Sinon, si la longueur et la largeur ne sont pas égales :
            largeur -= 1;                      // On réduit la largeur de 1 pour le prochain étage
        }
    }
    return total;                              // Renvoie le nombre total de dominos nécessaires pour construire la pyramide
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Algorithme adapté pour la speed pyramid 2D
function calculateSpeedDominosPyramid(n) {
    let total = 0;
    let longueur = n;
    while (longueur > 0) {
        total += longueur; // Ajoute la valeur actuelle de longueur au total
        total += longueur / 2; // Ajoute la moitié de longueur au total
        longueur -= 2; // Réduit longueur de 2 pour passer à l'étape suivante
    }
    return total;
}
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  // Sélectionner toutes les classes DBC
  const classes = [
    "DBC-French",
    "DBC-Deutsch",
    "DBC-日本語",
    "DBC-Polski",
    "DBC-Русский",
    "DBC-Türkçe",
    "DBC-Español",
    "DBC-Português",
    "DBC-Svenska",
    "DBC-中文",
    "DBC-ภาษาไทย"
  ];

  classes.forEach(className => {
    const element = document.querySelector(`.${className}`);
    if (element) {
      element.addEventListener("click", () => {
        // Afficher les erreurs
        document.querySelector(".Error1").style.display = "block";
        document.querySelector(".Error2").style.display = "block";
        document.querySelector(".Error3").style.display = "block";
        document.querySelector(".Error4").style.display = "block";
        document.querySelector(".Error5").style.display = "block";
      });
    }
  });
  
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

document.querySelector('.Error3').addEventListener('click', () => {
  const errors = ['.Error1', '.Error2', '.Error3', '.Error4', '.Error5'];
  
  errors.forEach(selector => {
    const element = document.querySelector(selector);
    if (element) {
      element.style.display = 'none'; // Masque l'élément
    }
  });
});

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Ajouter les événements pour les boutons "up" et "down"

const elements = [
  {
    input: document.getElementById('size2D'),
    buttonUp: document.querySelector('.button-up2'),
    buttonDown: document.querySelector('.button-down2')
  },
  {
    input: document.getElementById('size3D'),
    buttonUp: document.querySelector('.button-up'),
    buttonDown: document.querySelector('.button-down')
  },
  {
    input: document.getElementById('sizeSpeed'),
    buttonUp: document.querySelector('.button-up3'),
    buttonDown: document.querySelector('.button-down3')
  },
  {
    input: document.getElementById('width'),
    buttonUp: document.querySelector('.button-up4-1'),
    buttonDown: document.querySelector('.button-down4-1')
  },
  {
    input: document.getElementById('length'),
    buttonUp: document.querySelector('.button-up4-2'),
    buttonDown: document.querySelector('.button-down4-2')
  },
  {
    input: document.getElementById('height'),
    buttonUp: document.querySelector('.button-up4-3'),
    buttonDown: document.querySelector('.button-down4-3')
  }
];

elements.forEach(({ input, buttonUp, buttonDown }) => {
  let intervalUp, intervalDown;
  let timeoutUp, timeoutDown;

  buttonUp.addEventListener('click', () => {
    input.stepUp();
  });

  buttonDown.addEventListener('click', () => {
    input.stepDown();
  });

  buttonUp.addEventListener('mousedown', () => {
    timeoutUp = setTimeout(() => {
      intervalUp = setInterval(() => {
        input.stepUp();
      }, 100);
    }, 100);
  });

  buttonUp.addEventListener('mouseup', () => {
    clearTimeout(timeoutUp);
    clearInterval(intervalUp);
  });

  buttonUp.addEventListener('mouseout', () => {
    clearTimeout(timeoutUp);
    clearInterval(intervalUp);
  });

  buttonDown.addEventListener('mousedown', () => {
    timeoutDown = setTimeout(() => {
      intervalDown = setInterval(() => {
        input.stepDown();
      }, 100);
    }, 100);
  });

  buttonDown.addEventListener('mouseup', () => {
    clearTimeout(timeoutDown);
    clearInterval(intervalDown);
  });

  buttonDown.addEventListener('mouseout', () => {
    clearTimeout(timeoutDown);
    clearInterval(intervalDown);
  });
});

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Algorithme pour la pyramide 2D
function calculate2DPyramidDominos(n) {
    return (n * (n + 1)) / 2; // Formule pour la somme des nombres premiers entiers
}

window.addEventListener('DOMContentLoaded', () => {
    // Réinitialise les valeurs des champs input
    document.getElementById('size3D').value = 1;
    document.getElementById('size2D').value = 1;
    document.getElementById('sizeSpeed').value = 2;
    document.getElementById('width').value = 2;
    document.getElementById('length').value = 4;
    document.getElementById('height').value = 1;
});

document.querySelector('.languages_menu').addEventListener('click', function() {
  // Les DBC langues
  document.querySelector('.DBC-French').classList.toggle('animate');
  document.querySelector('.DBC-Deutsch').classList.toggle('animate');
  document.querySelector('.DBC-日本語').classList.toggle('animate');
  document.querySelector('.DBC-Polski').classList.toggle('animate');
  document.querySelector('.DBC-Русский').classList.toggle('animate');
  document.querySelector('.DBC-Türkçe').classList.toggle('animate');
  document.querySelector('.DBC-Español').classList.toggle('animate');
  document.querySelector('.DBC-Português').classList.toggle('animate');
  document.querySelector('.DBC-Svenska').classList.toggle('animate');
  document.querySelector('.DBC-中文').classList.toggle('animate');
  document.querySelector('.DBC-ภาษาไทย').classList.toggle('animate');
  // Les textes langues
  document.querySelector('.French-text').classList.toggle('animate');
  document.querySelector('.Deutsch-text').classList.toggle('animate');
  document.querySelector('.日本語-text').classList.toggle('animate');
  document.querySelector('.Polski-text').classList.toggle('animate');
  document.querySelector('.Русский-text').classList.toggle('animate');
  document.querySelector('.Türkçe-text').classList.toggle('animate');
  document.querySelector('.Español-text').classList.toggle('animate');
  document.querySelector('.Português-text').classList.toggle('animate');
  document.querySelector('.Svenska-text').classList.toggle('animate');
  document.querySelector('.中文-text').classList.toggle('animate');
  document.querySelector('.ภาษาไทย-text').classList.toggle('animate');  
  // Les drapeaux
  document.querySelector('.Selection3').classList.toggle('animate');
  document.querySelector('.Selection4').classList.toggle('animate');
  document.querySelector('.Selection5').classList.toggle('animate');
  document.querySelector('.Selection6').classList.toggle('animate');
  document.querySelector('.Selection7').classList.toggle('animate');
  document.querySelector('.Selection8').classList.toggle('animate');
  document.querySelector('.Selection9').classList.toggle('animate');
  document.querySelector('.Selection10').classList.toggle('animate');
  document.querySelector('.Selection11').classList.toggle('animate');
  document.querySelector('.Selection12').classList.toggle('animate');
  document.querySelector('.Selection13').classList.toggle('animate');
});
    