// 1. Для каждого объекта в массиве infoCards создать карточку с двумя р (value, description) и добавить все карточки в div.info_cards_container

const infoCards = [
  {
    id: 1,
    value: "10",
    description: "УМК по различным направлениям по робототехнике"
  },
  {
    id: 2,
    value: "20",
    description: "Школ, в которых запущена робототехника"
  },
  {
    id: 3,
    value: "100",
    description: "Педагогов, прошедших курсы повышения квалификации"
  },
  {
    id: 4,
    value: "10 000",
    description: "Обученных детей на базе собственных центров"
  }
];

const infoCardsContainer = document.querySelector(".info_cards_container");
infoCards.map(({ value, description }) => {
  const infoCard = document.createElement("div");
  infoCard.classList.add("info_card");
  infoCard.innerHTML = `
        <p>${value}</p>
        <p>${description}</p>
    `;
  infoCardsContainer.appendChild(infoCard);
});

// 2. Для каждого объекта в массиве benefitsCards создать карточку с двумя р (benefit, description) и добавить все карточки в div.benefits_cards_container

const benefitsCards = [
  {
    id: 1,
    benefit: "Удостоверение",
    description:
      "Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях",
    info_btn: false
  },
  {
    id: 2,
    benefit: "Знания",
    description:
      "По основам разработки учебно-методических комплексов по робототехнике и программированию",
    info_btn: false
  },
  {
    id: 3,
    benefit: "Практику",
    description:
      "Возможность пройти практику по преподаванию робототехники на базе R:ED LAB (в оффлайн или онлайн формате)",
    info_btn: true
  }
];

const benefitsCardsContainer = document.querySelector(
  ".benefits_cards_container"
);
benefitsCards.map(({ benefit, description, info_btn }) => {
  const benefitCard = document.createElement("div");
  benefitCard.classList.add("benefit_card");
  benefitCard.innerHTML = `
        <p><span>${benefit}</span></p>
        <p>${description}</p>
    `;
  benefitsCardsContainer.appendChild(benefitCard);
});
// 3. При клике на иконку menu элементу nav добав}лять класс menu_active.
// При клике на крестик элементу nav удалять класс menu_active.

const navMenu = document.querySelector(".main_header nav");
const burgerMenuBtn = document.querySelector(".header_icons .fa-bars");
const closeMenuBtn = document.querySelector(".main_header nav .fa-xmark");

burgerMenuBtn.addEventListener("click", () => {
  navMenu.classList.add("menu_active");
});

closeMenuBtn.addEventListener("click", () => {
  navMenu.classList.remove("menu_active");
});

// 4. В div.teachers_cards_container отрисовать карточки преподавателей на основе массива teacherCards

// 6. При клике на кнопку "подробнее" у div.teacher_modal добавлять класс modal_active. При клике на кнопку "закрыть" - удалять класс modal_active у div.teacher_modal

const teacherCards = [
  {
    id: 1,
    avatar: "./media/t1.jpg",
    first_name: "Ирина",
    last_name: "Лайм",
    position: "преподаватель по робототехнике"
  },
  {
    id: 2,
    avatar: "./media/t2.jpg",
    first_name: "Марина",
    last_name: "Орлова",
    position: "преподаватель по робототехнике"
  },
  {
    id: 3,
    avatar: "./media/t3.jpg",
    first_name: "Максим",
    last_name: "Петров",
    position: "преподаватель по программированию"
  }
];

const teachersCardsContainer = document.querySelector(
  ".teachers_cards_container"
);
const teacherModal = document.querySelector(".teacher_modal");
const teacherModalContent = document.querySelector(".teacher_modal_content");
teacherCards.forEach(({ id, avatar, first_name, last_name, position }) => {
  const teacherCard = document.createElement("div");
  const avatarElem = document.createElement("img");
  const nameElem = document.createElement("p");
  const positionElem = document.createElement("p");
  const aboutElem = document.createElement("span");

  avatarElem.src = avatar;
  avatarElem.alt = first_name + " " + last_name;

  nameElem.innerText = first_name + " " + last_name;
  positionElem.innerText = position;
  aboutElem.innerText = "Подробнее";

  aboutElem.addEventListener("click", () =>
    teacherModal.classList.add("modal_active")
  );

  teachersCardsContainer.append(teacherCard);
  teacherCard.append(avatarElem, nameElem, positionElem, aboutElem);
});
const closeModal = document.querySelector(".close_modal_btn");
closeModal.addEventListener("click", () =>
  teacherModal.classList.remove("modal_active")
);
// 7. На сонове массива tariffsData в div.tariffs_cards_container добавить карточки тарифов.

const tariffsData = [
  {
    id: 1,
    title: "--- PRO ---",
    price: "20.000",
    description: "УМК по робототетхнике и программированию"
  },
  {
    id: 2,
    title: "--- ROBO ---",
    price: "15.000",
    description: "УМК по робототетхнике "
  },
  {
    id: 3,
    title: "--- PROG ---",
    price: "10.000",
    description: "УМК по программированию"
  }
];

const tariffsContainer = document.querySelector(".tariffs_cards_container");
tariffsData.map(({ title, price, description }) => {
  const tariffCard = document.createElement("div");
  tariffCard.classList.add("tariff_card");
  tariffCard.innerHTML = `
        <p>${title} </p>
        <p>${price}</p>
        <p>${description}</p>
        <div>Оставить заявку</div>
    `;
  tariffsContainer.appendChild(tariffCard);
});
