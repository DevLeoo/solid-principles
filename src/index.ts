import ShareButtonTwitter from "./ShareButtonTwitter";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedin from "./ShareButtonLinkedin";
import ShareButtonPrint from "./ShareButtonPrint";
import AbstractShareButton from "./AbstractShareButton";
import DOMEventHandler from "./DOMEventHandler";

const eventHandler = new DOMEventHandler();
const twitter: AbstractShareButton = new ShareButtonTwitter(
  eventHandler,
  ".btn-twitter",
  "http://www.youtube.com/"
);
twitter.bind();

const facebook: AbstractShareButton = new ShareButtonFacebook(
  eventHandler,
  ".btn-facebook",
  "http://www.youtube.com/"
);
facebook.bind();

const linkedin: AbstractShareButton = new ShareButtonLinkedin(
  eventHandler,
  ".btn-linkedin",
  "http://www.youtube.com/"
);
linkedin.bind();

const print: AbstractShareButton = new ShareButtonPrint(
  eventHandler,
  ".btn-print"
);
print.bind();
