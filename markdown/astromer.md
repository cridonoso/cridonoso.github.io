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
 <p align="center"><img title="a title" alt="Alt text" src="https://github.com/cridonoso/cridonoso.github.io/blob/master/figures/astromer/lc.png?raw=true" width=480 height=350></p> 
