
$('.location button').click(function(){
    for(var i=0;i<3;i++){
      $('.slide .map').html('<iframe class="p-4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799160891!2d-73.69948615489405!3d40.69767006338158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z2YbZitmI2YrZiNix2YPYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2sil!4v1664439100547!5m2!1sar!2sil" width="450" height="430" style="border:0;" class="text-center" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
      $('.slide').slideDown(1000);
      $('.slide').css('position','fixed');
    }
  })

  $('.slide .close').click(function(){
    $('.slide').slideUp(1000);
  })

  var mypost1=[];
  var mypost2=[];
  var mypost3=[];
  let httpReq=new XMLHttpRequest();
  create1();
  async function create1(){
    let respose=await fetch('https://forkify-api.herokuapp.com/api/search?q=blackberry');
    let data=await respose.json();
    mypost1=data.recipes;
    
    create2();
  }
  
  async function create2(){
    let respose1=await fetch('https://forkify-api.herokuapp.com/api/search?q=croissant');
    let data1=await respose1.json();
    mypost2=data1.recipes;
    create3();
  }
  async function create3(){
    let respose2=await fetch('https://forkify-api.herokuapp.com/api/search?q=broccoli');
    let data2=await respose2.json();
    mypost3=data2.recipes;
    display();
  }
  
  
  
  function display(){
    console.log(mypost1[1].title);
    var test='';
    for(var i=0;i<4;i++){
      if(i==3){
        test+=`<div class="col-md-4 text-center">
      <div class="d-flex p-3">
          <div class="me-3 div-img "><img src=${mypost1[i].image_url} class="Menu-img" width="83px" height="83px" /></div>
          <ul class="list-unstyled">
              <li class="content">${mypost1[i].title}</li>
              <li class="content">$${mypost1[i].social_rank}</li>
          </ul>
          
      </div>
      <div class="text-secondary">---------------------------------------</div>
      <a href="menu.html" class="btn Menu-btn p-1">More about blackberry</a></div>
      <div class="col-md-4  text-center">
      <div class="d-flex p-3">
          <div class="me-3 div-img "><img src=${mypost2[i].image_url} class="Menu-img" width="83px" height="83px" /></div>
          <ul class="list-unstyled">
              <li class="content">${mypost2[i].title}</li>
              <li class="content">$${mypost2[i].social_rank}</li>
          </ul>
      </div>
      <div class="text-secondary">---------------------------------------</div>
      <a href="menu.html" class="btn Menu-btn p-1">More about croissant</a>
      </div>
  
  </div>
  <div class="col-md-4  text-center">
      <div class="d-flex p-3">
          <div class="me-3 div-img "><img src=${mypost3[i].image_url} class="Menu-img" width="83px" height="83px" /></div>
          <ul class="list-unstyled">
          <li class="content">${mypost3[i].title}</li>
          <li class="content">$${mypost3[i].social_rank}</li>
      </ul>
      </div>
      <div class="text-secondary">---------------------------------------</div>
      <a href="menu.html" class="btn Menu-btn p-1">More about broccoli</a>
  </div>`
      }else{
      test+=`<div class="col-md-4  text-center">
      <div class="d-flex p-3">
          <div class="me-3 div-img "><img src=${mypost1[i].image_url} class="Menu-img" width="83px" height="83px" /></div>
          <ul class="list-unstyled ">
              <li class="content">${mypost1[i].title}</li>
              <li class="content">$${mypost1[i].social_rank}</li>
          </ul>
          
      </div>
      <div class="text-secondary">---------------------------------------</div></div>
      <div class="col-md-4  text-center">
      <div class="d-flex p-3">
          <div class="me-3 div-img "><img src=${mypost2[i].image_url} class="Menu-img" width="83px" height="83px" /></div>
          <ul class="list-unstyled">
              <li class="content">${mypost2[i].title}</li>
              <li class="content">$${mypost2[i].social_rank}</li>
          </ul>
      </div>
      <div class="text-secondary">---------------------------------------</div>
      </div>
  
  </div>
  <div class="col-md-4  text-center">
      <div class="d-flex p-3">
          <div class="me-3 div-img "><img class="Menu-img" src=${mypost3[i].image_url} width="83px" height="83px" /></div>
          <ul class="list-unstyled">
          <li class="content">${mypost3[i].title}</li>
          <li class="content">$${mypost3[i].social_rank}</li>
      </ul>
      </div>
      <div class="text-secondary">---------------------------------------</div>
  </div>`
    }}
    demo.innerHTML=test;
  }
