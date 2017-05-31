Important considerations about progressive apps:

1. PLACE THE SERVICE WORKER FILES IN THE ROOT!  It just doesn't work right when you place them somewhere else.

   For some reason the sw.js file couldn't be loaded from anywhere else.
   Chrome was showing that the network request could not be fulfilled.

2. iOS icons cannot be transparent, make sure that there is a background color on it.

   It doesn't matter if the border looks square.  
   The phone will adjust it to look like an icon.
   The manup.js file in the root helps to generate the icon.

3. On Android, USE transparency because it will not format it as an icon.

4. Hard links <a href=""></a> are not OK in iOS.  

   They open in Safari.
   You should use javascript relocation.
