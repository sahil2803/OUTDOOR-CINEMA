function pop(toHide, toShow) {
  let show = document.getElementById(toShow) === null ? document.querySelectorAll(toShow) : [document.getElementById(toShow)];
  let hide = document.getElementById(toHide) === null ? document.querySelectorAll(toHide) : [document.getElementById(toHide)];

  // Show elements
  show.forEach(element => {
      element.style.transform = 'translateX(450px)';
       
  });
  // Hide elements
  hide.forEach(element => {
      element.style.transform = 'translateX(450px)';
  });
}
function show(toShow){
  let it = document.getElementById(toShow);
  it.style.display='block';
  it.focus();
}

function register(){
  document.getElementById('log').style.display='none';
  document.getElementById('reg').style.display='block';
  document.getElementById('wrap').focus();
}

function login(){
  document.getElementById('reg').style.display='none';
  document.getElementById('log').style.display='block';
  document.getElementById('wrap').focus();
}