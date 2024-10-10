document.write(`
<p align="center">
<img title="a title" alt="Alt text" src="https://github.com/cridonoso/cridonoso.github.io/blob/master/figures/astromer/banner.png?raw=true" width=600 height=180></p>

<p><a href="https://github.com/astromer-science"><img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"></a></p>
<h2><p style="text-align: left;">A transformer pre-trained model for light curve representation</p></h2>
<p><img src="https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white" alt="TensorFlow"><img src="https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white" alt="scikit-learn"><img src="https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black" alt="Matplotlib"><img src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white" alt="Pandas"><img src="https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white" alt="NumPy"><img src="https://img.shields.io/badge/yaml-%23ffffff.svg?style=for-the-badge&logo=yaml&logoColor=151515" alt="YAML"></p>
<br>
The Astromer project aims to create a pre-trained foundational model for light curve representation. In collaboration with the Universidad de Concepción and the Institute of Applied Computation Sciences at Harvard, this project was inspired by the success of Large Language Models to develop a novel approach for embedding and representing light curve data.

<h3>How does it work?</h3>
<p>Similar to text embeddings, Astromer can create embeddings for raw light curves from sequences of observations taken by telescopes in a particular moment (<em>see image bellow</em>). 
 <p align="center"><img title="a title" alt="Alt text" src="https://github.com/cridonoso/cridonoso.github.io/blob/master/figures/astromer/lc.png?raw=true" width=480 height=350></p> 
The shape of the light curve characterizes the astronomical object. Astronomers usually extract statistical and physical features from the time series data to categorize objects into classes. <b>Astromer can do it automatically in a self-supervised way!</b>
<br><br>
Astromer optimizes an attention-based encoder to predict masked values that are randomly chosen. 
<br><br></p>
<p style='text-align: right;'><i>
<b>The model must look at the context</b> to predict the hidden elements. If the model can predict using the information around, then we can say <b>the model has understood the domain.</b>
</i></p>  

<p>The Astromer training pipeline is as follows:</p>
<ol>
<li><b>Collect large amounts of data</b> from public astronomical datasets</li>
<li>Format the data to efficiently <b>manage it on GPU/CPU memory</b></li>
<li>Randomly choose mask positions within the sequence</li>
<li>Feed the masked sequence into the Astromer model</li>
<li><b>Predict</b> the values for the masked observations</li>
<li>Compute the root-mean-square error between the predicted and real values</li>
<li><b>Backpropagate</b> the error through the Astromer model to update the weights&quot;</li>
</ol>
<p><b>After pre-training</b>, we can use the learned representations to create embeddings that can be used as input for other <b>downstream models</b>, such as classifiers or regressors.</p>
<h3>Results</h3>
<p>We have shown significant <b>improvement when using the Astromer embeddings</b> for training LSTM and MLP classifiers. In the figure below, the Baseline is an LSTM model trained directly on the light curves (without computing embeddings)
 <p align="center">
 <img title="a title" alt="Alt text" src="https://github.com/cridonoso/cridonoso.github.io/blob/master/figures/astromer/labels_clf.png?raw=true" width=450 height=30>
 <img title="a title" alt="Alt text" src="https://github.com/cridonoso/cridonoso.github.io/blob/master/figures/astromer/ogle_clf.png?raw=true" width=480 height=200>
 </p> 
In our experiments, we tested different scenarios regarding the available training data. The x-axis represents the number of labeled samples used for training the classifier. As we increase the number of training samples, the classification performance also improves.</p>
<p>The columns (a, b, c) represent different scenarios:</p>
<blockquote>
<p>(a) We trained the classifier without updating the Astromer model weights</p>
</blockquote>
<blockquote>
<p>(b) We trained the classifier and backpropagated gradients to the Astromer encoder. In this case, we updated the Astromer weights by informing the model about the classes we want to classify.</p>
</blockquote>
<blockquote>
<p>(c) We first fine-tuned the Astromer model on a larger reconstruction dataset, and then trained the classifier as described in (b).</p>
</blockquote>
<h3>Python Library <a href="https://pypi.org/project/ASTROMER/"><img src="https://img.shields.io/badge/PyPI-3775A9?logo=pypi&logoColor=fff" alt="PyPI"></a></h3>
<p>Finally, we created a <a href="https://pypi.org/project/ASTROMER/">Python library</a> to share the Astromer functionalities with the community. We also <a href="https://github.com/astromer-science/main-code">open-sourced the code</a> and encourage users to upload their own pre-trained weights to reduce the need for training on similar data projects :deciduous_tree:.</p>

`);

