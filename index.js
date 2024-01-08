 const menu=[
    {
        id:1,
        title:"Spinach",
        category:"Lunch",
        price:" 10",
        image:"./img1.jpg",
        desc:"This vegatable is rich in  vitamin A. Good for your eyesight. You would never want to miss in you dish "
    },
    {
        id:2,
        title:"Panck",
        category:"Shakes",
        price:" 15",
        image:"./img11.jpg",
        desc:"These fruit is grown in natural rainy water.This is crushed and added to you soup"
    },
    {
        id:3,
        title:"Avocado",
        category:"Lunch",
        price:" 20",
        image:"./img3.jpg",
        desc:"For skin and to keep your sel hydrated,take a juice of this green drupe and you will nevr regret it"
    },
    {
        id:4,
        title:"Ripe Grapes",
        category:"Breakfast",
        price:" 10",
        image:"./img4.jpg",
        desc:"Here for you favourite drink.Do you drink wine.Try this one"
    },
    {
        id:5,
        title:"Red berry",
        category:"Lunch",
        price:" 25",
        image:"./img13.jpg",
        desc:"To better your meal , do not miss on having a red berry in your table "
    },
    {
        id:6,
        title:"Apples",
        category:"Shakes",
        price:"12",
        image:"./img6.jpg",
        desc:"The love fruit is available.Give your self some treatment every day by bitting one"
    },
    {
        id:7,
        title:"Cucumber",
        category:"Breakfast",
        price:"12",
        image:"./img10.jpg",
        desc:"Your diet some of this.Get a different types of the plant at our stores"
    },
    
    {
        id:7,
        title:"Kale",
        category:"Dinner",
        price:"12",
        image:"./img10.jpg",
        desc:"Your diet some of this.Get a different types of the plant at our stores"
    }
 ]

 const sectionCenter=document.querySelector('.section-center');




 const sidebar=document.querySelector('.aside')
 const cross =document.querySelector('.bi-x');
 const navList=document.querySelector('.bi-list');
 const cartItem=document.querySelector('.cart-items');
 const addbtn=document.querySelector('.addto-cart')
 const cartbtn=document.querySelectorAll('.addto-cart');

 const container=document.querySelector('.btns-container')
 //filter btns
 const filterbtns=document.querySelectorAll('.filter-btn');




 cross.addEventListener('click',()=>{
   sidebar.classList.toggle('aside-hide');
 });


 navList.addEventListener('click',()=>{
    sidebar.classList.toggle('aside-hide');
  });
  //load items
 window.addEventListener('DOMContentLoaded',()=>{
    showMenu(menu);
    displayMenuButtons();
  
  });

    //rendering dynamically;
  function showMenu(menuItems){
    let displayItem=menuItems.map((item)=>{
        //console.log(item)
        return `<article class="menu-item">
        <img src=${item.image} width="350" height="200" class="photo" alt=${item.title}>
        <div class="item-info">
            <header>
                <h4 class="item-name"> ${item.title}</h4>
                <h4> <span class="dollar">$</sapn><span class="price">${item.price}</span></h4>
            </header>
            <hr>
    
            <p class="item-text">${item.desc}</p>
            
          
        </div>
        <button class="addto-cart">Add To Cart</button>
    </article>`;
        
    
   });
   displayItem=displayItem.join("");
   sectionCenter.innerHTML=displayItem;
  }

  //filter items
  
  

 

 // rendering menu btns

 function displayMenuButtons(){
  // setting categories using reduce method
    const categories=menu.reduce((values,item)=>{
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    },
    ["all"]
    );
    // adding btns to categories
    const categoryBtns=categories.map((category)=>{
    return `<button  class="filter-btn" type="button"data-id=${category}>${category}</button>`
    }).join("");

    //grab btn container fron html
    container.innerHTML=categoryBtns;
    //get the btns to render the item dependimg on categories
     const filterbtns=container.querySelector('.filter-btn');
     filterbtns.forEach((btn)=>{
      btn.addEventListener('click',(e)=>{
      const category=e.currentTarget.dataset.id;
      const menuCategory=menu.filter((menuitem)=>{
          if(menuitem.category===category){
              return menuitem;
          }
      });
      
      if(category==="all"){
          return showMenu(menu);
      }
      else{
          showMenu(menuCategory);
      }
  });
  });
  
 }

 const cartQuantity=0;

 /*cartbtn.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
    const Btn=e.currentTarget.id;
    console.log(Btn)

    })
 })*/

cartbtn.addEventListener('click',()=>{
    cartQuantity++;
    cartItem.innerHTML=cartQuantity;

})
 console.log(cartbtn);