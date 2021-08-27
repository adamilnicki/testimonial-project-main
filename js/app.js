let customer = [
  {
    image: "img/customer-0.jpg",
    customer: "JOHN",
    testimonial: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Officiis neque reprehenderit laborum, corporis explicabo assumenda. 
    Porro impedit consectetur animi, reprehenderit recusandae 
    sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?`,
  },
  {
    image: "img/customer-1.jpg",
    customer: "SANDY",
    testimonial: `Contrary to popular belief, Lorem Ipsum is not simply random text. 
    It has roots in a piece of classical Latin literature from 45 BC, 
    making it over 2000 years old. Richard McClintock`,
  },
  {
    image: "img/customer-2.jpg",
    customer: "AMY",
    testimonial: `There are many variations of passages of Lorem Ipsum available, 
    but the majority have suffered alteration in some form, by injected humour, 
    or randomised words which don't look even slightly believable.`,
  },
  {
    image: "img/customer-3.jpg",
    customer: "TYRELL",
    testimonial: `If you are going to use a passage of Lorem Ipsum, 
    you need to be sure there isn't anything embarrassing hidden in the middle of text.`,
  },
  {
    image: "img/customer-4.jpg",
    customer: "WANDA",
    testimonial: `Lorem Ipsum has been the industry's standard 
    dummy text ever since the 1500s, 
    when an unknown printer took a galley of type 
    and scrambled it to make a type specimen book.`,
  },
];

let prevBtn = document.querySelector(".prevBtn");
let nextBtn = document.querySelector(".nextBtn");
let customerImg = document.querySelector("#customer-img");
let customerName = document.querySelector("#customer-name");
let customerText = document.querySelector("#customer-text");
let i = 0;

nextBtn.addEventListener("click", function () {
	if(i < 4){
		i++;
	}else{
		i = 0;
	}
  customerImg.src = customer[i].image;
  customerName.innerHTML = customer[i].customer;
  customerText.innerHTML = customer[i].testimonial;
});
prevBtn.addEventListener("click", function () {
	if(i > 0){
		i--;
	}else{
		i = 4;
	}
  customerImg.src = customer[i].image;
  customerName.innerHTML = customer[i].customer;
  customerText.innerHTML = customer[i].testimonial;
});
