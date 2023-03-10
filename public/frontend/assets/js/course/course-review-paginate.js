(function ($) {
    "use strict";
    let loadMorePageCount;
    $(function () {
        loadMorePageCount = 1;
    });

    $(document).on('click', '.loadMore', function () {
        var courseReviewPaginateRoute = $('.courseReviewPaginateRoute').val();
        loadMorePageCount++;
        $.ajax({
            type: "POST",
            url: courseReviewPaginateRoute,
            data: {
                'page': loadMorePageCount,
                '_token': $('meta[name="csrf-token"]').attr('content')
            },
            datatype: "json",
            success: function (res) {
                if (res.reviews.current_page == res.reviews.last_page) {
                    $("#loadMoreBtn").removeClass('d-block')
                    $("#loadMoreBtn").addClass('d-none')
                }
                $('#appendReviews').append(res.appendReviews);
            }
        });
    });
})(jQuery)
