var user_field = document.getElementById('username');
user_field.setAttribute('id','user-field');
user_field.setAttribute('class','form-control');
user_field.setAttribute('placeholder','e.g. moneymuncher');

var pass_field = document.getElementById('password');
pass_field.setAttribute('id','pass-field');
pass_field.setAttribute('class','form-control');
pass_field.setAttribute('placeholder','Minimum 8 Characters');

var repeat_field = document.getElementById('repeat');
repeat_field.setAttribute('id','repeat-field');
repeat_field.setAttribute('class','form-control');
repeat_field.setAttribute('placeholder','Type it again!');

var button = document.getElementById('submit');
button.setAttribute('class','btn btn-primary');