$.ajax({
    type: 'GET',
    url: 'http://workerp.herokuapp.com/products',
    dataType: 'json',
    success: function (data) {
        alert('aee');
    },
    
});