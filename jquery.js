$('#send').click(function (e) { 
    e.preventDefault();
    let that = $(this)
    let text = that.text()

    // $.get("data.txt", function(data, status, xhr) {
    //     $('#data').html(data)
    // },
    // 'TEXT'
    // )

    $.ajax({
        type: "POST",
        url: "datas.txt",
        dataType: "TEXT",
        data: $('#siswa').serialize(),
        beforeSend: function() {
            that.text('Processing...')
        },
        success: function(data) {
            that.text(text)
            $('#data').html(data)
        },
        error: function(xhr, ajax, error) {
            that.text(text)
            window.alert("Sorry geys is " + xhr.status + " " + error)
        }
    })

});