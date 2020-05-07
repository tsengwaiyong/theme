
var theme_name_select = document.getElementById('themename');
var theme_name_select_index = theme_name_select.selectedIndex;
var theme_version_select = document.getElementById('themeversion');
var feedback = document.getElementById('feedback');
var feedback_background = document.getElementById('feedback_background');
var html = document.getElementById('html');
var samlpe_version = new Array('0.1','0.2','0.3','0.4','0.5');
var unfollow_version = new Array('0.1.1','0.1.2','0.2','0.2.1','0.3');

if(theme_name_select[theme_name_select_index].value == 'sample'){
  for(var x = 0; x < samlpe_version.length ; x++){
    theme_version_select.options.add(new Option(samlpe_version[x]));
  }
}


function changethemeversion(){

  theme_name_select = document.getElementById('themename');
  theme_name_select_index = theme_name_select.selectedIndex;
  theme_version_select = document.getElementById('themeversion');

    if(theme_version_select.options.length > 0){
      for(var i = theme_version_select.options.length;i >= 0 ; i--)
      theme_version_select.options.remove(i);
    }

  switch(theme_name_select[theme_name_select_index].value){
    case 'sample':
      for(var x = 0; x < samlpe_version.length ; x++){
        theme_version_select.options.add(new Option(samlpe_version[x]));
      }
      break;

    case 'unfollow':
      for(var x = 0; x < unfollow_version.length ; x++){
        theme_version_select.options.add(new Option(unfollow_version[x]));
      }

      break;
  }
}

function feedback_btn(state){
  if(state == 'confirm'){

  }
  else{
      html.style.overflow = 'visible';
      feedback.style.display = 'none';
      feedback_background.style.display = 'none';
  }
}



function feedback_show(){
    html.style.overflow = 'hidden';
    feedback.style.display = 'block';
    feedback_background.style.display = 'block';
}
