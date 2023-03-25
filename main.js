const navItems = document.querySelector('.nav-menu');
const openMenu = document.querySelector('.hamburger');
const allSpeakers = document.querySelector('.our-feature');

const closeMenu = document.querySelector('.close-btn');

function show() {
  navItems.style.display = 'flex';
  navItems.style.right = '0';
}

function close() {
  navItems.style.right = '100%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

document.querySelectorAll('.item');
navItems.addEventListener('click', () => {
  navItems.style.right = '100%';
});

const person = [
  {
    Name: 'Yochai BenKler',
    Title: 'Berkamn professor of enterprenuerial Legal Studies at Harvard Law School',
    Description: 'Benkler studies commons-based on peers production and publish seminal book the wealth of network in 2006.',
    Img: './img/featured-img/yochai.JPG',
    Alt: 'speaker1',
  },
  {
    Name: 'SohYeong Noh',
    Title: 'Director life wikipedians',
    Description: 'As the new main venue for media art production in korea,Nabi promotes cross descipline collabration and understanding among science technology, humanities,and the art',
    Img: './img/featured-img/noh.JPG',
    Alt: 'speaker2',
  },
  {
    Name: 'Lila Tretikov',
    Title: 'Executive Director of the wikimedia Foundation',
    Description: 'Lila Tretikov is Executive Director of the wikimedia Foundation, is non proofitable organisation that operate wikipedia, wikipedia is freely in 209 lanugages and used by nearly half a bellion people around every a month ',
    Img: './img/featured-img/lila.JPG',
    Alt: 'speaker3',
  },
  {
    Name: 'Kilnam Chon',
    Title: '',
    Description: 'Kilnam Chon helped in bring the internet to Asia s and is an outspokenadvocate for the open web and digital commons.In 2012,he was inducated into the inuagural class of the internet Hall of fame',
    Img: './img/featured-img/kilnam chon.JPG',
    Alt: 'speaker4',
  },
  {
    Name: 'Lilia Leda',
    Title: 'Presodent of younger pirates of Europe',
    Description: 'European intergration, political gemocracy and partipation of youth through onlineas her major conditions.Reda"s report outlining  potential to EU copyright law approved by parliament in july.',
    Img: './img/featured-img/julia leda.jpg',
    Alt: 'speaker5',
  },
  {
    Name: 'Ryan  Merkley',
    Title: 'CEO`S of  Creative Commons, Ex COO of the mozilla Foundation',
    Description: ' Ryan has been leading open source projects at the Mizzila Foundation such as the source movement',
    Img: './img/featured-img/ryanmerkley.jpg',
    Alt: 'speaker6',
  }];

function guestSpeakers() {
  let speakerOut = '';
  for (let i = 0; i < person.length; i += 1) {
    speakerOut += `<div class="feature-detail">
          <div class="img-speaker">
            <div class="pic-speaker">
                <img src="./img/pixel-bg.jpg" alt="pixel-bg">
            </div>
                <div class="image-feature">
                <img src="${person[i].Img}">
              </div>
        </div>
        <div class="text-feature">
          <h2 class="name">${person[i].Name}</h2>
          <p class="title-speaker">${person[i].Title}</h2>
            <hr class="line-3"/>
          <p class="speaker-description">${person[i].Description}.</p>
        </div>
      </div>
      </div>`;
  }

  allSpeakers.innerHTML = speakerOut;
}

guestSpeakers();

const loadMoreBtn = document.querySelector('#load-more');
let currentItem = 2;

loadMoreBtn.onclick = () => {
  const boxes = person[document.querySelectorAll('.feature-detail')];
  for (let i = currentItem; i < currentItem + 2; i += 1) {
    person[i].style.display = 'flex';
  }
  currentItem += 2;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = 'none';
  }
};
