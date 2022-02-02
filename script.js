(function () {
  let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.nav');
  let body = document.querySelector('body');
  hljs.highlightAll();

  const toggleActive = ()=>{
    menuBtn.classList.toggle('menu--active');
    menu.classList.toggle('menu--active');
    body.classList.toggle('body-static'); //disable scroll
  }

  menuBtn.addEventListener('click', (e) => {
    toggleActive();
  })

  menu.addEventListener('click', (e) =>{
    const target = e.target.nodeName;
    if(!menu.classList.contains('menu--active'))
      return;

    if(target === 'A'){
      toggleActive();
    }
  });

})()
