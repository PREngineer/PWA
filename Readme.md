Important considerations about progressive apps:

1. PLACE THE SERVICE WORKER FILES IN THE ROOT!  It just doesn't work right when you place them somewhere else.
2. iOS icons cannot be transparent, make sure that there is a background color on it.
   It doesn't matter if the border looks square.  
   The phone will adjust it to look like an icon.
3. On Android, USE transparency because it will not format it as an icon.
4. Hard links <a href=""></a> are not OK in iOS you should use javascript relocation.
