var sCurrency = document.getElementById('currencyChoice');
var currency = document.getElementsByClassName('currency');
sCurrency.addEventListener('change', theCurrency);
function theCurrency() {
  for (i = 0; i < currency.length; i++) {
    if (sCurrency.value == '$') {
      currency[i].innerHTML = '$';
    } else {
      currency[i].innerHTML = 'Lps.';
    }
  }
}
//create item with  enter key code------------------------------//
var userInput = document.getElementById('userInput');
userInput.addEventListener('keypress', enterStroke);
function enterStroke(keyEvent) {
  if (keyEvent.which === 13) {
    createItem();
  }
}
//Creatin list with AddButton--------------------------------------------//
var enterButton = document.getElementById('enterButton');
enterButton.addEventListener('click', createItem);
//Function  to create a list---------------------------------//
function createItem() {
  //Validate Add button----------------------------------//
  if (userInput.value == '') {
    return null;
  }
  //Create new item--------------------------------------//
  var item = document.createElement('li');
  item.id = 'item';
  item.className = item.innerHTML = userInput.value;
  document.getElementById('shoppingList').appendChild(item);
  //Create button for text node----------------------//
  var xbutton = document.createElement('button');
  xbutton.id = 'nodeButton';
  item.appendChild(xbutton);
  var textNode = document.createTextNode('X');
  textNode.id = 'textNode';
  xbutton.appendChild(textNode);
  xbutton.addEventListener('click', deleteItem);
  function deleteItem() {
    document.getElementById('shoppingList').removeChild(item);
  }
  //Create CheckBox-----------------------------//
  var checkBox = document.createElement('input');
  checkBox.id = 'checkBox';
  checkBox.className = 'checkBoxClass';
  checkBox.name = 'checkBoxName';
  checkBox.type = 'checkbox';
  item.appendChild(checkBox);
  //Add event to item Checkbox-----------------------------//
  var theCheckBox = document.getElementsByClassName('checkBoxClass');
  function crossThrough() {
    for (i = 0; i < theCheckBox.length; i++) {
      theCheckBox[i].addEventListener('change', crossout);
      function crossout() {
        if (this.checked) {
          this.closest('li').style.textDecoration = 'line-through';
          this.closest('li').style.backgroundColor = 'gray';
        } else {
          this.closest('li').style.textDecoration = 'none';
          this.closest('li').style.backgroundColor = 'rgb(106, 158, 29)';
        }
      }
    }
  }
  crossThrough();
  // Reset user input----------------------------//
  userInput.value = '';
}

// Adding event to  "Reset list" button-------------------------------------//
var newListButton = document.getElementById('nListButton');
newListButton.addEventListener('click', createNewList);
function createNewList() {
  document.getElementById('shoppingList').innerHTML = '';
  /*var items = document.getElementsByClassName('itemClass');
  var itemsLength = items.length;
  for (i = 0; i < itemsLength; i++) {
    var item = items[0];
    document.getElementById('shoppingList').removeChild(item);
  }*/
}

//container fase 1
var weekBalance = 0;
var monthBalance = 0;

var monthInput = document.getElementById('amount');
var weekBudget = document.getElementById('wcalcu');
//container fase 2
monthInput.addEventListener('change', weekBudgetfun);
function weekBudgetfun() {
  weekBudget.innerHTML = monthInput.value / 4;
  monthBalance = monthInput.value;
  weekBalance = monthBalance / 4;
}
//Container fase 3
//Calculating Balance-----------------------------------------//
var calculateBalance = document.getElementById('calculate');
calculateBalance.addEventListener('click', calculate);
function calculate() {
  var purchaseInput = document.getElementById('purchasein');
  monthBalance = monthBalance - purchaseInput.value;
  weekBalance = weekBalance - purchaseInput.value;
  document.getElementById('weekBalance').innerHTML = weekBalance;
  document.getElementById('monthBalance').innerHTML = monthBalance;
  // Creating purchase logs------------------------------------------//
  var logList = document.createElement('li');
  logList.id = 'logList';
  logList.className = 'classLogList';
  document.getElementById('logs').appendChild(logList);
  //Validating Logs-------------------------------//
  if (purchaseInput.value == '') {
    return;
  }

  var currentDate = new Date();
  var formatedDate =
    currentDate.getFullYear() +
    '-' +
    (currentDate.getMonth() + 1) +
    '-' +
    currentDate.getDate() +
    '  ' +
    '/' +
    ' ' +
    currentDate.getHours() +
    ':' +
    currentDate.getMinutes() +
    ':' +
    currentDate.getSeconds();
  var currency = document.getElementById('purchaseCurrency').innerHTML;
  logList.innerHTML =
    purchaseInput.value + '  ' + currency + ' &#x2794; ' + ' ' + formatedDate;
  purchaseInput.value = '';
}
//Reseting the budget-----------------------------------------------------//
var newBudget = document.getElementById('createNew');
newBudget.addEventListener('click', createNewBudget);
function createNewBudget() {
  var monthInput = document.getElementById('amount');
  monthInput.value = '';
  var weekBudget = document.getElementById('wcalcu');
  weekBudget.innerHTML = '0.00';
  document.getElementById('shoppingList').innerHTML = '';
  document.getElementById('noteInput').value = '';
  document.getElementById('weekBalance').innerHTML = '0.00';
  document.getElementById('monthBalance').innerHTML = ' 0.00';
  var classLogList = document.getElementById('logs');
  classLogList.innerHTML = '';
}
