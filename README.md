# Mountain Bike Rider Metrics
## DGMD S-14 Final Project
### Group 3
#### Amaliya Akopyan, Hannah Halvorsen, Nick Alico

*VIDEO HERE*

The Mountain Bike Rider and Trail Metrics application aims to provide mountain bikers with a personalized lense into how they are performing, and where their training may take them next. The application integrates your performance metrics with crowd-sourced mountain bike trail data to help inform riders on which trails near them may be a safe, incremental challenge in their training journey.

The app provides 2 novel performance measurements: **Trail score** and **Rider score**. 
* **Rider Score** = Informed personal rating based on a rider's activity history
  * 1-10 scale
* **Trail Score** = Crowd-sourced trail details and user input, including measurements such as average speed and average duration, which provides riders with grounding information which can be used as suggestions of what trails are truly approachable around their current rider performance level.
  * 1-10 scale

Much of our motivation extends from the fact that personalized performance insight has become a booming field in the fitness space, yet personalized trail suggestions seem to be largely underexplored. The [MTB IMBA Trail Difficulty Scale](https://pedalchile.com/blog/mtb-trail-rating) was created as a helpful generalized guide for riders to follow (you may recognize this as the ski/snowboarding difficulty scale), however this is far too generalized and cannot provide adaptive insight as bikers train and improve. The Rider Score and Trail Score aim to alleivate this descrepancy by integrating current rider performance metrics alongside up-to-date trail difficulty insight. This migration aims to improve safety for riders, encourage trail discovery, and motivate bikers to incrementally challenge themselves while having fun at the same time.

## Diagram of Score Metrics
![Score Diagram Drawing](https://lh3.googleusercontent.com/drive-viewer/AITFw-zJYB2DyXzLXJBw8bzgIrPn6pHNzm4pWDFtCZPZLE9Uli_oQsH5M_Oo3ak0UK9GSrnZDJi5B6dsmlX_PHGJLdGRRhpOQA=s2560)

## Requirements
1. Must have `npx` installed
2. Must have an iOS device
    * Note: The app can be run in the iOS simulator as well
3. Must have the [Expo Go](https://apps.apple.com/us/app/expo-go/id982107779) mobile app installed on your smartphone

## How to Run
* Clone the project
* Run `npm install` to install the necessary depenedencies

Start the application server:
```
npx expo start
```
* Then, open the Camera app on your iPhone. In your terminal, you should see a QR code is generated. Scan the QR code with your camera.
* This will prompt the Expo Go application to launch.
* Allow the app to load, and you will see the application render.
  * [Debugging Details](https://apps.apple.com/us/app/expo-go/id982107779)
  * [Official Documentation](https://docs.expo.dev/get-started/installation/)

## How to stop
* Press `CTRL + C` to kill the current server process.

## API Documentation
* Our Backend API is being host live at [bike.langswap.app](https://bike.langswap.app/)
* Endpoint Documentation: [https://bike.langswap.app/docs](https://bike.langswap.app/docs)
* **Backend Gitlab Reposity**: [https://gitlab.com/ama952/mountain-bike](https://gitlab.com/ama952/mountain-bike)

## Project Architecture
![Project Architecture](https://lh3.googleusercontent.com/drive-viewer/AITFw-wXcmTPMOpn0zlQwmuTSX4GJ0Dklw7JZTGJcpdbVq8ZiOETpNw0rD3EChPYUmXF4o57dAL5sZTtP9Is6E-dcUt4V5VSPw=s1600)

* Front-end Application: React Native with [Expo](https://expo.dev/)
* API: [FastAPI](https://fastapi.tiangolo.com/)
* Backend Platform: [Amazon EC2](https://aws.amazon.com/ec2/)
* Database: [Postgres](https://aws.amazon.com/rds/postgresql/what-is-postgresql/)
* Data Parsing & Processing: Python

## Sample Core Database Architecture
![Database Architecture](https://lh3.googleusercontent.com/drive-viewer/AITFw-zxHtnCMHYIpPX99AVj4rxiVgVTvktgiSoL7EepsPgwwfizeY9Lb06l1TVqwvFZ9_ceGdR2qy0isHSmTmVqJsl4fJvYvA=s1600)

## Resources:
* [Figma Design File](https://www.figma.com/file/WSRGcAsVMTmNGIwnlYYHzk/Trail-Tailor?type=design&node-id=0%3A1&mode=design&t=yFUCxeEE72cog2Ra-1)
* [Figma Prototype](https://www.figma.com/proto/WSRGcAsVMTmNGIwnlYYHzk/Trail-Tailor?page-id=0%3A1&type=design&node-id=1-2907&viewport=-64%2C303%2C0.4&t=Mgnh959uDVqLWjnN-1&scaling=scale-down&starting-point-node-id=1%3A2907&mode=design)

* [Project Check-in Screen Recording](https://drive.google.com/file/d/1g5GpgBJAFIHR8M-Qo1tywr__UvTGgTO2/view?usp=sharing)
* [Sample resource containing mountain biking trail data](https://github.com/sgreylewis/mtb-trail-finder/blob/master/data/US_trails_engineered.csv)
  * Credit: [sgreylewis](https://github.com/sgreylewis) on GitHub