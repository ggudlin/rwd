$(document).ready(function () {

    $('form').submit(function (e) { e.preventDefault(); return false; });

    $("#nekidiv").html("Partneri").addClass("btn btn-default ");


    $("#nekidiv,.partneriicon").on('click', function () {
        //$("#lista").toggle('slow');
        DajZadjnePartnere();
    });

     
    DajZadjnePartnere();

     
    function DajZadjnePartnere() {
        var formatiraniHTML = "";
        var i = 0;
        $.ajax({
            url: "http://www.spin.hr/ng/servicezagogu/",
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            timeout: 10000,
            success: function (data, status) {
                j = ""
                $.each(data, function (i, item) {

                    i = i + 1;
                    if (j != item.trgovina) {

                        if (j != "") {
                            formatiraniHTML = formatiraniHTML + '</div>'
                        }

                        formatiraniHTML = formatiraniHTML + '<div class="col-md-12"><div class="mojitem clearfix bg-primary" data-id="' + item.trgovinaId + '" >'
                        + '<div class="col-md-10">'
                        + '<span class="glyphicon glyphicon-chevron-down ">  '
                        + item.trgovina
                        + '</span>'
                        + '</div>'
                        + '<span class="col-md-2 "><input type="text" class="form-control nevidljivo"></span> '
                        + '</div></div>';



                        j = item.trgovina;

                        formatiraniHTML = formatiraniHTML + '<div class="nevidljivo trgovinaid' + item.trgovinaId + ' ">'

                     };

                    formatiraniHTML = formatiraniHTML + '<div class="col-md-4 "><div class="mojitem1 clearfix " data-id="' + item.robaid + '" >'
                        + '<span class="col-xs-7  ">'
                        + item.roba + '<br/>'  
                        + '</span>'
                        + '<span class="col-xs-5">'
                        + '<h4>'
                        + 'aaa'
                        + 'kn</h4>'
                        + '</span>'
                        + '</div></div>';

                    if (i == 3) { formatiraniHTML = formatiraniHTML + '<div class="clearfix"></div>'; i = 0; }

                });
                $("#lista").html(formatiraniHTML);
                $(".mojitem").on('click', function () { PartneriDet($(this).attr("data-id")); });
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(thrownError);
            }
        });
    }



    function PartneriDet(id) {
        $(".trgovinaid" + id).removeClass("nevidljivo");
    }


     


});


