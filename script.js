
const tennisProducts = [
    {name:'Nike Air Max', image:'images/tennis1.jpg', price:''},
    {name:'Adidas Ultraboost', image:'images/tennis2.jpg', price:''},
    {name:'Puma RS-X', image:'images/tennis3.jpg', price:''},
    {name:'Converse All Star', image:'images/tennis4.jpg', price:''},
    {name:'Vans Old Skool', image:'images/tennis5.jpg', price:''},
    {name:'Reebok Classic', image:'images/tennis6.jpg', price:''},
    {name:'New Balance 574', image:'images/tennis7.jpg', price:''},
    {name:'Asics Gel-Lyte', image:'images/tennis8.jpg', price:''},
    {name:'Jordan 1', image:'images/tennis9.jpg', price:''},
    {name:'Nike Blazer', image:'images/tennis10.jpg', price:''}
];

const hommesProducts = [
    {name:'T-shirt Homme', image:'images/homme1.jpg', price:''},
    {name:'Chemise Casual', image:'images/homme2.jpg', price:''},
    {name:'Veste Homme', image:'images/homme3.jpg', price:''},
    {name:'Jean Slim', image:'images/homme4.jpg', price:''},
    {name:'Jogging', image:'images/homme5.jpg', price:''},
    {name:'Polo Homme', image:'images/homme6.jpg', price:''},
    {name:'Short Été', image:'images/homme7.jpg', price:''},
    {name:'Pull Léger', image:'images/homme8.jpg', price:''},
    {name:'Blouson', image:'images/homme9.jpg', price:''},
    {name:'Veste Jeans', image:'images/homme10.jpg', price:''}
];

const femmesProducts = [
    {name:'Robe Femme', image:'images/femme1.jpg', price:''},
    {name:'Top Élégant', image:'images/femme2.jpg', price:''},
    {name:'Jean Femme', image:'images/femme3.jpg', price:''},
    {name:'Veste Femme', image:'images/femme4.jpg', price:''},
    {name:'T-shirt Femme', image:'images/femme5.jpg', price:''},
    {name:'Jupe', image:'images/femme6.jpg', price:''},
    {name:'Chemisier', image:'images/femme7.jpg', price:''},
    {name:'Pull Femme', image:'images/femme8.jpg', price:''},
    {name:'Combinaison', image:'images/femme9.jpg', price:''},
    {name:'Veste Légère', image:'images/femme10.jpg', price:''}
];

function displayProducts(products, containerId){
    const container = document.getElementById(containerId);
    products.forEach(p=>{
        const card = document.createElement('div');
        card.className='product-card';
        card.innerHTML=`
            <img src="${p.image}" alt="${p.name}" width="180">
            <h3>${p.name}</h3>
            <p>Prix: ${p.price} FCFA</p>
            <a href="https://wa.me/237690049647?text=Bonjour,+je+suis+intéressé+par+${encodeURIComponent(p.name)}" target="_blank">
                <button>Commander sur WhatsApp</button>
            </a>
        `;
        container.appendChild(card);
    });
}

displayProducts(tennisProducts,'tennis-grid');
displayProducts(hommesProducts,'hommes-grid');
displayProducts(femmesProducts,'femmes-grid');

// Admin
const adminForm = document.getElementById('admin-form');
adminForm.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const image = document.getElementById('product-image').value;
    const category = document.getElementById('product-category').value;
    const card = document.createElement('div');
    card.className='product-card';
    card.innerHTML=`
        <img src="images/${image}" alt="${name}" width="180">
        <h3>${name}</h3>
        <p>Prix: ${price} FCFA</p>
        <a href="https://wa.me/237690049647?text=Bonjour,+je+suis+intéressé+par+${encodeURIComponent(name)}" target="_blank">
            <button>Commander sur WhatsApp</button>
        </a>
    `;
    if(category==='tennis') document.getElementById('tennis-grid').appendChild(card);
    else if(category==='hommes') document.getElementById('hommes-grid').appendChild(card);
    else document.getElementById('femmes-grid').appendChild(card);
    adminForm.reset();
});
