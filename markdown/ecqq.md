<p align="center">
<img title="a title" alt="Alt text" src="https://github.com/cridonoso/cridonoso.github.io/blob/master/figures/exoplanet/banner.png?raw=true" width=700 height=220></p>

 ## <p style="text-align: left;">Using Deep Learning to detect faint exo-planets</p>

<b>Finding planets outside our solar system is very hard because the stars they orbit are much brighter</b>. Scientists use special tools to make the stars look dimmer and see the planets. However, these tools are not enough to detect exo-planets. 

Post-processing techniques are essential for identifying faint exoplanet candidates within noisy astronomical data. Advanced computer vision models, such as <b>convolutional neural networks (CNNs), can be applied to these processed images to enhance detection sensitivity and reduce false positives</b>. 

By leveraging these powerful tools, we can significantly increase the number of exoplanet discoveries, expanding our understanding of planetary formation, evolution, and the potential for extraterrestrial life.

> In this project, <b> we propose to develop a general neural network model capable of learning from diverse exoplanetary systems</b>. By training this model on a variety of planetary configurations, we aim to enhance its ability to detect exoplanets in novel observational datasets.

### Initial approach 
The image below depicts <b>the PDS70 system</b>, which consists of <b>the star PDS70 and its exoplanet PDS70b</b>. 
A <b>coronagraph</b>, a specialized tool designed to block the light from a star, was used to capture the initial image (right). However, the host star's residual light still obscured the exoplanet. To improve contrast and reveal the planet, we applied a post-processing technique called <b>Annular PCA</b>. This method reduces noise and enhances features in annular regions of the image, where exoplanets are most likely to be found.
<p align="center">
<img title="a title" alt="Alt text" src="https://github.com/cridonoso/cridonoso.github.io/blob/master/figures/exoplanet/pds70.png?raw=true" width=500 height=350></p>
PDS70b is a striking example of an exoplanet. However, within the PDS70 system, there are other potential candidates that remain elusive, even after applying sophisticated post-processing techniques. These planets are extremely small and orbit a very bright star, making them difficult to detect.
<br><br>
Currently we are applying <b>Recurrent Convolutional Neural networks (RCNN)</b> on sets of post-processed iamges. RCNN can learn time correlations between images as well as extract features from the pixels in the frame.
<br><br>

Building on the work of [Cantero (2023)](https://www.aanda.org/articles/aa/abs/2023/12/aa46085-23/aa46085-23.html), we have developed a <b>PyTorch framework</b> that is currently undergoing review for publication within our [organization](https://github.com/yemsnucleus/).
