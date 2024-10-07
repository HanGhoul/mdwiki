(function ($) {
    var mathGimmick = {
        name: "math",
        once: function () {
            $.md.linkGimmick(this, "math", load_mathjax);
        }
    };
    $.md.registerGimmick(mathGimmick);

    function load_mathjax($links, opt, ref) {
        $links.remove();
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = $.md.prepareLink(
            "cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/latest.js?config=TeX-AMS-MML_HTMLorMML",
            { forceSSL: true }
        );
        document.getElementsByTagName("head")[0].appendChild(script);
    }
})(jQuery);
