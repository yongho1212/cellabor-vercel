
#!/bin/sh
cd ../
mkdir output
cp -R ./cellabor-client/* ./output
cp -R ./output ./cellabor-client/


##!/bin/sh
#cd ../
#mkdir output
#rsync -av ./cellabor-client/ ./output/
#rsync -av ./output/ ./cellabor-client/
