import { isDefined } from './helpers';

function createDisplay(config) {
    
    var div = document.createElement('div')
    div.classList.add('standard')
    var imageContainer  = document.createElement('a')
    imageContainer.classList.add('image-container')
    var textContainer   = document.createElement('div')
    textContainer.classList.add('text-container')
    if (isDefined(config.href)) {
        imageContainer.href = config.href
        imageContainer.classList.add('iframe-popup')
        // imageContainer.setAttribute('data-effect', "mfp-zoom-in")
    }

    div.appendChild(imageContainer)
    div.appendChild(textContainer)

    if (isDefined(config.image)) {
        var img = document.createElement('img')
        img.onload = function() {
            msnry.layout()
        }
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
            linkDiv.classList.add('iframe-popup')
            linkDiv.innerHTML = link.name
            
            // linkDiv.appendChild(linkButton)
            linkContainer.appendChild(linkDiv)

        });

        div.appendChild(linkContainer)

    }


    if (isDefined(config.tags)) {

        var tagContainer = document.createElement('div')
        tagContainer.classList.add('tag-container')

        config.tags.forEach(tagId => {
            
            var tagObject = ALL_TAGS.filter(obj => {
                return obj.id === tagId
            })[0]
              
            var tagDiv = document.createElement('div')
            tagDiv.style.backgroundImage = "url('" + tagObject.image + "')"

            tagDiv.classList.add('tag')
            tagContainer.appendChild(tagDiv)

            // var tagDescription = document.createElement('div')
            // tagDescription.classList.add('tag-description')
            
            // var span = document.createElement('h4')
            // span.innerHTML = tagObject.name
            
            // var span2 = document.createElement('p')
            // span2.innerHTML = tagObject.description
            
            // tagDescription.appendChild(span)
            // tagDescription.appendChild(span2)
            // tagDiv.appendChild(tagDescription)
            
            tagDiv.setAttribute('title', tagObject.name) 

        });


        div.appendChild(tagContainer)


    }

    if (isDefined(config.borderImage)) {

        var borderObject = ALL_BORDERS.filter(obj => {
            return obj.id === config.borderImage
        })[0]

        div.style.border = borderObject.border
        div.style.borderImage = borderObject.value
    }

    var divWrapper = document.createElement('div')
    divWrapper.appendChild(div)



    return divWrapper
}

PAGE_CONFIG.forEach(object => {
    
    var mainContainer = document.getElementById('main-container')

    let type = object.type
    let config = object.config
    let classNames = object.class

    switch (type) {

        case 'standard':
            var div = createDisplay(config)
            break

    }

    classNames.forEach(className => {
        div.classList.add(className)
    });
    div.classList.add('component')

    mainContainer.appendChild(div)

});




