$(document).ready(function () {
  let globale = 0

  $('.tulip_always').draggable({
    zIndex: 999999
  })

  $('.drop').droppable({
    drop: function (event, ui) {
      const attr = ui.helper[0].src
      const add = '_vase.png'
      const src = attr.slice(0, -4)
      let newSrc = `${src}${add}`
      const num = src.slice(-1)
      const z = num + num
      ui.helper.css('z-index', z)
      globale++
      ui.helper.attr('src', newSrc)
      ui.helper.css('left', '222px')
      ui.helper.css('top', '160px')
      ui.helper.css('transform', 'rotate(0deg) scale(1)')
      ui.helper.css('width', '600')
      ui.helper.css('height', 'auto')

      if (globale === 7) {
        const black = $('.black')
        black.removeClass('d-none')

        setTimeout(() => {
          const black = $('.black')
          black.removeClass('o-zero')
        }, 1000)

        setTimeout(() => {
          const pergament = $('.pergament')
          pergament.removeClass('no-pergament')
          const text = $('.text')
          text.removeClass('d-none')
        }, 2500)

        setTimeout(() => {
          const text = $('.text')
          text.removeClass('o-zero')
          const line = $('.line')
          line.removeClass('d-none')
        }, 4000)

        setTimeout(() => {
          const line = $('.line')
          line.removeClass('hide-line')
          line.removeClass('o-zero')
        }, 5000)
      }

      ui.helper.droppable('disable')
    }
  })

  $('.line').on('click', () => {
    if (globale == 7) {
      location.reload()
    }
  })
})