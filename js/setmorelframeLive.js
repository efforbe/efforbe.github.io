window.onload = function () {
    var isBookinPageLoaded = false;
    var filePath = "https://my.setmore.com/";

    var initalFrameLoad = function () {
        jQuery('.iframe_loader').hide();
        jQuery('#iframeContent').show();

        var fancyBoxHeight = $("#setmore-fancy-box").height();
        var iframewindowHeight = jQuery(window).height();

        if (iframewindowHeight > fancyBoxHeight) {
            $('#setmore-fancy-box-content').css('height', '635px');
        } else {
            $('#setmore-fancy-box-content').css('height', iframewindowHeight - 50);
        }
    };

    var setmorePopup = function (k, isReschedule, isbookAppointmentResource, e, bookingPageLink) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
        }

        var bookingPageInfo = bookingPageLink.split("/");
        var isServicePage = bookingPageInfo.indexOf("services") != -1;
        var isClassPage = bookingPageInfo.indexOf("class") != -1;
        var isClassBooking = bookingPageInfo.indexOf("bookclass") != -1;
        var isServiceBooking = bookingPageInfo.indexOf("bookappointment") != -1;
        var isStaffPage = bookingPageInfo.indexOf("resourcebookingpage") != -1;

        var templ = {};
        templ.overlay = '<div id="setmore-overlay"></div>';
        templ.popup =
            '<div id="setmore-fancy-box" style= " background-color: #FFFFFF;height: auto;left: 50%;position: absolute;top: 0;width: 80%;max-width: 400px;z-index: 9999;">' +
            '<div id="setmore-fancy-box-close-icon"></div>' +
            '<div id="setmore-fancy-box-content">' +
            '<div class="iframe_loader" style="position: absolute; left: 50%;top: 50%; -ms-transform: translate(-50%, -50%); -moz-transform: translate(-50%, -50%); -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%)"><img src="https://storage.googleapis.com/setmore-assets/2.0/Images/Logos/setmore-loader.gif" width="48" height="48" ></div>' +
            '<div id="iframeContent" style="height:100%;width:100%" ">' +
            '</div>' +
            '</div>';

        var init = function (ck) {
            if (!isBookinPageLoaded) {
                isBookinPageLoaded = true;
                renderTempl();
            } else {
                loadIframe();
                positionPopup();
                showPopup();
            }
        };

        var renderTempl = function () {
            jQuery("body").append(templ.overlay).append(templ.popup);
            positionPopup();
            loadIframe();
            bindEvents();
        };

        var loadIframe = function () {
            // Existing code for loadIframe function
        };

        var bindEvents = function () {
            jQuery("#setmore-overlay , #setmore-fancy-box-close-icon").bind("click", function () {
                hidePopup();
            });
        };

        var positionPopup = function () {
            // Existing code for positionPopup function
        };

        var hidePopup = function () {
            jQuery("#setmore-overlay,#setmore-fancy-box").hide();
            jQuery('html,body').css('overflow', 'auto');
        };

        var showPopup = function () {
            jQuery("#setmore-overlay,#setmore-fancy-box").show();
        };

        init(k);
    };

    var loadCss = function () {
        // Existing code for loadCss function
    };

    loadCss();
};
