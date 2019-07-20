AFRAME.registerComponent("action-on-click", {
  schema: {
    action: {
      default: "navigate"
    },
    url: {
      default: ""
    }
  },
  init: function() {
    var data = this.data;
    var el = this.el;
    el.addEventListener("click", () => {
        // Send email or navigate to url
        window.open(
            data.action === 'mail' ? 
            'mailto:orangegrove_1955@hotmail.com' :
            data.url
        );
    });
  }
});
