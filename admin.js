const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

sideLinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

const searchBtn = document.querySelector('.content nav form .form-input button');
const searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
const searchForm = document.querySelector('.content nav form');
searchBtn.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault;
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchBtnIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchBtnIcon.classList.replace('bx-x', 'bx-search');
        }
    }
});

const barChartOptions = {
    series: [
      {
        data: [2, 4, 6, 8, 12],
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: ['#E3D6A3'],
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
        horizontal: false,
        columnWidth: '40%',
      },
      dataLabels: {
        style: {
          colors: ['#E3D6A3'], 
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val;
      },
    },
    tooltip: {
      style: {
        fontSize: '14px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        color: '#E3D6A3', 
      },
    },
    theme: {
      mode: 'light', 
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ['Mocha', 'Vanilla', 'Double Chocolate', 'Espresso', 'Cappucino'],
      labels: {
        style: {
          colors: '#E3D6A3', 
        },
      },
    },
    yaxis: {
      title: {
        text: 'Count',
        style: {
          color: '#E3D6A3', 
        },
      },
    },
  };
  
  const barChart = new ApexCharts(
    document.querySelector('#bar-chart'),
    barChartOptions
  );
  barChart.render();
  

  const areaChartOptions = {
    series: [
      {
        name: 'Month Sales',
        data: [ 2560.18,  2560.18, 2560.18, 2560.18, 2560.18, 2560.18, 2560.18, 2560.18, 2560.18, 2560.18, 2560.18, 2560.18],
      },
      {
        name: 'Year Sales',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25560.18],
      },
      {
        name: 'Profit',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10560.18],
      },
      
    ],
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    colors: ['#4f35a1', '#246dec', '#E3D6A3'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ], 
    markers: {
      size: 0,
    },
    yaxis: [
      {
        title: {
          text: 'Value',
          style: {
            color: '#E3D6A3', 
          },
        },
        max: 30000, 
        
        
       
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
    },
  };
  
  const areaChart = new ApexCharts(
    document.querySelector('#area-chart'),
    areaChartOptions
  );
  areaChart.render();
  
  
  
  
  