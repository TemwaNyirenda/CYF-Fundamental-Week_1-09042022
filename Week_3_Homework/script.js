// Buttons in the header
document.getElementById('one').addEventListener('click', (event) => {
	event.target.style.backgroundColor = '#FFFFFF';
	event.target.style.color = '#d6502b';
  });
  
  document.getElementById('two').addEventListener('click', (event) => {
	event.target.style.backgroundColor = '#FFFFFF';
	event.target.style.color = '#d6502b';
  });
  document.getElementById('three').addEventListener('click', (event) => {
	event.target.style.backgroundColor = '#FFFFFF';
	event.target.style.color = '#d6502b';
  });

// Storybook

var page_number, page_input, pages;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}

// Describe this function...
function fill_in_buttons_and_page_number() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_page_number = document.getElementById('page_number');
  element_page_number.innerText = page_number;
  let element_previous_page = document.getElementById('previous_page');
  element_previous_page.innerText = 'Previous Page';
  let element_next_page = document.getElementById('next_page');
  element_next_page.innerText = 'Next Page';
}

// Describe this function...
function fill_in_elements() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  if (page_number == 0) {
    fill_in_buttons_and_page_number();
    let element_previous_page2 = document.getElementById('previous_page');
    element_previous_page2.innerText = '\0';
    let element_h2 = document.getElementById('h2');
    element_h2.setAttribute("class", 'h2-center');
    element_h2.innerText = 'Welcome';
    let element_paragraph = document.getElementById('paragraph');
    element_paragraph.replaceChildren();
    element_paragraph.innerText = 'Change the page by clicking the "Next Page"/"Previous Page" button or use the "Go" button to select a page or use the nav bar';
  } else if (page_number == 1) {
    fill_in_buttons_and_page_number();
    let element_h22 = document.getElementById('h2');
    element_h22.setAttribute("class", 'h2-left');
    element_h22.innerText = 'My background';
    let element_paragraph2 = document.getElementById('paragraph');
    element_paragraph2.replaceChildren();
    element_paragraph2.innerText = 'Hello, my name is Temwa Nyirenda. I was born in South Africa and have spent the majority of my life here. Both my parents were born in Malawi, and that is where the majority of my extended family still live. I am the middle child and have one older brother and one younger sister. I’m extremely close to my family and I try to spend as much time with them as I can.';
  } else if (page_number == 2) {
    fill_in_buttons_and_page_number();
    let element_h23 = document.getElementById('h2');
    element_h23.setAttribute("class", 'h2-right');
    element_h23.innerText = 'My interests and hobbies';
    let element_paragraph3 = document.getElementById('paragraph');
    element_paragraph3.replaceChildren();
    element_paragraph3.innerText = 'In my spare time, I enjoy watching k-dramas and anime. I also enjoy playing chess and squash. I’ve been playing squash on and off for child (it was a family pastime), but I’m pretty sure I’d still be considered close to a novice, I’m not that good. Lastly, I’m trying to learn Chichewa, my mother’s mother tongue. Chichewa is also known as Nyanja and is spoken in Malawi, Zambia, Mozambique, and Zimbabwe.';
  } else if (page_number == 3) {
    fill_in_buttons_and_page_number();
    let element_h24 = document.getElementById('h2');
    element_h24.setAttribute("class", 'h2-left');
    element_h24.innerText = 'Why software development?';
    let element_paragraph4 = document.getElementById('paragraph');
    element_paragraph4.replaceChildren();
    element_paragraph4.innerText = 'I think that the ability to program a computer is really fascinating. I want to be able to build computer programs and know how to design how they will look to the people who use those programs. Personally, I wouldn’t call myself artistic, but being able to use code to make something aesthetically pleasing as well as efficient and useful for the end-user is something that I want to learn how to do.';
  } else if (page_number == 4) {
    fill_in_buttons_and_page_number();
    let element_next_page2 = document.getElementById('next_page');
    element_next_page2.innerText = '\0';
    let element_h25 = document.getElementById('h2');
    element_h25.setAttribute("class", 'h2-right');
    element_h25.innerText = 'Why CodeYourFuture?';
    let element_paragraph5 = document.getElementById('paragraph');
    element_paragraph5.replaceChildren();
    element_paragraph5.innerText = 'What I hope to gain from the CodeYourFuture course is the skills needed to start a professional job as a developer. I need practical experience in coding and I know that I would gain this by going through this program. There is also the added benefit that CodeYourFuture is both flexible and part-time, so I know that I’ll be able to stay on top of the assignments needed and still be able to work..';
  }
}


page_number = 0;
pages = [0, 1, 2, 3, 4];
fill_in_elements();


document.getElementById('previous_page').addEventListener('click', (event) => {
  if (page_number == 4) {
    page_number = 3;
    fill_in_elements();
  } else if (page_number == 3) {
    page_number = 2;
    fill_in_elements();
  } else if (page_number == 2) {
    page_number = 1;
    fill_in_elements();
  } else if (page_number == 1) {
    page_number = 0;
    fill_in_elements();
  }

});

document.getElementById('next_page').addEventListener('click', (event) => {
  if (page_number == 0) {
    page_number = 1;
    fill_in_elements();
  } else if (page_number == 1) {
    page_number = 2;
    fill_in_elements();
  } else if (page_number == 2) {
    page_number = 3;
    fill_in_elements();
  } else if (page_number == 3) {
    page_number = 4;
    fill_in_elements();
  }

});

document.getElementById('go').addEventListener('click', (event) => {
  page_input = getNumberOrString(document.getElementById('go_to_page').value);
  if (page_input == 0) {
    page_number = 0;
    fill_in_elements();
  } else if (page_input == 1) {
    page_number = 1;
    fill_in_elements();
  } else if (page_input == 2) {
    page_number = 2;
    fill_in_elements();
  } else if (page_input == 3) {
    page_number = 3;
    fill_in_elements();
  } else if (page_input == 4) {
    page_number = 4;
    fill_in_elements();
  }

});
let element_page1 = document.getElementById('page1');

element_page1.addEventListener('click', (event) => {
  page_number = 1;
  fill_in_elements();

});
let element_page2 = document.getElementById('page2');

element_page2.addEventListener('click', (event) => {
  page_number = 2;
  fill_in_elements();

});
let element_page3 = document.getElementById('page3');

element_page3.addEventListener('click', (event) => {
  page_number = 3;
  fill_in_elements();

});
let element_page4 = document.getElementById('page4');

element_page4.addEventListener('click', (event) => {
  page_number = 4;
  fill_in_elements();

});

// Comment Section

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('comment').addEventListener('click', (event) => {
  let element_comment_list = document.getElementById('comment_list');
  let new_div = document.createElement('div');
  new_div.setAttribute("class", 'comments');
  new_div.innerText = getNumberOrString(document.getElementById('write_comment').value);

  element_comment_list.appendChild(new_div);

});
