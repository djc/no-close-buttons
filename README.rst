No Close Buttons
================

Firefox 57 and later
--------------------

Firefox 57 and later `do not support`_ any API to make this extension work.
If you prefer your browser tabs without close buttons, you can make it work
by adding a custom ``userChrome.css`` file to your Firefox profile:

#. Find your `profile folder`_
#. Create a directory called ``chrome`` inside it if one does not already exist
#. Create a file named ``userChrome.css`` in the new directory
#. Add the following CSS code to it:
   
   .. code-block:: css

      @namespace url("http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul");
      .tab-close-button { display: none !important; }
   

#. Open "Advanced Preferences" by typing ``about:config`` in the address bar.
#. Search for ``toolkit.legacyUserProfileCustomizations.stylesheets`` and set it to ``true``.
#. Restart Firefox

History
-------

In Firefox 31, the browser.tabs.closeButtons option was removed.
This restartless addon forces what previously used to be a value of 2 for that option:
no close buttons on any tabs.

.. _do not support: https://bugzilla.mozilla.org/show_bug.cgi?id=1392589
.. _profile folder: http://kb.mozillazine.org/Profile_folder
