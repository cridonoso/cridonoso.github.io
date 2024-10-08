<p align="center">
<img title="a title" alt="Alt text" src="https://github.com/cridonoso/cridonoso.github.io/blob/master/figures/astromer/banner.png?raw=true" width=600 height=180></p>

 ## <p style="text-align: left;">A transformer pre-trained model for light curve representation</p>

The Astromer project aims to create a pre-trained foundational model for light curve representation. In collaboration with the Universidad de Concepción and the Institute of Applied Computation Sciences at Harvard, this project was inspired by the success of Large Language Models to develop a novel approach for embedding and representing light curve data.

### How does it work?
Similar to text embeddings, Astromer can create embeddings for raw light curves from sequences of observations taken by telescopes in a particular moment (_see image bellow_). 
 <p align="center"><img title="a title" alt="Alt text" src="https://github.com/cridonoso/cridonoso.github.io/blob/master/figures/astromer/lc.png?raw=true" width=480 height=350></p> 
The shape of the light curve characterizes the astronomical object. Astronomers usually extract statistical and physical features from the time series data to categorize objects into classes. <b>Astromer can do it automatically in a self-supervised way!</b>
<br><br>
Astromer optimizes an attention-based encoder to predict masked values that are randomly chosen. 
<br><br>
<p style='text-align: right;'><i>
<b>The model must look at the context</b> to predict the hidden elements. If the model can predict using the information around, then we can say <b>the model has understood the domain.</b>
</i></p>  

The Astromer training pipeline is as follows:
1. <b>Collect large amounts of data</b> from public astronomical datasets
2. Format the data to efficiently <b>manage it on GPU/CPU memory</b>
3. Randomly choose mask positions within the sequence
4. Feed the masked sequence into the Astromer model
5. <b>Predict</b> the values for the masked observations
6. Compute the root-mean-square error between the predicted and real values
7. <b>Backpropagate</b> the error through the Astromer model to update the weights"

<b>After pre-training</b>, we can use the learned representations to create embeddings that can be used as input for other <b>downstream models</b>, such as classifiers or regressors.

### Results 
We have shown significant <b>improvement when using the Astromer embeddings</b> for training LSTM and MLP classifiers. In the figure below, the Baseline is an LSTM model trained directly on the light curves (without computing embeddings)
 <p align="center">
 <img title="a title" alt="Alt text" src="https://github.com/cridonoso/cridonoso.github.io/blob/master/figures/astromer/labels_clf.png?raw=true" width=450 height=30>
 <img title="a title" alt="Alt text" src="https://github.com/cridonoso/cridonoso.github.io/blob/master/figures/astromer/ogle_clf.png?raw=true" width=480 height=200>
 </p> 
In our experiments, we tested different scenarios regarding the available training data. The x-axis represents the number of labeled samples used for training the classifier. As we increase the number of training samples, the classification performance also improves.

The columns (a, b, c) represent different scenarios:

> (a) We trained the classifier without updating the Astromer model weights

> (b) We trained the classifier and backpropagated gradients to the Astromer encoder. In this case, we updated the Astromer weights by informing the model about the classes we want to classify.

>(c) We first fine-tuned the Astromer model on a larger reconstruction dataset, and then trained the classifier as described in (b).

### Python Library 
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)

Finally, we created a [Python library](https://pypi.org/project/ASTROMER/) to share the Astromer functionalities with the community. We also [open-sourced the code](https://github.com/astromer-science/main-code) and encourage users to upload their own pre-trained weights to reduce the need for training on similar data projects :deciduous_tree:.