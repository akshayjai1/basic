
min-width should be translated to > (greater than)

max-width should be translated to < (less than)

when we write css for mobile-first design, then we first of all write css
targetting mobile devices, mobile devices means small width devices

once we are complete writing css for small width devices, we move on to the
bigger devices, so when we say bigger devices, we immediately understand that
the width should be greater than a threshold width



Now the next thing is the approach, Bootstrap follows the mobile-first approach, i.e. it first targets mobile devices and then writes css for bigger devices, so bigger devices means greater than mobile width, i.e. > 560px, i.e min-width: 560px

so mobile-first css would be written in this fashion
css
> 560px css
min-width:560px
> 800px css
min-width:800px
> 1200px css
minx-1200
(> <--> min-width)
(< <--> max-width)

css
<min-width: 560px>
<min-width: 800px>
<min-width:1200px>


Another approach is just opposite of this approach, where we first write css for bigger screens
css
<1200px
<800px
<560px

css
max-width: 1200px
max-width: 800px
max-width: 560px