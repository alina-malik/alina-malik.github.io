$(document).ready(function () {
  let globale = 0 // переменная, нужная для дальнейшнего отслеживания выполнения задачи

  $('.tulip_always').draggable({
    zIndex: 999999
  })

  $('.drop').droppable({
    drop: function (event, ui) { // функция для области перемещения
      const attr = ui.helper[0].src // получение адреса объекта
      const add = '_vase.png' // переменная с названием и расширением файла
      const src = attr.slice(0, -4) // сокращение набора элементов до указанного диапазона
      let newSrc = `${src}${add}` // сложение переменных для получения нового адреса картинки
      const num = src.slice(-1) 
      const z = num + num // сложение переменных для получения нового z-индекса
      ui.helper.css('z-index', z) // применение нового z-индекса для перемещаемого объекта
      globale++ // увеличение переменной на 1
      ui.helper.css('transform', 'rotate(0deg) scale(1)') // отмена трансформации объектов
      ui.helper.attr('src', newSrc) // изменение адреса картинки
      ui.helper.css('left', '222px') // положение левого края для "новой" картинки
      ui.helper.css('top', '170px') // положение верхнего края
      ui.helper.css('width', '600') // заданная высота для тюльпанов
      ui.helper.css('height', 'auto')
      

      if (globale === 7) { // если переменная равна 7
        const black = $('.black') // присвоение значения новой константе (так как константы подчиняются такой же области видимости блока, как переменные объявленные с использованием ключевого слова let)
        black.removeClass('d-none') // удаление класса у выбранного элемента

        setTimeout(() => { // вызов функции (1 раз) через определенный интервал времени
          const black = $('.black') 
          black.removeClass('o-zero') // удаление класса у выбранного элемента
        }, 1000) // задержка в миллисекундах

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

      ui.helper.droppable('disable') // отключение возможности перетаскивания объекта
    }
  })

  $('.line').on('click', () => { // запускается при нажатии на ленточку
    if (globale == 7) { // если переменная равна 7
      location.reload() // перезагружаем страницу
    }
  })
})