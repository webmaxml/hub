
// partials and helpers

Handlebars.registerPartial('menu-item', document.getElementById('menu-item').innerHTML)
Handlebars.registerPartial('menu', document.getElementById('menu').innerHTML)
Handlebars.registerPartial('main', document.getElementById('main').innerHTML)
Handlebars.registerPartial('notes', document.getElementById('notes').innerHTML)

Handlebars.registerHelper('isString', function(value) { return typeof value === 'string' })
Handlebars.registerHelper('getContentByName', function(name) { return data.content[name] })

// setting menu from data

const aside = document.querySelector('aside')
const menuTemplate = Handlebars.compile('{{> menu list=menu }}')
aside.innerHTML = menuTemplate(data)

// setting submenu open/close

const subs = document.querySelectorAll('.submenu')
subs.forEach(sub => {
 const trigger = sub.querySelector('.menu-button')
 trigger.addEventListener('click', e => sub.classList.toggle('close'))
})

// setting main content on menu click

const main = document.querySelector('main')
const links = document.querySelectorAll('.menu-link')
const mainTemplate = Handlebars.compile(document.getElementById('main').innerHTML)

links.forEach(link => {
 link.addEventListener('click', e => {
   e.preventDefault()
   const name = e.target.innerText
   const topic = e.target.dataset.topic
   const content = data.content[topic].find(el => el.header === name)

   main.innerHTML = mainTemplate({topic, content})
 })
})

// test

const notes = Handlebars.compile('{{> notes }}')
main.innerHTML = notes(hbs)

