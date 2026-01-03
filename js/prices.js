// ملف الأسعار المركزي
// أي تعديل على الأسعار يتم من هنا فقط

const prices = {
  // كوكتيل فواكه
  "آبل ريد": 80,
  "هاواي": 100,
  
  // سموذي
  "مانجو": 70,
  "فراولة": 70,
  "جوافة": 60,
  
  // زبادي
  "سادة": 50,
  "عسل": 60,
  "فواكه": 75,
  
  // آيس درينك
  "آيس موكا": 70,
  "آيس لاتيه": 60,
  "آيس كابتشينو": 70,
  
  // سوفت درينك
  "كانز": 30,
  "بيبس": 30,
  "مياه معدنية": 10
};

// دالة لتحديث الأسعار في الصفحة
function updatePrices() {
  const items = document.querySelectorAll('.item-header span:first-child');
  
  items.forEach(item => {
    const itemName = item.textContent.trim();
    if (prices[itemName]) {
      const priceSpan = item.parentElement.querySelector('span:last-child');
      if (priceSpan) {
        priceSpan.textContent = prices[itemName];
      }
    }
  });
}

// تحديث الأسعار عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', updatePrices);
