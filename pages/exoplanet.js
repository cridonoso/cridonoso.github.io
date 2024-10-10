document.write(`
<p align="center">
<img title="a title" alt="Alt text" src="https://github.com/cridonoso/cridonoso.github.io/blob/master/figures/exoplanet/banner.png?raw=true" width=700 height=220></p>

<p><a href="https://github.com/yemsnucleus"><img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"></a></p>
<h2><p style="text-align: left;">Using Deep Learning to detect faint exo-planets</p></h2>
<p><img src="https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white" alt="PyTorch"><img src="https://img.shields.io/badge/SciPy-%230C55A5.svg?style=for-the-badge&logo=scipy&logoColor=%white" alt="SciPy"><img src="https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black" alt="Matplotlib"><img src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white" alt="Pandas"><img src="https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white" alt="NumPy"><img src="https://img.shields.io/badge/yaml-%23ffffff.svg?style=for-the-badge&logo=yaml&logoColor=151515" alt="YAML"></p>
<p><b>Finding planets outside our solar system is very hard because the stars they orbit are much brighter</b>. Scientists use special tools to make the stars look dimmer and see the planets. However, these tools are not enough to detect exo-planets. </p>
<p>Post-processing techniques are essential for identifying faint exoplanet candidates within noisy astronomical data. Advanced computer vision models, such as <b>convolutional neural networks (CNNs), can be applied to these processed images to enhance detection sensitivity and reduce false positives</b>. </p>
<p>By leveraging these powerful tools, we can significantly increase the number of exoplanet discoveries, expanding our understanding of planetary formation, evolution, and the potential for extraterrestrial life.</p>
<blockquote>
<p>In this project, <b> we propose to develop a general neural network model capable of learning from diverse exoplanetary systems</b>. By training this model on a variety of planetary configurations, we aim to enhance its ability to detect exoplanets in novel observational datasets.</p>
</blockquote>
<h3>Initial approach</h3>
<p>The image below depicts <b>the PDS70 system</b>, which consists of <b>the star PDS70 and its exoplanet PDS70b</b>. 
A <b>coronagraph</b>, a specialized tool designed to block the light from a star, was used to capture the initial image (right). However, the host star&#39;s residual light still obscured the exoplanet. To improve contrast and reveal the planet, we applied a post-processing technique called <b>Annular PCA</b>. This method reduces noise and enhances features in annular regions of the image, where exoplanets are most likely to be found.</p>
<p align="center">
<img title="a title" alt="Alt text" src="https://github.com/cridonoso/cridonoso.github.io/blob/master/figures/exoplanet/pds70.png?raw=true" width=500 height=350></p>
PDS70b is a striking example of an exoplanet. However, within the PDS70 system, there are other potential candidates that remain elusive, even after applying sophisticated post-processing techniques. These planets are extremely small and orbit a very bright star, making them difficult to detect.
<br><br>
Currently we are applying <b>Recurrent Convolutional Neural networks (RCNN)</b> on sets of post-processed iamges. RCNN can learn time correlations between images as well as extract features from the pixels in the frame.
<br><br>

<p>Building on the work of <a href="https://www.aanda.org/articles/aa/abs/2023/12/aa46085-23/aa46085-23.html">Cantero (2023)</a>, we have developed a <b>PyTorch framework</b> that is currently undergoing review for publication within our <a href="https://github.com/yemsnucleus/">organization</a>.</p>

`);

