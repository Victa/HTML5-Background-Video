# jQuery - Background video plugin

Add a background video to your website…

## Download

The full source can be downloaded from the master branch on GitHub (as a zip or gz) or installed via bower (`bower install background-video`).

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

The path option can be a string or an object with properties corresponding to the types array members, in case you need to reference videos in different locations.

## Examples

Check out the `example` folder.
