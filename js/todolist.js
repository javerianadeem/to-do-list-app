

// Create a new list item when clicking on the "Add" button
function newElement() {
  const divv = document.createElement('div');
  const li = document.createElement('li');
  var span1 = document.createElement("SPAN");
  const val = document.querySelector('input[type="text"]').value;
  var span2 = document.createElement("SPAN");
  var x = document.createElement("i");
  var a = document.createElement("a");
  var y = document.createElement("i");
  var z = document.createElement("i");


divv.className = "row first-row"
span1.className="col xl10 l9 m8 s6 name"
span2.className = 'col xl2 l3 m4 s6 icon'
  x.className = 'material-icons btn btn-small orange tooltipped checked'
  a.className='modal-trigger';
  y.className = 'material-icons btn btn-small red tooltipped edit'
  z.className = 'material-icons btn btn-small yellow tooltipped delete'

  span1.textContent = val;
  x.textContent = 'check_circle_outline'
  y.textContent = 'create'
  z.textContent = 'delete'
  // SET ATTRIBUTES 
x.setAttribute('data-position','top');
x.setAttribute('data-tooltip','Check');

y.setAttribute('data-position','top');
y.setAttribute('data-tooltip','Edit');

z.setAttribute('data-position','top');
z.setAttribute('data-tooltip','Delete');

a.setAttribute('href','#modal-edit');
//appending childs
a.appendChild(y);

span2.appendChild(x);
span2.appendChild(a);
span2.appendChild(z);

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

var g = document.getElementsByClassName('edit');
var updateLi = document.getElementsByTagName('li');
var placeholder = document.getElementById('wtf');
var ps= document.getElementById('update-item')
for (var i = 0, len = g.length; i < len; i++)
{
    (function(index){
        g[i].onclick = function(){
              
              var d = updateLi[index];
              document.querySelector('input[class="wtf"]').value = d.firstElementChild.innerText;
              ps.onclick = function() {
              if (document.querySelector('input[class="wtf"]').value === '')
              {
                  alert('You must write something');
              }
              else{
                  d.firstElementChild.innerHTML = document.querySelector('input[class="wtf"]').value;
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
  var a = document.createElement("i");
  var aa = document.createElement("a");
  var b = document.createElement("i");
  var c = document.createElement("i");
  a.textContent = 'check_circle_outline'
  b.textContent = 'create'
  c.textContent = 'delete'
  span.className = 'col xl2 l3 m4 s6 icon'
  a.className = 'material-icons btn btn-small orange tooltipped checked'
  aa.className='modal-trigger';
  b.className = 'material-icons btn btn-small red tooltipped edit'
  c.className = 'material-icons btn btn-small yellow tooltipped delete'
  // SET ATTRIBUTES 
a.setAttribute('data-position','top');
a.setAttribute('data-tooltip','Check');


b.setAttribute('data-position','top');
b.setAttribute('data-tooltip','Edit');


c.setAttribute('data-position','top');
c.setAttribute('data-tooltip','Delete');

aa.setAttribute('href','#modal-edit');
//appending childs
aa.appendChild(b);
span.appendChild(a);
span.appendChild(aa);
span.appendChild(c);
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










/*

var list = document.getElementsByClassName("checked");
for(i=0;i<list.length;i++){
    
list[i].onclick = function() {

 if(this.innerHTML= "check_circle_outline")
      {
    this.innerHTML= "check_circle";
    this.setAttribute('data-tooltip','Checked');
      }
      else {
        this.innerHTML= "check_circle_outline";
        this.setAttribute('data-tooltip','Check');
      }
}

}
*/
/*var list = document.getElementsByClassName("checked");
var j;
for (j = 0; j < list.length; j++) {
  list[j].onclick = function() {
      if(this.innerHTML= "check_circle_outline")
      {
    this.innerHTML= "check_circle";
    this.setAttribute('data-tooltip','Checked');
      }
      else if (this.innerHTML= "check_circle") {
        this.innerHTML= "check_circle_outline";
        this.setAttribute('data-tooltip','Check');
      }
  }
}*/



// EDIT FUNCTION 

var g = document.getElementsByClassName('edit');
var updateLi = document.getElementsByTagName('li');
var placeholder = document.getElementById('wtf');
var ps= document.getElementById('update-item')
for (var i = 0, len = g.length; i < len; i++)
{
    (function(index){
        g[i].onclick = function(){
              
              var d = updateLi[index];
              document.querySelector('input[class="wtf"]').value = d.firstElementChild.innerText;
              ps.onclick = function() {
              if (document.querySelector('input[class="wtf"]').value === '')
              {
                  alert('You must write something');
              }
              else{
                  d.firstElementChild.innerHTML = document.querySelector('input[class="wtf"]').value;
        }
    }
        }
    })(i);
}
