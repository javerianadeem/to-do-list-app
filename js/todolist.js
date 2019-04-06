

// Create a new list item when clicking on the "Add" button
function newElement() {
  const divv = document.createElement('div');
  const li = document.createElement('li');
  var span1 = document.createElement("SPAN");
  const val = document.querySelector('input[type="text"]').value;
  var span2 = document.createElement("SPAN");
  var icon1 = document.createElement("i");
  var icon2Link = document.createElement("a");
  var icon2 = document.createElement("i");
  var icon3 = document.createElement("i");


divv.className = "row first-row"
span1.className="col xl10 l9 m8 s6 name"
span2.className = 'col xl2 l3 m4 s6 icon'
  icon1.className = 'material-icons btn btn-small #ffa726 orange lighten-1 tooltipped checked'
  icon2Link.className='modal-trigger';
  icon2.className = 'material-icons btn btn-small #ef5350 red lighten-1 tooltipped edit'
  icon3.className = 'material-icons btn btn-small #fff176 yellow lighten-2 tooltipped delete'

  span1.textContent = val;
  icon1.textContent = 'check_circle_outline'
  icon2.textContent = 'create'
  icon3.textContent = 'delete'
  // SET ATTRIBUTES 
icon1.setAttribute('data-position','top');
icon1.setAttribute('data-tooltip','Check');

icon2.setAttribute('data-position','top');
icon2.setAttribute('data-tooltip','Edit');

icon3.setAttribute('data-position','top');
icon3.setAttribute('data-tooltip','Delete');

icon2Link.setAttribute('href','#modal-edit');
//appending childs
icon2Link.appendChild(icon2);

span2.appendChild(icon1);
span2.appendChild(icon2Link);
span2.appendChild(icon3);

li.appendChild(span1);
li.appendChild(span2);
divv.appendChild(li);

if (val === '') {
  alert("You must write something!");
} else {
  document.getElementById("unordered-list").appendChild(divv);
}

/*** DELETE FUNCTION ***/
var del = document.getElementsByClassName("delete");
var i;
for (i = 0; i < del.length; i++) {
  del[i].onclick = function() {
    var div = this.parentElement.parentElement.parentElement;
    div.style.display = "none";
  }
}
// CHECKED FUNCTION //


var checkBox = document.getElementsByClassName('checked');
for (var i = 0, len = checkBox.length; i < len; i++)
{
    (function(index){
        checkBox[i].onclick = function(){
{
        // Get the output text
        var text = checkBox[index].innerHTML;
        // If the checkbox is checked, display the output text
        if (text === 'check_circle_outline')
        {
          checkBox[index].innerHTML = 'check_circle'
          checkBox[index].setAttribute('data-tooltip','Checked');
         
        } else 
        {
          checkBox[index].innerHTML = 'check_circle_outline';
          checkBox[index].setAttribute('data-tooltip','Check');
        }

}
        }
    })(i);
}
$(document).ready(function(){
  $('.tooltipped').tooltip()
  $('.modal').modal()
});

// EDIT FUNCTION 

var editColl = document.getElementsByClassName('edit');
var updateLi = document.getElementsByTagName('li');
var placeHolder = document.getElementById('wtf');
var updBtn = document.getElementById('update-item')
for (var i = 0, len = editColl.length; i < len; i++)
{
    (function(index){
        editColl[i].onclick = function(){
              
              var liIndex = updateLi[index];
              document.querySelector('input[class="wtf"]').value = liIndex.firstElementChild.innerText;
              updBtn.onclick = function() {
              if (document.querySelector('input[class="wtf"]').value === '')
              {
                  alert('You must write something');
              }
              else{
                  liIndex.firstElementChild.innerHTML = document.querySelector('input[class="wtf"]').value;
        }
    }
        }
    })(i);
}



      
}



/*  ADD FUNCTION ENDED */


// Create a "icons" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var icon1 = document.createElement("i");
  var icon2Link = document.createElement("a");
  var icon2 = document.createElement("i");
  var icon3 = document.createElement("i");
  icon1.textContent = 'check_circle_outline'
  icon2.textContent = 'create'
  icon3.textContent = 'delete'
  span.className = 'col xl2 l3 m4 s6 icon'
  icon1.className = 'material-icons btn btn-small #ffa726 orange lighten-1 tooltipped checked'
  icon2Link.className='modal-trigger';
  icon2.className = 'material-icons btn btn-small #ef5350 red lighten-1 tooltipped edit'
  icon3.className = 'material-icons btn btn-small #fff176 yellow lighten-2 tooltipped delete'
  // SET ATTRIBUTES 
icon1.setAttribute('data-position','top');
icon1.setAttribute('data-tooltip','Check');


icon2.setAttribute('data-position','top');
icon2.setAttribute('data-tooltip','Edit');


icon3.setAttribute('data-position','top');
icon3.setAttribute('data-tooltip','Delete');

icon2Link.setAttribute('href','#modal-edit');
//appending childs
icon2Link.appendChild(icon2);
span.appendChild(icon1);
span.appendChild(icon2Link);
span.appendChild(icon3);
myNodelist[i].appendChild(span);
 
}



// DATE AND TIME DISPLAY
var today = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("date").innerHTML = "Date : " + months[(today.getMonth())] + '-' + today.getDate()+ '-'+today.getFullYear();
document.getElementById("time").innerHTML = "Time : " + today.getHours()+'h '+(today.getMinutes()+1) + 'm';


/*** DELETE FUNCTION ***/
   var del = document.getElementsByClassName("delete");
   var i;
   for (i = 0; i < del.length; i++) {
     del[i].onclick = function() {
       var div = this.parentElement.parentElement.parentElement;
       div.style.display = "none";
     }
   }


// CHECKED FUNCTION //
var checkBox = document.getElementsByClassName('checked');
for (var i = 0, len = checkBox.length; i < len; i++)
{
    (function(index){
        checkBox[i].onclick = function(){
{
        // Get the output text
        var text = checkBox[index].innerHTML;
        // If the checkbox is checked, display the output text
        if (text === 'check_circle_outline')
        {
          checkBox[index].innerHTML = 'check_circle'
          checkBox[index].setAttribute('data-tooltip','Checked');
         
        } else 
        {
          checkBox[index].innerHTML = 'check_circle_outline';
          checkBox[index].setAttribute('data-tooltip','Check');
        }

}
        }
    })(i);
}



// EDIT FUNCTION 

var editColl = document.getElementsByClassName('edit');
var updateLi = document.getElementsByTagName('li');
var placeholder = document.getElementById('wtf');
var updBtn= document.getElementById('update-item')
for (var i = 0, len = editColl.length; i < len; i++)
{
    (function(index){
        editColl[i].onclick = function(){
              
              var liIndex = updateLi[index];
              document.querySelector('input[class="wtf"]').value = liIndex.firstElementChild.innerText;
              updBtn.onclick = function() {
              if (document.querySelector('input[class="wtf"]').value === '')
              {
                  alert('You must write something');
              }
              else{
                  liIndex.firstElementChild.innerHTML = document.querySelector('input[class="wtf"]').value;
        }
    }
        }
    })(i);
}
