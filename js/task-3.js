"use strict";
/*
checkForSpam(message) adlı fonksiyon, bir dizeyi(string) (message parametresi) alır, içinde yasaklı kelimeler olan (spam ve sale) kelimelerinin varligini kontrol eder ve kontrol sonucunu döndürür. Parametre olarak verilen message dizesindeki kelimeler büyük-küçük harf duyarlı olabilir, örneğin SPAM veya sAlE.

Fonksiyonun kodunu aşağıdaki şekilde tamamla:

Eğer yasaklı kelime (spam veya sale) bulunursa, fonksiyon true değerini döndürür.
Eğer dizede yasaklı kelimeler bulunmuyorsa, fonksiyon false değerini döndürür.


Aşağıdaki kodu al ve fonksiyonun doğru çalışıp çalışmadığını kontrol etmek için kendi fonksiyonunun bildiriminden sonra yapıştır. Konsola işleyiş sonuçları yazdırılacaktır.
*/

function checkForSpam(message) {
  const lowerCaseMessage = message.toLowerCase();
  return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
