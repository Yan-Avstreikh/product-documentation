---
title: configure-and-check-the-host-header
displayName: Manage the Host header
published: true
order: 40
toc:
   --1--What is the Host header?: "what-is-the-host-header"
   --1--Manage: "how-to-manage-the-host-header"
   --1--Disable: "how-to-disable-the-change-host-header-option"
   --1--Check: "how-to-check-the-host-header"
---
  
  
  

What is the Host header?
------------------------

The Host header is the mandatory header of HTTP requests. CDN servers send it to the origin when they request content. The Host header helps determine which website or web application, out of all those stored on the server, contains the requested content.

The Change Host header option controls the Host header. It is automatically enabled and populated when you [create a CDN resource](https://gcore.com/support/articles/213969429/) and specify the origin’s domain name/IP address or select a group of origins. In the latter case, the domain name or IP address of the first resource in the group will be used as the Host header.

For example, let’s create a CDN resource and specify _yourdomain.com_ in the Origin section as follows:

<img src="https://support.gcore.com/hc/article_attachments/11698761812241" alt="" width="630" height="888">

This value will appear at the Change Host header option as follows:

<img src="https://support.gcore.com/hc/article_attachments/11698730009873" alt="" width="598" height="244">

How to manage the Host header
-----------------------------

If you change the origin source after resource creation, the Host header value will not be changed automatically. You will need to manually change it. If the value is not corrected, the CDN resource will refer to the new source using the old Host header, resulting in an error for end users instead of content.

1. Open the Resource settings in the control panel.

<img src="https://support.gcore.com/hc/article_attachments/11774871054737" alt="mceclip0.png">

2. Go to the HTTP headers section and select the Host header option.

3. Configure the option. There are two ways to set it up:

*   Custom Host header option: Select this if you use only one origin source, and specify the domain or IP address.
*   Forward Host header: select this if it is important to send the same Host header in the request to the origin as was sent in the request to the CDN server.

4. Save your changes.

Don’t forget to [clear the CDN cache](https://gcore.com/support/articles/214532065/) afterwards.

How to disable the Change Host header option
--------------------------------------------

In most cases, end users will get 4xx or 5xx errors if the Change Host header option is disabled. To avoid this, you should enable the option and set the appropriate value.

However, if you are [using a default CDN resource (\*.gvideo.io) for streaming](https://gcore.com/support/articles/5499359292561/), the Host header will take the value of the CNAME of the CDN resource. This is the value that the option will take as soon as it is disabled.

<img src="https://support.gcore.com/hc/article_attachments/11774870575761" alt="mceclip1.png">

How to check the Host header
----------------------------

To check if the Host header used is correct, run the following command in the terminal (Windows) or console (macOS):

curl -H "Host: example.com" -I http(s)://10.0.0.1/file.txt

where:

*   _example.com_ is the value of the Host header;
*   _http(s)_ is the protocol value, which depends on the protocol used by the source;
*   _10.0.0.1_ is the IP address of your website source; and
*   _file.txt_ is any static file that is delivered via CDN.

If you receive a 400 Bad Request or 403 Forbidden Response error in the response, your server is unable to process the specified Host header. In this case, follow the instructions above to manage the option.