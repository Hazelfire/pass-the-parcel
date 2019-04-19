function createWrapperFunction(print, func) {
  return () => {
    console.log(print);
    return func;
  };
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let prizes = shuffle([
  'Paperclip',
  'I love canada badge',
  'Paper',
  'Pencil',
  'Blue Socks',
  'Bragging Rights',
  'Virginity',
  'A life',
  'Friends',
  'Parents who cared',
  'Cancer',
  'Beans',
  'Coal',
  'Strand of hair from Justin Beiber',
  'Student debt',
]);

let length = prizes.length;

let finalPrize = () => () => {
  console.log('$20! Congratulations');
};

let parcel = finalPrize();

for (let i = 0; i < prizes.length; i++) {
  parcel = createWrapperFunction(prizes[i], parcel);
}

module.exports = parcel;
