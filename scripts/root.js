import { isDefined } from './helpers';

console.log(PAGE_CONFIG)

function createDisplay(config) {
    
    var div = document.createElement('div')
    div.classList.add('standard')
    var imageContainer  = document.createElement('a')
    imageContainer.classList.add('iamge-container')
    var textContainer   = document.createElement('div')
    textContainer.classList.add('text-container')
    if (isDefined(config.href)) {
        imageContainer.href = config.href
    }

    div.appendChild(imageContainer)
    div.appendChild(textContainer)

    if (isDefined(config.image)) {
        var img = document.createElement('img')
        img.src = config.image
        imageContainer.appendChild(img)
    }

    if (isDefined(config.title)) {
        var title = document.createElement('h3')
        title.innerHTML = config.title
        textContainer.appendChild(title)
    }

    if (isDefined(config.description)) {
        var pDiv = document.createElement('div')
        var p = document.createElement('p')
        p.innerHTML = config.description
        pDiv.appendChild(p)
        textContainer.appendChild(pDiv)
    }
    

    if (isDefined(config.links)) {

        var linkContainer = document.createElement('div')
        linkContainer.classList.add('link-container')
        
        config.links.forEach(link => {

            var linkDiv = document.createElement('a')
            // var linkButton = document.createElement('div')
            if (isDefined(link.link)) linkDiv.href = link.link
            linkDiv.classList.add('link-button')
            linkDiv.innerHTML = link.name
            // linkDiv.appendChild(linkButton)
            linkContainer.appendChild(linkDiv)

        });

    }

    div.appendChild(linkContainer)

    return div
}

PAGE_CONFIG.forEach(object => {
    
    var mainContainer = document.getElementById('main-container')

    let type = object.type
    let config = object.config

    switch (type) {

        case 'standard':
            var div = createDisplay(config)
            break

        
    }

    div.classList.add('component')

    mainContainer.appendChild(div)

});
