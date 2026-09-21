const restaurant={
 name:"FIFA JUICE & CAFE",
 whatsapp:"919496686086",
 address:"YOUR ADDRESS",
 phone:"9496686086 / 8129686086"
};

/* Menu transcribed from the photos. Hot drinks are intentionally NOT included. */
const menu=[
{id:1,cat:"Loaded Fries",name:"Loaded Fries - Veg Full",price:150,emoji:"🍟",desc:"Loaded fries with veg toppings."},
{id:2,cat:"Loaded Fries",name:"Loaded Fries - Veg Half",price:100,emoji:"🍟",desc:"Loaded fries with veg toppings."},
{id:3,cat:"Loaded Fries",name:"Loaded Fries - Chicken Full",price:200,emoji:"🍗",desc:"Loaded fries with chicken."},
{id:4,cat:"Loaded Fries",name:"Loaded Fries - Chicken Half",price:120,emoji:"🍗",desc:"Loaded fries with chicken."},
{id:5,cat:"Wraps",name:"Loaded Wrap",price:120,emoji:"🌯",desc:"Loaded wrap."},
{id:6,cat:"Broasted",name:"2 PC Broasted",price:199,emoji:"🍗",desc:"2 pc broasted, 1 kuboos, 1 dip, 2 ketchup."},
{id:7,cat:"Broasted",name:"4 PC Broasted",price:379,emoji:"🍗",desc:"2 pc kuboos, 2 dip, 2 ketchup, french fries."},
{id:8,cat:"Broasted",name:"6 PC Broasted",price:529,emoji:"🍗",desc:"4 pc kuboos, 4 dip, 5 ketchup, french fries."},
{id:9,cat:"Broasted",name:"10 PC Broasted",price:779,emoji:"🍗",desc:"6 pc kuboos, 6 dip, 8 ketchup, french fries."},
{id:10,cat:"Broasted",name:"12 PC Broasted",price:929,emoji:"🍗",desc:"8 pc kuboos, 8 dip, 10 ketchup, french fries."},

{id:11,cat:"Burgers",name:"Burger Chicken",price:90,emoji:"🍔",desc:"Chicken burger."},
{id:12,cat:"Burgers",name:"Burger Veg",price:70,emoji:"🍔",desc:"Veg burger."},
{id:13,cat:"Burgers",name:"Burger Sausage",price:80,emoji:"🌭",desc:"Sausage burger."},
{id:14,cat:"Burgers",name:"Egg Chees Burger",price:120,emoji:"🍔",desc:"Egg cheese burger."},
{id:15,cat:"Burgers",name:"Nuggets Burger",price:120,emoji:"🍔",desc:"Nuggets burger."},
{id:16,cat:"Burgers",name:"Zinger Burger",price:120,emoji:"🍔",desc:"Zinger burger."},

{id:17,cat:"Momos",name:"Chicken Steamed Momos",price:100,emoji:"🥟",desc:"Chicken steamed momos."},
{id:18,cat:"Momos",name:"Chicken Fried Momos",price:110,emoji:"🥟",desc:"Chicken fried momos."},
{id:19,cat:"Momos",name:"Momos Peri Peri",price:120,emoji:"🥟",desc:"Peri peri momos."},
{id:20,cat:"Momos",name:"Momos Veg Peri Peri",price:80,emoji:"🥟",desc:"Veg peri peri momos."},
{id:21,cat:"Momos",name:"Momos Schezwan",price:120,emoji:"🥟",desc:"Schezwan momos."},
{id:22,cat:"Momos",name:"Chicken Chees Momos",price:120,emoji:"🥟",desc:"Chicken cheese momos."},

{id:23,cat:"Nuggets",name:"Nuggets 6 PCS",price:100,emoji:"🍗",desc:"6 pieces."},
{id:24,cat:"Nuggets",name:"Chicken Finger 6 PCS",price:100,emoji:"🍗",desc:"6 pieces."},
{id:25,cat:"Nuggets",name:"Veggi Sticks 6 PCS",price:80,emoji:"🥕",desc:"6 pieces."},
{id:26,cat:"Nuggets",name:"French Fries (S)",price:80,emoji:"🍟",desc:"Small."},
{id:27,cat:"Nuggets",name:"French Fries (M)",price:120,emoji:"🍟",desc:"Medium."},
{id:28,cat:"Nuggets",name:"French Fries (L)",price:150,emoji:"🍟",desc:"Large."},
{id:29,cat:"Nuggets",name:"Dip",price:10,emoji:"🥣",desc:"Dip."},
{id:30,cat:"Nuggets",name:"Kuboos",price:10,emoji:"🫓",desc:"Kuboos."},

{id:31,cat:"Wraps",name:"Chicken Wrap",price:100,emoji:"🌯",desc:"Chicken wrap."},
{id:32,cat:"Wraps",name:"Chicken Wrap (L)",price:100,emoji:"🌯",desc:"Large chicken wrap."},
{id:33,cat:"Wraps",name:"Egg Wrap",price:80,emoji:"🌯",desc:"Egg wrap."},
{id:34,cat:"Wraps",name:"Egg Wrap (L)",price:80,emoji:"🌯",desc:"Large egg wrap."},

{id:35,cat:"Aval Special",name:"Aval Milk",price:60,emoji:"🥛",desc:"Aval milk."},
{id:36,cat:"Aval Special",name:"Mango Aval",price:80,emoji:"🥭",desc:"Mango aval."},
{id:37,cat:"Aval Special",name:"Kitkat Aval",price:80,emoji:"🍫",desc:"Kitkat aval."},
{id:38,cat:"Aval Special",name:"Aval Karikku",price:80,emoji:"🥥",desc:"Aval karikku."},
{id:39,cat:"Aval Special",name:"Ice Cream Aval",price:100,emoji:"🍨",desc:"Ice cream aval."},
{id:40,cat:"Aval Special",name:"Ice Cream Fruit Aval",price:120,emoji:"🍨",desc:"Ice cream fruit aval."},
{id:41,cat:"Aval Special",name:"Fruit Aval",price:80,emoji:"🍎",desc:"Fruit aval."},
{id:42,cat:"Aval Special",name:"Chocolate Aval",price:100,emoji:"🍫",desc:"Chocolate aval."},

{id:43,cat:"Milk Shakes",name:"Krikk Shake",price:80,emoji:"🥤",desc:"Milk shake."},
{id:44,cat:"Milk Shakes",name:"Sharjah",price:60,emoji:"🥤",desc:"Sharjah shake."},
{id:45,cat:"Milk Shakes",name:"Kitkat",price:80,emoji:"🥤",desc:"Kitkat shake."},
{id:46,cat:"Milk Shakes",name:"Chocolate",price:80,emoji:"🍫",desc:"Chocolate shake."},
{id:47,cat:"Milk Shakes",name:"Oreo",price:80,emoji:"🥤",desc:"Oreo shake."},
{id:48,cat:"Milk Shakes",name:"Chocolate Sharjah",price:80,emoji:"🥤",desc:"Chocolate Sharjah."},
{id:49,cat:"Milk Shakes",name:"Milk Sarbath",price:40,emoji:"🥛",desc:"Milk sarbath."},
{id:50,cat:"Milk Shakes",name:"Cold Coffee",price:40,emoji:"☕",desc:"Cold coffee."},
{id:51,cat:"Milk Shakes",name:"Cold Boost",price:50,emoji:"🥤",desc:"Cold Boost."},
{id:52,cat:"Milk Shakes",name:"Cold Horlicks",price:50,emoji:"🥤",desc:"Cold Horlicks."},

{id:53,cat:"Fruits Shakes",name:"Avocado Shake",price:100,emoji:"🥑",desc:"Avocado shake."},
{id:54,cat:"Fruits Shakes",name:"Mango Shake",price:80,emoji:"🥭",desc:"Mango shake."},
{id:55,cat:"Fruits Shakes",name:"Shamam Shake",price:80,emoji:"🍈",desc:"Shamam shake."},
{id:56,cat:"Fruits Shakes",name:"Guva Shake",price:80,emoji:"🍈",desc:"Guava shake."},
{id:57,cat:"Fruits Shakes",name:"Chikkoo Shake",price:80,emoji:"🥤",desc:"Chikoo shake."},
{id:58,cat:"Fruits Shakes",name:"Strawberry Shake",price:80,emoji:"🍓",desc:"Strawberry shake."},
{id:59,cat:"Fruits Shakes",name:"Papaya Shake",price:80,emoji:"🍊",desc:"Papaya shake."},
{id:60,cat:"Fruits Shakes",name:"Grape Shake",price:80,emoji:"🍇",desc:"Grape shake."},

{id:61,cat:"Fresh Juice",name:"Watermelon",price:40,emoji:"🍉",desc:"Fresh watermelon juice."},
{id:62,cat:"Fresh Juice",name:"Cucumber",price:40,emoji:"🥒",desc:"Fresh cucumber juice."},
{id:63,cat:"Fresh Juice",name:"Pineapple",price:60,emoji:"🍍",desc:"Fresh pineapple juice."},
{id:64,cat:"Fresh Juice",name:"Orange",price:60,emoji:"🍊",desc:"Fresh orange juice."},
{id:65,cat:"Fresh Juice",name:"Grape",price:60,emoji:"🍇",desc:"Fresh grape juice."},
{id:66,cat:"Fresh Juice",name:"Mango",price:60,emoji:"🥭",desc:"Fresh mango juice."},
{id:67,cat:"Fresh Juice",name:"Carrot",price:60,emoji:"🥕",desc:"Fresh carrot juice."},
{id:68,cat:"Fresh Juice",name:"Musk Melon",price:60,emoji:"🍈",desc:"Fresh musk melon juice."},
{id:69,cat:"Fresh Juice",name:"Citrus",price:60,emoji:"🍊",desc:"Fresh citrus juice."},
{id:70,cat:"Fresh Juice",name:"Papaya",price:60,emoji:"🍊",desc:"Fresh papaya juice."},
{id:71,cat:"Fresh Juice",name:"Mixed Juice",price:80,emoji:"🍹",desc:"Mixed fresh juice."},
{id:72,cat:"Fresh Juice",name:"ABC Juice",price:80,emoji:"🍎",desc:"ABC juice."},
{id:73,cat:"Fresh Juice",name:"Beetroot",price:60,emoji:"🥤",desc:"Fresh beetroot juice."},

{id:74,cat:"Ice Cream Shake",name:"Chocolate",price:100,emoji:"🍫",desc:"Ice cream shake."},
{id:75,cat:"Ice Cream Shake",name:"Strawberry",price:80,emoji:"🍓",desc:"Ice cream shake."},
{id:76,cat:"Ice Cream Shake",name:"Butter Scotch",price:80,emoji:"🍨",desc:"Ice cream shake."},
{id:77,cat:"Ice Cream Shake",name:"Vanilla",price:80,emoji:"🍦",desc:"Ice cream shake."},
{id:78,cat:"Ice Cream Shake",name:"Pista",price:80,emoji:"🍨",desc:"Ice cream shake."},
{id:79,cat:"Ice Cream Shake",name:"Mango",price:80,emoji:"🥭",desc:"Ice cream shake."},

{id:80,cat:"Desserts & Coolers",name:"Falooda",price:120,emoji:"🍨",desc:"Falooda."},
{id:81,cat:"Desserts & Coolers",name:"Muhabatha",price:60,emoji:"🥤",desc:"Muhabatha."},
{id:82,cat:"Desserts & Coolers",name:"Sarbath",price:60,emoji:"🥤",desc:"Sarbath."},

{id:83,cat:"Lime Soda",name:"Fresh Lime",price:20,emoji:"🍋",desc:"Fresh lime."},
{id:84,cat:"Lime Soda",name:"Mint Lime",price:20,emoji:"🌿",desc:"Mint lime."},
{id:85,cat:"Lime Soda",name:"Pineapple Lime",price:30,emoji:"🍍",desc:"Pineapple lime."},
{id:86,cat:"Lime Soda",name:"Watermelon Lime",price:30,emoji:"🍉",desc:"Watermelon lime."},
{id:87,cat:"Lime Soda",name:"Grape Lime",price:30,emoji:"🍇",desc:"Grape lime."},
{id:88,cat:"Lime Soda",name:"Lime Soda",price:30,emoji:"🍋",desc:"Lime soda."},
{id:89,cat:"Lime Soda",name:"Pineapple Soda",price:30,emoji:"🍍",desc:"Pineapple soda."},
{id:90,cat:"Lime Soda",name:"Watermelon Soda",price:30,emoji:"🍉",desc:"Watermelon soda."},
{id:91,cat:"Lime Soda",name:"Grape Soda",price:30,emoji:"🍇",desc:"Grape soda."},
{id:92,cat:"Lime Soda",name:"Orange Soda",price:30,emoji:"🍊",desc:"Orange soda."},
{id:93,cat:"Lime Soda",name:"Mango + Chilli Soda",price:30,emoji:"🥭",desc:"Mango and chilli soda."}
];

let cart={},active="All";
function setup(){document.title=restaurant.name+" | Online Ordering";document.querySelector(".brand strong").textContent=restaurant.name;document.querySelector(".hero h1").textContent=restaurant.name;document.querySelector("footer h3").textContent=restaurant.name;document.querySelector("footer p:nth-of-type(1)").textContent="📍 "+restaurant.address;document.querySelector("footer p:nth-of-type(2)").textContent="📞 "+restaurant.phone}
function cats(){let a=["All",...new Set(menu.map(x=>x.cat))];document.getElementById("categories").innerHTML=a.map(c=>`<button class="cat ${c===active?"active":""}" onclick="active='${c}';cats();render()">${c}</button>`).join("")}
function render(){let a=active==="All"?menu:menu.filter(x=>x.cat===active);document.getElementById("menuGrid").innerHTML=a.map(x=>`<article class="card"><div class="pic">${x.emoji}</div><h3>${x.name}</h3><div class="desc">${x.desc}</div><div class="row"><span class="price">₹${x.price}</span><button class="add" onclick="add(${x.id})">ADD +</button></div></article>`).join("")}
function add(id){cart[id]=(cart[id]||0)+1;update();openCart()}
function change(id,n){cart[id]=(cart[id]||0)+n;if(cart[id]<=0)delete cart[id];update()}
function update(){let count=0,total=0;let out=Object.entries(cart).map(([id,q])=>{let x=menu.find(a=>a.id==id);count+=q;total+=x.price*q;return `<div class="cartItem"><div><b>${x.name}</b><br>₹${x.price} × ${q}</div><div class="qty"><button onclick="change(${id},-1)">−</button> ${q} <button onclick="change(${id},1)">+</button></div></div>`}).join("");document.getElementById("cartItems").innerHTML=out||"<p>Your cart is empty.</p>";document.getElementById("cartCount").textContent=count;document.getElementById("total").textContent=total}
function openCart(){document.getElementById("cart").classList.add("open");document.getElementById("overlay").classList.add("show")}
function closeCart(){document.getElementById("cart").classList.remove("open");document.getElementById("overlay").classList.remove("show")}
function orderNo(){let d=new Date();return "FIFA-"+d.getFullYear()+String(d.getMonth()+1).padStart(2,"0")+String(d.getDate()).padStart(2,"0")+"-"+Math.floor(100+Math.random()*900)}
document.getElementById("orderNo").textContent=orderNo();


document.getElementById("orderNo").textContent=orderNo();

/* Firebase */
const firebaseConfig = {
  apiKey: "AIzaSyC-MteBY5MtE4OLRjbVkh8tTQEm3DQ79ik",
  authDomain: "fifa-juice-cafe.firebaseapp.com",
  projectId: "fifa-juice-cafe",
  storageBucket: "fifa-juice-cafe.firebasestorage.app",
  messagingSenderId: "607943642691",
  appId: "1:607943642691:web:4d24f2c55a03eb686bcef6"
};

const firebaseApp = import("https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js");
const firestoreApp = import("https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js");

const dbPromise = Promise.all([firebaseApp, firestoreApp]).then(async ([firebase, firestore]) => {
  const app = firebase.initializeApp(firebaseConfig);
  return firestore.getFirestore(app);
});

/* Save order to Firebase */
document.getElementById("orderForm").addEventListener("submit", async e => {
  e.preventDefault();

  if(!Object.keys(cart).length){
    alert("Please add an item first.");
    return;
  }

  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const type = document.getElementById("orderType").value;
  const no = document.getElementById("orderNo").textContent;

  let total = 0;
  let items = [];

  Object.entries(cart).forEach(([id,q]) => {
    const x = menu.find(a => a.id == id);

    if(x){
      total += x.price * q;

      items.push({
        id: x.id,
        name: x.name,
        price: x.price,
        quantity: q,
        subtotal: x.price * q
      });
    }
  });

  try {
    const db = await dbPromise;

    const { collection, addDoc, serverTimestamp } =
      await import("https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js");

    const docRef = await addDoc(collection(db, "orders"), {
      orderNumber: no,
      customerName: name,
      phone: phone,
      address: address,
      orderType: type,
      items: items,
      total: total,
      status: "New",
      createdAt: serverTimestamp()
    });

    alert("Order placed successfully! 🎉\nOrder No: " + no);
   localStorage.setItem("fifaOrderId", docRef.id);
localStorage.setItem("fifaOrderNo", no);
let stopTracking = null;
async function startOrderTracking(orderId, orderNo) {
  const db = await dbPromise;

  const { doc, onSnapshot } =
    await import("https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js");

  const tracking = document.getElementById("orderTracking");

  if (!tracking) return;

  tracking.style.display = "block";
  document.getElementById("trackOrderNo").textContent = orderNo;

  if (stopTracking) stopTracking();

  stopTracking = onSnapshot(
    doc(db, "orders", orderId),
    (snapshot) => {
      if (!snapshot.exists()) return;

      const status = snapshot.data().status || "New";

      const steps = ["New", "Preparing", "Out for Delivery", "Completed"];
      const current = steps.indexOf(status);

      document.getElementById("track1").textContent =
        current >= 0 ? "🟢 Order Placed" : "⚪ Order Placed";

      document.getElementById("track2").textContent =
        current >= 1 ? "🟢 Preparing" : "⚪ Preparing";

      document.getElementById("track3").textContent =
        current >= 2 ? "🟢 Out for Delivery" : "⚪ Out for Delivery";

      document.getElementById("track4").textContent =
        current >= 3 ? "🟢 Completed" : "⚪ Completed";

      document.getElementById("trackStatus").textContent = status;
    }
  );
}

const savedOrderId = localStorage.getItem("fifaOrderId");
const savedOrderNo = localStorage.getItem("fifaOrderNo");

if (savedOrderId) {
  startOrderTracking(savedOrderId, savedOrderNo);
}
  
setup();
cats();
render();
update();
