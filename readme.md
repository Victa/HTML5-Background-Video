# jQuery - Background video plugin

Add a background video to your website…

## Usage

Add the script to your homepage after jquery `<script src="js/libs/jquery.backgroundvideo.min.js"></script>`

And launch the plugin :

    <script>
      $(document).ready(function() {
        var videobackground = new $.backgroundVideo($('body'), {
          "align": "centerXY",
          "width": 1280,
          "height": 720,
          "path": "media/",
          "filename": "cloud",
          "types": ["mp4","ogg","webm"]
        });
      });
    </script>


## Examples

Check out the `example` folder.
