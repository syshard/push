
    Push.create("Hello from GitHub", {
        body: "This is a web notification!",
        icon: "icon.png",
        timeout: 5000,
        onClick: function() {
            console.log(this);
        }
    });
