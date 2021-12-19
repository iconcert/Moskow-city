$( function() {
    $( "#datepicker" ).datepicker({
    	firstDay: 1,
    	changeMonth: true,
    	changeYear: true,
    	showOtherMonths: true,
    	selectOtherMonths: true,
    	altField: "#alternate",
    	monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    	monthNamesShort: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    	dayNamesMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
    });
  } );