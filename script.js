function createArray() {
    var lengthInput = document.getElementById("arrayLength");
    var length = parseInt(lengthInput.value);
  
    // Перевірка на введення числа
    if (isNaN(length)) {
      alert("Будь ласка, введіть числове значення для довжини масиву.");
      lengthInput.value = '';
      return;
    }
  
    var array = [];
  
    // Заповнення масиву елементами, введеними користувачем
    for (var i = 0; i < length; i++) {
      var element = prompt("Введіть елемент масиву:");
      array.push(element);
    }
  
    // Сортування масиву за зростанням
    array.sort();
  
    // Видалення елементів з масиву з 2 по 4 (включно)
    array.splice(1, 3);
  
    // Виведення вмісту масиву на сторінку
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Вміст масиву:</h2><p>" + array.join(", ") + "</p>";
  }
  