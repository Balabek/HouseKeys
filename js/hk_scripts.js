$(document).ready(function(){

    // Agencies slider
    $('.agencies_slider').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    dots: true,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots: true,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 495,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 360,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    // Hamburger menu animation
    $('.hk_nav_toggler').on('click', function(){
        $('.animated-icon1').toggleClass('open');
    });



    // Selecting all checkboxes toggle
    const selectAllCheckbox = document.getElementById('selectAll');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    selectAllCheckbox.addEventListener('change', function() {
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = selectAllCheckbox.checked;
        });
    });


    // Selecting one folder at a time
    $('.copy_folder_option').click(function() {
        $('.copy_folder_option').not(this).removeClass('selected');
        $('.copy_folder_option img.folderbox').not($(this).find('img.folderbox')).removeClass('selected');
        $('h6.copy_folder_option_title').not($(this).find('h6')).removeClass('selected');

        $(this).toggleClass('selected');
        $(this).find('img.folderbox').toggleClass('selected');
        $(this).find('h6.copy_folder_option_title').toggleClass('selected');
    });


    $.fn.modal.Constructor.prototype._enforceFocus = function() {};


});