var portfolioApp = angular.module('portfolioApp',[]);

portfolioApp.controller('GalleryListCtrl', function($scope)
{
    $scope.galleries = 
    [
        { 'title':'Cuento Vito',
        'when':'Styczeń 2021',
        'thumbnailUrl':'img/4.jpg'
        },
        { 'title':'Albert Vonreich',
        'when':'Luty 2021',
        'thumbnailUrl':'img/5.jpg'
        },
        { 'title':'Marco Tanio',
        'when':'Marzec 2021',
        'thumbnailUrl':'img/6.jpg'
        },
        { 'title':'Enric Gros',
        'when':'Kwiecień 2021',
        'thumbnailUrl':'img/7.jpg'
        },
        { 'title':'Edward Smith',
        'when':'Maj 2021',
        'thumbnailUrl':'img/8.jpg'
        },
        { 'title':'Adam Polak',
        'when':'Czerwiec 2021',
        'thumbnailUrl':'img/9.jpg'
        }
    ];
    $scope.sortList = 
    [
        {
            'label':'Alfabetycznie',
            'value':'title'
        },
        {
            'label':'Chronologicznie',
            'value':'when'
        },
        {
            'label':'Od Najnowszych',
            'value':'-when'
        },
    ];
});