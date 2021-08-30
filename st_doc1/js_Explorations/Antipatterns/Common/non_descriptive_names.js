{
    class ApplicationController {
        constructor ( link ) { // link not a Url
            this.link = link;
        }

        execute ( handler ) {  // handler not a function ; execute
            this.link ( handler );
        }
    }
}