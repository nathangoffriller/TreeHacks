var is_Clicked = document.getElementById('searcg').onclick 

// if( is_Clicked == true) {
//   const usrLocation = document.getElementById('Location')
// }

function userData() {
  const loc = document.getElementById('Location');
  window.location = 'https://treehacks-scisearch.web.app/testGIS.html'
  alert("CHANGING " + loc)
}