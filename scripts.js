function toggleMode() {
    const html = document.documentElement

    if(html.classList.contains('light')) {
        html.classList.remove('light')
    } else(html.classList.add('light'))

    // uma maneira de resumir esse function, é com o toggle
    // html.classList.toggle('light')

    const img = document.querySelector('#profile img')

    if (html.classList.contains('light')) {
        img.setAttribute('src', 'assets/avatar-light.png')
        // se tiver light mode, adicionar a imagem light
    } else {
        img.setAttribute('src', 'assets/avatar.png')
        // se tiver sem light mode, manter a mesma imagem
    }

    if (html.classList.contains('light')) {
        img.setAttribute('alt', 'foto selfie de Renan no quarto') 
} else {
    img.setAttribute('alt', 'foto selfie de Renan na rua')
}

}
