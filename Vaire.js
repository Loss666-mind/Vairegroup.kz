$(document).ready(function() {
    // Когда пользователь нажимает на кнопку, показываем соответствующий раздел
    $('.ad').click(function() {
        // Скрываем все разделы
        $('.section').hide();
        
        // Получаем класс кнопки, чтобы определить, какой раздел показывать
        var sectionClass = $(this).attr('class').split(' ')[1];
        
        // Показываем соответствующий раздел
        $('.' + sectionClass).show();
    });
});
