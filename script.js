//tablo içeriğine ait js kodları//
let ctx1=document.getElementById("chart1").getContext("2d");
let chart1=new Chart(ctx1, 
    {
    type: "bar",
    data:{
        labels:["January", "February", "March", "April", "May", "June", "July"],
        datasets:[
            {
                label:"Gain",
                backgroundColor:"#fece76",
                data:[12,59,75,56,58,12,59],
                
            },
            {
                label:"Lost",
                backgroundColor:"#D03C55",
                data:[-12,-30,-25,-36,-2,-18,-49],
            },
        ],
    }
});


//takvim içeriğine ait js kodları//
// import AirDatepicker from 'air-datepicker';

const calendarContainer = document.getElementById('my-element');
const datepicker = new AirDatepicker(calendarContainer);
datepicker.show();

// Kullanıcı bir tarih seçtiğinde çalışacak işlevi tanımlayın
datepicker.onSelect((date) => {
    console.log(date);
  });


 