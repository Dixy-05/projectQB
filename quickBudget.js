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
//create item with  enter key code

var userInput = document.getElementById('userInput');
userInput.addEventListener('keypress', enterStroke);
function enterStroke(keyEvent) {
  if (keyEvent.which === 13) {
    createItem();
  }
}
//Create item with "Enter" button
var enterButton = document.getElementById('enterButton');
enterButton.addEventListener('click', createItem);

function createItem() {
  if (userInput.value == '') {
    return null;
  }

  var item = document.createElement('li');
  item.id = 'item';
  item.className = 'itemClass';
  item.innerHTML = userInput.value;
  var xbutton = document.createElement('button');
  xbutton.id = 'nodeButton';
  item.appendChild(xbutton);
  var textNode = document.createTextNode('X');
  textNode.id = 'textNode';
  xbutton.appendChild(textNode);
  document.getElementById('shoppingList').appendChild(item);
  var checkBox = document.createElement('input');
  checkBox.id = 'checkBox';
  checkBox.type = 'checkbox';
  item.appendChild(checkBox);
  xbutton.addEventListener('click', deleteItem);
  function deleteItem() {
    document.getElementById('shoppingList').removeChild(item);
  }
  userInput.value = '';
}
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
var newListButton = document.getElementById('nListButton');
newListButton.addEventListener('click', createNewNote);
function createNewNote() {
  document.getElementById('noteInput').value = '';
}

var weekBalance = 0;
var monthBalance = 0;

var monthInput = document.getElementById('amount');
var weekBudget = document.getElementById('wcalcu');
monthInput.addEventListener('change', weekBudgetfun);
function weekBudgetfun() {
  weekBudget.innerHTML = monthInput.value / 4;
  monthBalance = monthInput.value;
  weekBalance = monthBalance / 4;
}
var calculateBalance = document.getElementById('calculate');
calculateBalance.addEventListener('click', calculate);
function calculate() {
  var purchaseInput = document.getElementById('purchasein');
  monthBalance = monthBalance - purchaseInput.value;
  weekBalance = weekBalance - purchaseInput.value;
  document.getElementById('weekBalance').innerHTML = weekBalance;
  document.getElementById('monthBalance').innerHTML = monthBalance;
  var logList = document.createElement('li');
  logList.id = 'logList';
  document.getElementById('logs').appendChild(logList);
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
  document.getElementById('logList').innerHTML = '';
}
