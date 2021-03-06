echo -e "Starting Postinstall Script\n\n\n"
cd RestApi
echo -e "In RestApi"
npm i
echo -e "Completed installing Packages in RestApi\n\n\n"
cd ..
echo -e "Back to Root\n\n\n"
cd Scrappers
echo -e "In Scrappers\n\n\n"
npm i
echo -e "Completed installing Packages in Scrappers\n\n\n"
cd ..
echo -e "Back to Root\n\n\n"
cd UI
echo -e "In UI\n\n\n"
npm i

echo -e "Completed installing Packages in UI\n\n\n"
npm run build
echo -e "Angular Build Completed\n\n\n"
cd ..
echo -e "Back to Root\n\n\n"