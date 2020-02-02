// NEWSLETTER JS

// validate newsletter form fields
function validateForm(name, email) {
    const nameValidation = new RegExp(/[a-z]/gi)
    const emailValidation = new RegExp(/^(([^<>().,;:\s@']+(\.[^<>().,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    const fieldErr = []
    
    if (
        name === '' || 
        name.match(nameValidation).length < 2
    ) fieldErr.push('name')

    if (!emailValidation.test(email)) fieldErr.push('email')

    return fieldErr    
}

// submit friends data on form
function friendNewsletterSubmit() {
    const name  = document.getElementById('newsletter-friend-name')
    const email = document.getElementById('newsletter-friend-email')
    const nameFeedback = document.getElementById('newsletter-name-feedback')
    const emailFeedback = document.getElementById('newsletter-email-feedback')
    const newsFeedback = document.getElementById('newsletter-feedback')

    const validate = validateForm(name.value, email.value)

    if (validate.length === 0) {
        newsFeedback.textContent = `Novidades compartilhadas com ${name.value}.`
        name.blur()
        email.blur()
        setTimeout(() => {
            newsFeedback.textContent = ''
            name.value = ''
            email.value = ''
        }, 2000)
    }
    if (validate.indexOf('email') >= 0) {
        emailFeedback.textContent = 'Preencher com formato de e-mail padrão.'
        email.focus()
    }
    else emailFeedback.textContent = ''
    if (validate.indexOf('name') >= 0) {
        nameFeedback.textContent  = 'Preencher com, no mínimo, 2 caracteres.'
        name.focus()
    }
    else nameFeedback.textContent = ''
}

// triggers that calls newsletter submit function
const newsletterSubmit = document.getElementById('newsletter-submit-button')
const nameNewsletterField = document.getElementById('newsletter-friend-name')
const emailNewsletterField = document.getElementById('newsletter-friend-email')
newsletterSubmit.addEventListener('click', friendNewsletterSubmit)   
nameNewsletterField.addEventListener('keypress', function(key) {     
    if (key.keyCode === 13) {
        friendNewsletterSubmit()
    }
})
emailNewsletterField.addEventListener('keypress', function(key) {
    if (key.keyCode === 13) {
        friendNewsletterSubmit()
    }
})


// PRODUCTS JS

// add a product
function appProduct(main, product) {
    const div = document.createElement('div')
    div.classList.add('product')

    const elements = []

    const img = document.createElement('img')
    img.src = 'http:' + product.image
    img.alt = product.name
    elements.push(img)

    const p1 = document.createElement('p')
    p1.classList.add('product-name')
    p1.textContent = product.name
    elements.push(p1)

    const p2 = document.createElement('p')
    p2.classList.add('product-description')
    p2.textContent = product.description
    elements.push(p2)
    
    const p3 = document.createElement('p')
    p3.classList.add('product-oldPrice')
    p3.textContent = 'De: R$' + product.oldPrice
    elements.push(p3)
    
    const p4 = document.createElement('p')
    p4.classList.add('product-price')
    p4.textContent = 'Por: R$' + product.price
    elements.push(p4)
    
    const p5 = document.createElement('p')
    p5.classList.add('product-installments')
    p5.textContent = 'ou: ' + product.installments.count + 'x de R$' + product.installments.value
    elements.push(p5)
    
    const a = document.createElement('a')
    a.classList.add('buy-button')
    a.href  = '#'
    a.textContent = 'Comprar'
    elements.push(a)

    for (let i = 0; i < elements.length; i++) {
        div.appendChild(elements[i])
    }

    main.appendChild(div)
}

let products = []
let nextPage = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1'

const moreProductsButton = document.getElementById('more-products')

// calls api with products info and add each product with addProduct function
async function loadProducts(page) {
    const loadingEffect = document.getElementById('loading')
    const loadProdError = document.getElementById('load-products-error')
    loadProdError.style.display = 'none'
    moreProductsButton.style.display = 'none'
    loadingEffect.style.display = 'block'
    await axios
        .get(page)
        .then(res => {
            products = res.data.products
            nextPage = 'http://' + res.data.nextPage
        })
        .then(() => {
            const main = document.getElementById('products')
            for (let i = 0; i < products.length; i++) {
                appProduct(main, products[i])
            }
            loadingEffect.style.display = 'none'
            moreProductsButton.style.display = 'block'
        })
        .catch(() => {  
            loadingEffect.style.display = 'none'
            moreProductsButton.style.display = 'block'
            loadProdError.style.display = 'block'
        })
}
loadProducts(nextPage) // trigger that calls loadProduct on page loading.

// trigger that calls loadProducts
moreProductsButton.addEventListener('click', function() {
    loadProducts(nextPage)
})


