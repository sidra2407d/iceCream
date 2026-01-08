// Chart.js configurations for all pages

function initDashboardCharts() {
    // Orders Chart
    const ordersCtx = document.getElementById('ordersChart');
    if (ordersCtx) {
        new Chart(ordersCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Orders',
                    data: [120, 150, 180, 200, 240, 280, 310, 290, 260, 300, 320, 342],
                    borderColor: '#ff66b2',
                    backgroundColor: 'rgba(255, 102, 178, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: { 
                    legend: { 
                        display: true,
                        labels: {
                            color: '#2c2c54'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 102, 178, 0.1)'
                        },
                        ticks: {
                            color: '#2c2c54'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 102, 178, 0.1)'
                        },
                        ticks: {
                            color: '#2c2c54'
                        }
                    }
                }
            }
        });
    }
}

function initOrderStatusChart() {
    // Order Status Chart
    const orderStatusCtx = document.getElementById('orderStatusChart');
    if (orderStatusCtx) {
        new Chart(orderStatusCtx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['Pending', 'Processing', 'Sent', 'Completed'],
                datasets: [{
                    data: [23, 17, 42, 260],
                    backgroundColor: [
                        'rgba(255, 204, 0, 0.8)',
                        'rgba(255, 102, 178, 0.8)',
                        'rgba(157, 101, 201, 0.8)',
                        'rgba(39, 174, 96, 0.8)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#2c2c54',
                            padding: 20
                        }
                    }
                }
            }
        });
    }
}

function initFeedbackChart() {
    // Feedback Chart
    const feedbackCtx = document.getElementById('feedbackChart');
    if (feedbackCtx) {
        new Chart(feedbackCtx.getContext('2d'), {
            type: 'pie',
            data: {
                labels: ['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star'],
                datasets: [{
                    data: [45, 30, 15, 7, 3],
                    backgroundColor: [
                        'rgba(255, 204, 0, 0.8)',
                        'rgba(255, 102, 178, 0.8)',
                        'rgba(157, 101, 201, 0.8)',
                        'rgba(108, 117, 125, 0.8)',
                        'rgba(220, 53, 69, 0.8)'
                    ]
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#2c2c54',
                            padding: 20
                        }
                    }
                }
            }
        });
    }
}

function initRevenueChart() {
    // Revenue Chart
    const revenueCtx = document.getElementById('revenueChart');
    if (revenueCtx) {
        new Chart(revenueCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                datasets: [{
                    label: 'Revenue ($)',
                    data: [3200, 3800, 4200, 4800, 5200, 5800, 6200, 6800, 7200, 8240],
                    borderColor: '#27ae60',
                    backgroundColor: 'rgba(39, 174, 96, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: { 
                    legend: { 
                        display: true,
                        labels: {
                            color: '#2c2c54'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 102, 178, 0.1)'
                        },
                        ticks: {
                            color: '#2c2c54'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 102, 178, 0.1)'
                        },
                        ticks: {
                            color: '#2c2c54'
                        }
                    }
                }
            }
        });
    }
}

function initUserAcquisitionChart() {
    // User Acquisition Chart
    const userAcquisitionCtx = document.getElementById('userAcquisitionChart');
    if (userAcquisitionCtx) {
        new Chart(userAcquisitionCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                datasets: [{
                    label: 'New Users',
                    data: [85, 92, 105, 110, 120, 128, 135, 140, 138, 142],
                    backgroundColor: 'rgba(255, 102, 178, 0.8)',
                    borderColor: '#ff66b2',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: { 
                    legend: { 
                        display: true,
                        labels: {
                            color: '#2c2c54'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 102, 178, 0.1)'
                        },
                        ticks: {
                            color: '#2c2c54'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 102, 178, 0.1)'
                        },
                        ticks: {
                            color: '#2c2c54'
                        }
                    }
                }
            }
        });
    }
}

function initTrafficChart() {
    // Traffic Chart
    const trafficCtx = document.getElementById('trafficChart');
    if (trafficCtx) {
        new Chart(trafficCtx.getContext('2d'), {
            type: 'pie',
            data: {
                labels: ['Direct', 'Social Media', 'Email', 'Search', 'Referral'],
                datasets: [{
                    data: [35, 25, 20, 15, 5],
                    backgroundColor: [
                        'rgba(255, 102, 178, 0.8)',
                        'rgba(255, 204, 0, 0.8)',
                        'rgba(157, 101, 201, 0.8)',
                        'rgba(39, 174, 96, 0.8)',
                        'rgba(108, 117, 125, 0.8)'
                    ]
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#2c2c54',
                            padding: 20
                        }
                    }
                }
            }
        });
    }
}

function initPageViewsChart() {
    // Page Views Chart
    const pageViewsCtx = document.getElementById('pageViewsChart');
    if (pageViewsCtx) {
        new Chart(pageViewsCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                datasets: [{
                    label: 'Page Views',
                    data: [1200, 1350, 1420, 1550, 1620, 1780, 1850, 1920, 2050, 2180],
                    borderColor: '#9d65c9',
                    backgroundColor: 'rgba(157, 101, 201, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: { 
                    legend: { 
                        display: true,
                        labels: {
                            color: '#2c2c54'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 102, 178, 0.1)'
                        },
                        ticks: {
                            color: '#2c2c54'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 102, 178, 0.1)'
                        },
                        ticks: {
                            color: '#2c2c54'
                        }
                    }
                }
            }
        });
    }
}

// Export chart functions
window.ChartFunctions = {
    initDashboardCharts,
    initOrderStatusChart,
    initFeedbackChart,
    initRevenueChart,
    initUserAcquisitionChart,
    initTrafficChart,
    initPageViewsChart
};